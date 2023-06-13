import React from 'react';
import styles from './Message.module.css';

type Props = {
  message: {
    role: string
    content: string
  }
}

const Message = ({ message }: Props) => {
  return (
    <div className={styles.message}>
      <p className={styles.icon}>X</p>
      <p>{message.content}</p>
    </div>
  )
}

export default Message