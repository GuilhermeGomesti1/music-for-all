"use client";
import React, { useEffect, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);

  const [click1, setClick1] = useState<HTMLAudioElement | null>(null);
  const [click2, setClick2] = useState<HTMLAudioElement | null>(null);


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
        audio = click1;
      } else {
        audio = click2;
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
      setClick1(new Audio(audioModule.default));
    });
    import("../../../../public/audios/click2.mp3").then((audioModule) => {
      setClick2(new Audio(audioModule.default));
    });
  }, []);

  useEffect(() => {
    const tempoDisplay = document.querySelector(".tempo") as HTMLElement | null;
    const tempoText = document.querySelector(".tempoText") as HTMLElement | null;
    const tempoSlider = document.querySelector(".slider") as HTMLInputElement | null;
    const subtractBeatsButton = document.querySelector(".subtractBeats") as HTMLElement | null;
    const addBeatsButton = document.querySelector(".addBeats") as HTMLElement | null;
    const measureCount = document.querySelector(".measureCount") as HTMLElement | null;

    if (tempoDisplay && tempoSlider) {
      const updateMetronome = () => {
        tempoDisplay.textContent = bpm.toString();
        tempoSlider.value = bpm.toString();
      };

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