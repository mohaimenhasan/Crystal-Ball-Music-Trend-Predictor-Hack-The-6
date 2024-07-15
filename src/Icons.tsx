import React from 'react';
import styles from './Icons.module.css';
import metronome from './assets/001-metronome.svg';
import karaoke from './assets/002-karaoke.svg';
import dance from './assets/electronic-dance.svg';
import guitar from './assets/guitar.svg';

export const AcousticIcon: React.FC = () => (
  <div className={styles.acoustic} style={{ backgroundImage: `url(${guitar})` }} />
);

export const DanceIcon: React.FC = () => (
  <div className={styles.dance} style={{ backgroundImage: `url(${dance})` }} />
);

export const SpeechIcon: React.FC = () => (
  <div className={styles.speech} style={{ backgroundImage: `url(${karaoke})` }} />
);

export const TempoIcon: React.FC = () => (
  <div className={styles.tempo} style={{ backgroundImage: `url(${metronome})` }} />
);
