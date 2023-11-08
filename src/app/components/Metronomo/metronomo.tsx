"use client";
import React, { useCallback, useEffect, useRef, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
import click1Sound from "../../../../public/audios/click1.mp3";
import click2Sound from "../../../../public/audios/click2.mp3";
import Timer from "../../components/timer/timer.js";

export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [tempoTextString, setTempoTextString] = useState("Medium");
  const metronomeRef = useRef(
    new Timer(playClick, 60000 / bpm, { immediate: false, errorCallback: null })
  );

  let click1: HTMLAudioElement | undefined;
  let click2: HTMLAudioElement | undefined;

  if (typeof Audio !== "undefined") {
    click1 = new Audio(click1Sound);
    click2 = new Audio(click2Sound);
  }

  let count = 0;
  let isRunning = false;

  function playClick() {
    if (count === beatsPerMeasure) {
      count = 0;
    }
    if (count === 0) {
      click1?.play(); // Adicione o operador de verificação de nulidade
    } else {
      click2?.play(); // Adicione o operador de verificação de nulidade
      if (click2) {
        click2.currentTime = 0;
      }
    }
    count++;
  }

  const startStopMetronome = () => {
    if (!isRunning) {
      if (metronomeRef.current) {
        metronomeRef.current.start();
      }
      isRunning = true;
    } else {
      if (metronomeRef.current) {
        metronomeRef.current.stop();
      }
      isRunning = false;
    }
  };
  const updateMetronome = useCallback(() => {
    if (bpm < 40) {
      setTempoTextString("Super Lento");
    } else if (bpm >= 40 && bpm < 80) {
      setTempoTextString("Lento");
    } else if (bpm >= 80 && bpm < 120) {
      setTempoTextString("Chegando lá");
    } else if (bpm >= 120 && bpm < 180) {
      setTempoTextString("Agradável e Estável");
    } else if (bpm >= 180 && bpm < 220) {
      setTempoTextString("Rock 'n' Roll");
    } else if (bpm >= 220 && bpm < 240) {
      setTempoTextString("Funk Stuff");
    } else if (bpm >= 240 && bpm < 260) {
      setTempoTextString("Relaxe, cara");
    } else if (bpm >= 260 && bpm < 280) {
      setTempoTextString("Eddie Van Halen");
    }
  }, [bpm]);

  const validateTempo = (value: number) => {
    return Math.min(Math.max(value, 20), 280);
  };

  const decreaseTempo = () => {
    setBpm(validateTempo(bpm - 1));
    updateMetronome();
  };

  const increaseTempo = () => {
    setBpm(validateTempo(bpm + 1));
    updateMetronome();
  };

  const onTempoSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(validateTempo(parseInt(event.target.value)));
    updateMetronome();
  };

  const subtractBeats = () => {
    setBeatsPerMeasure(Math.max(beatsPerMeasure - 1, 2));
  };

  const addBeats = () => {
    setBeatsPerMeasure(Math.min(beatsPerMeasure + 1, 12));
  };
  useEffect(() => {
    if (metronomeRef.current) {
      metronomeRef.current.timeInterval = 60000 / bpm;
    }

    updateMetronome();
  }, [bpm, tempoTextString, updateMetronome]);

  return (
    <>  <title>Recursos- Escola de Música Music For All</title>
    
      <div className={styles.desccription}>
        <h1 className={styles.titleMetronome}>Metrônomo</h1>
        <p className={styles.pmetronomo}> 
          Um metrônomo musical é um dispositivo ou aplicativo utilizado por
          músicos para auxiliar na manutenção do tempo e na marcação rítmica
          durante a execução de peças musicais. Sua função principal é
          proporcionar uma referência consistente e precisa de andamento,
          permitindo que os músicos mantenham uma cadência regular e evitem
          variações no ritmo ao longo de uma música
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.metronome}>
          <div className={styles.bpmDisplay}>
            <span className={styles.tempo}>{bpm}</span>
            <span className={`${styles.bpm} ${styles.ralewayfont}`}>BPM</span>
          </div>
          <div className={`${styles.tempoText} ${styles.ralewayfont}`}>
            {tempoTextString}
          </div>
          <div className={styles.tempoSettings}>
            <button
              className={` ${styles.adjustTempobtn} ${styles.decreaseTempo}`}
              onClick={decreaseTempo}
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
              onChange={onTempoSliderChange}
            ></input>
            <button
              className={`${styles.adjustTempobtn} ${styles.increaseTempo}`}
              onClick={increaseTempo}
            >
              +
            </button>
          </div>
          <div
            className={`${styles.startStop} ${styles.ralewayfont}`}
            onClick={startStopMetronome}
          >
            {isRunning ? "STOP" : "START"}
          </div>
          <div className={styles.measures}>
            <button
              className={`${styles.subtractBeats} ${styles.stepper}`}
              onClick={subtractBeats}
            >
              -
            </button>
            <div className={styles.measureCount}>{beatsPerMeasure}</div>
            <button
              className={`${styles.addBeats} ${styles.stepper}`}
              onClick={addBeats}
            >
              +
            </button>
          </div>
          <span className={styles.beatsPerMeasureText}>
            Batidas por compasso
          </span>
        </div>
      </div>
    </>
  );
}
