"use client";

import Timer from "../timer/timer";
import React, { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const tempoDisplayRef = useRef<HTMLElement | null>(null);
  const tempoSliderRef = useRef<HTMLInputElement | null>(null);
  const subtractBeatsButtonRef = useRef<HTMLButtonElement | null>(null);
const addBeatsButtonRef = useRef<HTMLButtonElement | null>(null);
const measureCountRef = useRef<HTMLDivElement | null>(null);
const [timerInstance, setTimerInstance] = useState<Timer | null>(null);
  const [audios, setAudios] = useState<{ click1: HTMLAudioElement | null, click2: HTMLAudioElement | null }>({
    click1: null,
    click2: null,
  });

  const timer = new Timer(() => {
    let audio;
    if (currentBeat % beatsPerMeasure === 0) {
      audio = audios.click1;
    } else {
      audio = audios.click2;
    }
  
    if (audio) {
      audio.play();
    }
  
    setCurrentBeat((prevBeat) => (prevBeat + 1) % beatsPerMeasure);
  }, 60000 / bpm, { immediate: true });

  const startMetronome = () => {
    if (!isPlaying) {
      // Certifique-se de criar uma nova instância do Timer
      const newTimer = new Timer(() => {
        let audio;
        if (currentBeat % beatsPerMeasure === 0) {
          audio = audios.click1;
        } else {
          audio = audios.click2;
        }
    
        if (audio) {
          audio.play();
        }
    
        setCurrentBeat((prevBeat) => (prevBeat + 1) % beatsPerMeasure);
      }, 60000 / bpm, { immediate: true });

      setTimerInstance(newTimer);
      newTimer.start();
      setIsPlaying(true);
    }
  };
  
  const stopMetronome = () => {
    if (isPlaying && timerInstance) {
      console.log('Parar botão clicado');
      timerInstance.stop();
      setIsPlaying(false);
      setCurrentBeat(0);
    }
  }

  useEffect(() => {
    import("../../../../public/audios/click1.mp3").then((audioModule) => {
      setAudios((prevAudios) => ({ ...prevAudios, click1: new Audio(audioModule.default) }));
    });
    import("../../../../public/audios/click2.mp3").then((audioModule) => {
      setAudios((prevAudios) => ({ ...prevAudios, click2: new Audio(audioModule.default) }));
    });
  }, []);

  useEffect(() => {
    if (tempoDisplayRef.current && tempoSliderRef.current) {
      const updateMetronome = () => {
        if (tempoDisplayRef.current && tempoSliderRef.current) {
          tempoDisplayRef.current.textContent = bpm.toString();
          tempoSliderRef.current.value = bpm.toString();
        }
      };

      const validateTempo = (value: number) => {
        return Math.min(Math.max(value, 20), 280);
      };

      if (subtractBeatsButtonRef.current) {
        subtractBeatsButtonRef.current.addEventListener("click", () => {
          const newBpm = validateTempo(bpm - 1);
          setBpm(newBpm);
          updateMetronome();
        });
      }

      if (tempoSliderRef.current) {
        tempoSliderRef.current.value = bpm.toString();
        const updateBpm = (event: Event) => {
          const newBpm = validateTempo(parseInt((event.target as HTMLInputElement).value));
          setBpm(newBpm);
          updateMetronome();
        };

        tempoSliderRef.current.addEventListener("input", updateBpm);

        return () => {
          tempoSliderRef.current?.removeEventListener("input", updateBpm);
        };
      }
    }

    if (subtractBeatsButtonRef.current) {
      subtractBeatsButtonRef.current.addEventListener("click", () => {
        const newBeats = Math.max(beatsPerMeasure - 1, 4);
        setBeatsPerMeasure(newBeats);
        if (measureCountRef.current) {
          measureCountRef.current.textContent = newBeats.toString();
        }
      });
    }

    if (addBeatsButtonRef.current) {
      addBeatsButtonRef.current.addEventListener("click", () => {
        const newBeats = Math.min(beatsPerMeasure + 1, 12);
        setBeatsPerMeasure(newBeats);
        if (measureCountRef.current) {
          measureCountRef.current.textContent = newBeats.toString();
        }
      });
    }

    return () => {
      if (subtractBeatsButtonRef.current) {
        subtractBeatsButtonRef.current?.removeEventListener("click", () => {
          setBeatsPerMeasure((prevBeats) => Math.max(prevBeats - 1, 4));
        });
      }

      if (addBeatsButtonRef.current) {
        addBeatsButtonRef.current?.removeEventListener("click", () => {
          setBeatsPerMeasure((prevBeats) => Math.min(prevBeats + 1, 12));
        });
      }
    };
  }, [bpm]);

  useEffect(() => {
    console.log('isPlaying:', isPlaying); // Valor atualizado de isPlaying
    console.log('currentBeat:', currentBeat); // Valor atualizado de currentBeat
  }, [isPlaying, currentBeat]);

  return (
    <div className={styles.container}>
      <div className={styles.metronome}>
        <div className={styles.bpmDisplay}>
          <span className={styles.tempo} ref={tempoDisplayRef}>{bpm}</span>
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
            onChange={(event) => setBpm(parseInt(event.target.value))} 
            ref={tempoSliderRef}
          ></input>
          <button
            className={`${styles.adjustTempobtn} ${styles.increaseTempo}`}
            onClick={() => setBpm((prevBpm) => Math.min(prevBpm + 1, 280))}
          >
            +
          </button>
        </div>
        <div className={`${styles.startStop} ${styles.ralewayfont}`}>
          <button onClick={startMetronome} disabled={isPlaying}>
            Iniciar
          </button>
          <button className={styles.stopbutton} onClick={stopMetronome} disabled={!isPlaying}>
            Parar
          </button>
        </div>
        <div className={styles.measures}>
          <button
            className={`${styles.subtractBeats} ${styles.stepper}`}
            onClick={() => {
              const newBeats = Math.max(beatsPerMeasure - 1, 2);
              setBeatsPerMeasure(newBeats);
            }}
            ref={subtractBeatsButtonRef}
          >
            -
          </button>
          <div className={styles.measureCount} ref={measureCountRef}>
            {beatsPerMeasure}
          </div>
          <button
            className={`${styles.addBeats} ${styles.stepper}`}
            onClick={() => {
              const newBeats = Math.min(beatsPerMeasure + 1, 12);
              setBeatsPerMeasure(newBeats);
            }}
            ref={addBeatsButtonRef}
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
