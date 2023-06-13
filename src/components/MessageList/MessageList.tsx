import React from 'react';
import Message from '../Message/Message';
import styles from './MessageList.module.css';

type message = {
  role: string
  content: string
}

type Props = {
  userMessages: message[]
}

const MessageList = ({ userMessages }: Props) => {
  return (
    <div className={styles.messageList}>
      {userMessages.map((userMessage, index) =>  <Message key={index} message={userMessage}/>)}
    </div>
  )
}

export default MessageList