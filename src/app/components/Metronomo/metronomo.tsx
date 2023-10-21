"use client";
import React, { useEffect, useRef, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const tempoDisplayRef = useRef<HTMLElement | null>(null);
  const tempoSliderRef = useRef<HTMLInputElement | null>(null);
  const subtractBeatsButtonRef = useRef<HTMLElement | null>(null);
  const addBeatsButtonRef = useRef<HTMLElement | null>(null);
  const measureCountRef = useRef<HTMLElement | null>(null);

  const [audios, setAudios] = useState<{ click1: HTMLAudioElement | null, click2: HTMLAudioElement | null }>({
    click1: null,
    click2: null,
  });
  let metronomeInterval: NodeJS.Timeout | null = null;

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
        audio = audios.click1;
      } else {
        audio = audios.click2;
      }
  
      if (audio) {
        audio.play();
      }
  
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
        })
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
    const startStopButton = document.querySelector(".startStop") as HTMLElement | null;

    const handleStartStopClick = () => {
      if (isPlaying) {
        stopMetronome();
      } else {
        startMetronome();
      }
    };

    if (startStopButton) {
      startStopButton.addEventListener("click", handleStartStopClick);

      return () => {
        startStopButton.removeEventListener("click", handleStartStopClick);
      };
    }
  }, [isPlaying]);
  
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
              setBeatsPerMeasure(newBeats);
            }}
          >
            -
          </button>
          <div className={styles.measureCount}>{beatsPerMeasure}</div>
          <button
            className={`${styles.addBeats} ${styles.stepper}`}
            onClick={() => {
              const newBeats = Math.min(beatsPerMeasure + 1, 12);
              setBeatsPerMeasure(newBeats);
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