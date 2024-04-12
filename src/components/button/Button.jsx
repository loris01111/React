import React from 'react';
import styles from './button.module.css';

export default function Button({title, variant}) {
  return (
    <button className={variant ==='green' ? styles.buttonGreen : styles.buttonRed}>
        {title}
    </button>
  )
}
