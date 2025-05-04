import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Tu navegador no soporta Web Speech API.</div>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ 
      language: 'es-ES',
      continuous: true // Esto mantiene la escucha activa
    });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Transcripción de Audio</h1>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Detener' : 'Empezar'}
      </button>
      <p style={{ marginTop: '20px' }}>{transcript}</p>
    </div>
  );
};

export default App;