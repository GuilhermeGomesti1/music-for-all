"use client";
import React, { useEffect, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
import click1Sound from "../../../../public/audios/click1.mp3"
import click2Sound from "../../../../public/audios/click2.mp3"

export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const click1 = new Audio(click1Sound);
  const click2 = new Audio(click2Sound);
  let metronomeInterval: NodeJS.Timeout | null = null;



  const toggleMetronome = () => {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  const handleStartStopClick = () => {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  const startMetronome = () => {
    setIsPlaying(true);
    const interval = 60000 / bpm;
    let beatCount = 0;
    
    metronomeInterval = setInterval(() => {
      let audio;
      if (beatCount % beatsPerMeasure === 0) {
        audio = click1;
      } else {
        audio = click2;
      }
      audio.play();
      beatCount++;
      setCurrentBeat((prevBeat) => (prevBeat + 1) % beatsPerMeasure);
    }, interval);
  };

  const stopMetronome = () => {
  if (metronomeInterval !== null) {
    clearInterval(metronomeInterval);
    metronomeInterval = null;
    setIsPlaying(false);
    setCurrentBeat(0);
  }
};



  useEffect(() => {
    const tempoDisplay = document.querySelector(".tempo") as HTMLElement | null;
    const tempoText = document.querySelector(".tempoText") as HTMLElement | null;
    const tempoSlider = document.querySelector(".slider") as HTMLInputElement | null;
    const subtractBeatsButton = document.querySelector(".subtractBeats") as HTMLElement | null;
    const addBeatsButton = document.querySelector(".addBeats") as HTMLElement | null;
    const measureCount = document.querySelector(".measureCount") as HTMLElement | null;

    if (tempoDisplay && tempoSlider) {
      // Função para atualizar a exibição do metrônomo
      const updateMetronome = () => {
        tempoDisplay.textContent = bpm.toString();
        tempoSlider.value = bpm.toString();
      };

      // Função para validar o valor do tempo
      const validateTempo = (value: number) => {
        return Math.min(Math.max(value, 20), 280);
      };

      const decreaseTempobtn = document.querySelector(".decreaseTempo") as HTMLElement | null;
      const increaseTempobtn = document.querySelector(".increaseTempo") as HTMLElement | null;

      if (decreaseTempobtn && tempoSlider) {
        decreaseTempobtn.addEventListener("click", () => {
          const newBpm = validateTempo(bpm - 1);
          setBpm(newBpm);
          updateMetronome();
        });
      }

      if (tempoSlider) {
        const updateBpm = (event: Event) => {
          const newBpm = validateTempo(parseInt((event.target as HTMLInputElement).value));
          setBpm(newBpm);
          updateMetronome();
        };

        tempoSlider.addEventListener("input", updateBpm);

        return () => {
          tempoSlider.removeEventListener("input", updateBpm);
        };
      }
    }

    if (subtractBeatsButton) {
      subtractBeatsButton.addEventListener("click", () => {
        const newBeats = Math.max(beatsPerMeasure - 1, 4);
        setBeatsPerMeasure(newBeats);
        if (measureCount) {
          measureCount.textContent = newBeats.toString();
        }
      });
    }

    if (addBeatsButton) {
      addBeatsButton.addEventListener("click", () => {
        const newBeats = Math.min(beatsPerMeasure + 1, 12);
        setBeatsPerMeasure(newBeats);
        if (measureCount) {
          measureCount.textContent = newBeats.toString();
        }
      });
    }

    return () => {
      if (subtractBeatsButton) {
        subtractBeatsButton.removeEventListener("click", () => {
          setBeatsPerMeasure((prevBeats) => Math.max(prevBeats - 1, 4));
        });
      }

      if (addBeatsButton) {
        addBeatsButton.removeEventListener("click", () => {
          setBeatsPerMeasure((prevBeats) => Math.min(prevBeats + 1, 12));
        });
      }
    };
  }, []);   
  
  useEffect(() => {
    const startStopButton = document.querySelector(".startStop") as HTMLElement | null;
  
    const handleStartStopClick = () => {
      if (isPlaying) {
        stopMetronome();
      } else {
        startMetronome();
      };
    };
  
    if (startStopButton) {
      startStopButton.addEventListener("click", handleStartStopClick);
  
      return () => {
        startStopButton.removeEventListener("click", handleStartStopClick);
      };
    }
  }, [isPlaying, handleStartStopClick]);

  return (
    <div className={styles.container}>
      <div className={styles.metronome}>
        <div className={styles.bpmDisplay}>
          <span className={styles.tempo}>{bpm}</span>
          <span className={`${styles.bpm} ${styles.ralewayfont}`}>BPM</span>
        </div>
        <div className={`${styles.tempoText} ${styles.ralewayfont}`}>
          Super Fast
        </div>
        <div className={styles.tempoSettings}>
          <button
            className={` ${styles.adjustTempobtn} ${styles.decreaseTempo}`}
            onClick={() => setBpm((prevBpm) => Math.max(prevBpm - 1, 20))}
          >
            -
          </button>
          <input
            className={styles.slider}
            type="range"
            min="20"
            max="280"
            step="1"
            value={bpm}
            onChange={(event) => {
              const newBpm = parseInt(event.target.value);
              setBpm(newBpm);
            }}
          ></input>
          <button
            className={`${styles.adjustTempobtn} ${styles.increaseTempo}`}
            onClick={() => setBpm((prevBpm) => Math.min(prevBpm + 1, 280))}
          >
            +
          </button>
        </div>
        <div className={`${styles.startStop} ${styles.ralewayfont}`} onClick={handleStartStopClick}>
        {isPlaying ? "Parar" : "Iniciar"}
      </div>
        <div className={styles.measures}>
        <button
    className={`${styles.subtractBeats} ${styles.stepper}`}
    onClick={() => {
      const newBeats = Math.max(beatsPerMeasure - 1, 2);
      setBeatsPerMeasure(newBeats); // Atualize o estado
    }}
  >
    -
  </button>
  <div className={styles.measureCount}>{beatsPerMeasure}</div>
  <button
    className={`${styles.addBeats} ${styles.stepper}`}
    onClick={() => {
      const newBeats = Math.min(beatsPerMeasure + 1, 12);
      setBeatsPerMeasure(newBeats); // Atualize o estado
    }}
  >
    +
  </button>
        </div>
        <span className={styles.beatsPerMeasureText}>
          
          Batidas por compasso
        </span>
        
      </div>
    </div>
  );
}
