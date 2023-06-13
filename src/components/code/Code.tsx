import React from 'react';
import styles from './code.module.css';import classNames, {} from 'classnames';


type Props = {
    content: string
}

const Code = ({ content }: Props) => {
  return (
    <div className={styles.code}>
      <div className={styles.buttons}>
        <div className={classNames(styles.button, styles.first)}></div>
        <div className={classNames(styles.button, styles.second)}></div>
        <div className={classNames(styles.button, styles.third)}></div>
      </div>
      <div className={styles.codeOutput}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Code