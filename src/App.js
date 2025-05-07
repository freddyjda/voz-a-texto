import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css'; // Importa el archivo CSS


const App = () => {
  
  const [isListening, setIsListening] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

 


  if (!browserSupportsSpeechRecognition) {
    return <div>Tu navegador no soporta Web Speech API.</div>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ 
      language: 'es-Es',
      continuous: true, // Esto mantiene la escucha activa
      interimResults: false,
      
    });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Transcripción de Audio chino, mamlo alingerth</h1>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Detener' : 'Empezar'}
      </button>
      <p style={{ marginTop: '20px' }}>{transcript}</p>
    </div>
  );
};

export default App;