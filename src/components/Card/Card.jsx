import React from 'react'
import styles from "./Card.module.css";


const Card = (props) => {
  return (
    <div className={styles.cardwindow}>
    <div className={styles.card}>{props.children}</div>
  </div>
  )
}

export default Card