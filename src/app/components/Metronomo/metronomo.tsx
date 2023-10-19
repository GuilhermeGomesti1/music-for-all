"use client";
import React, { useEffect, useState } from "react"; // Importe o useEffect
import styles from "./styles.module.css";
export default function Metronome() {
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [tempoTextString, setTempoTextString] = useState("Médio");

  
  useEffect(() => {
    const tempoDisplay = document.querySelector(".tempo") as HTMLElement | null;
    const tempoText = document.querySelector(".tempoText") as HTMLElement | null;
    const increaseTempobtn = document.querySelector(
      ".increaseTempo"
    ) as HTMLElement | null;
    const tempoSlider = document.querySelector(
      ".slider"
    ) as HTMLInputElement | null;
    const subtractBeatsButton = document.querySelector(".subtractBeats") as HTMLElement | null;
    const addBeatsButton = document.querySelector(".addBeats") as HTMLElement | null;
    const measureCount = document.querySelector(
      ".measureCount"
    ) as HTMLElement | null;
    

    if (tempoDisplay && tempoSlider && tempoText){
      // Função para atualizar a exibição do metrônomo
      const updateMetronome = () => {
        tempoDisplay.textContent = bpm.toString();
        tempoSlider.value = bpm.toString();
      
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
      
        console.log("updateMetronome chamado, tempoTextString:", tempoTextString);
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
        // Garanta que o valor de beatsPerMeasure nunca seja inferior a 4
        const newBeats = Math.max(beatsPerMeasure - 1, 4);
        setBeatsPerMeasure(newBeats); // Atualize o estado
        if (measureCount) {
          measureCount.textContent = newBeats.toString(); // Atualize o elemento na tela
        }
        console.log("beatsPerMeasure:", newBeats);
      });
    }
    
    if (addBeatsButton) {
      addBeatsButton.addEventListener("click", () => {
        // Garanta que o valor de beatsPerMeasure nunca seja superior a 12
        const newBeats = Math.min(beatsPerMeasure + 1, 12);
        setBeatsPerMeasure(newBeats); // Atualize o estado
        if (measureCount) {
          measureCount.textContent = newBeats.toString(); // Atualize o elemento na tela
        }
        console.log("beatsPerMeasure:", newBeats);
      });
    }

    // Retorne funções de limpeza para os ouvintes de evento
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

  return (
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
         
          Start
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
