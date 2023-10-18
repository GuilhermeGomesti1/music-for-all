"use client";
import React, { useEffect, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  useEffect(() => {
    const tempoDisplay = document.querySelector(".tempo") as HTMLElement | null;
    const tempoText = document.querySelector(
      ".tempoText"
    ) as HTMLElement | null;
    const decreaseTempobtn = document.querySelector(
      ".decreaseTempo"
    ) as HTMLElement | null;
    const increaseTempobtn = document.querySelector(
      ".increaseTempo"
    ) as HTMLElement | null;
    const tempoSlider = document.querySelector(
      ".slider"
    ) as HTMLInputElement | null;
    const subrtractBeats = document.querySelector(
      ".subtractBeats"
    ) as HTMLElement | null;
    const addBeats = document.querySelector(".addBeats") as HTMLElement | null;
    const measureCount = document.querySelector(
      ".measureCount"
    ) as HTMLElement | null;

    if (decreaseTempobtn && tempoSlider) {
      decreaseTempobtn.addEventListener("click", () => {
        setBpm((prevBpm) => prevBpm - 1);
        tempoSlider.value = (bpm - 1).toString();
      });
    }
    if (tempoSlider) {
      const updateBpm = (event: Event) => {
        const newBpm = parseInt((event.target as HTMLInputElement).value);
        setBpm(newBpm);
      };

      tempoSlider.addEventListener("input", updateBpm);

      return () => {
        tempoSlider.removeEventListener("input", updateBpm);
      };
    }
  }, []);

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
        <div className={`${styles.startStop} ${styles.ralewayfont}`}>
          {" "}
          Start
        </div>
        <div className={styles.measures}>
          <div className={`${styles.subtractBeats} ${styles.stepper}`}> - </div>
          <div className={styles.measureCount}>4</div>
          <div className={`${styles.addBeats} ${styles.stepper}`}> + </div>
        </div>
        <span className={styles.beatsPerMeasureText}>
          {" "}
          Batidas por compasso
        </span>
      </div>
    </div>
  );
}
