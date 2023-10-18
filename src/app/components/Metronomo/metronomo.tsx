"use client"
import React, { useState } from 'react';
import * as Tone from 'tone';

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMetronome = async () => {
    if (isPlaying) {
      Tone.Transport.stop();
    } else {
      try {
        // Inicie o contexto de áudio apenas após uma ação direta do usuário (clique)
        await Tone.start();
        Tone.Transport.start();
      } catch (error) {
        console.error('Erro ao iniciar o contexto de áudio:', error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={toggleMetronome}>
        {isPlaying ? 'Stop Metronome' : 'Start Metronome'}
      </button>
    </div>
  );
};

export default Metronome;
