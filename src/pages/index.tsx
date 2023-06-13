import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Code from '@/components/code/Code'
import MessageList from '@/components/MessageList/MessageList'
import { useState } from 'react'

type ChatData = {
  role: string,
  content: string,
}

export default function Home() {
  const [chat, setChat] = useState<ChatData[]>([]);
  const [input, setinput] = useState<string>('');

  const getQuery = async () => {
    try {
      const response = await fetch('/api/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'appliction/json'
        },
        body: JSON.stringify({
          message: input
        })
      });
      const data = await response.json();
      const userMessage = {
        role: 'user',
        content: input
      };
      setChat(oldChat => [...oldChat, data.message, userMessage])
    } catch (error) {
      console.error(error);
    }
  }

  const clearChat = () => {
    setChat([]);
    setinput('');
  };
  
  const userMessages = chat.filter(message => message.role === 'user');
  const sqlCode = chat.filter(message => message.role === 'assistant').pop();

  return (
    <>
      <Head>
        <title>SQL GPT</title>
        <meta name="description" content="App to generate SQL from text" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <h1 className={styles.headline}>SQL GPT - convert plain text to SQL Queries</h1>
        <MessageList userMessages={userMessages}/>
        <input value={input} onChange={(e) => setinput(e.target.value)}/>
        <Code content={sqlCode?.content || ''}/>
        <div className={styles.buttonContinares}>
          <button 
            className={styles.queryButton}
            onClick={getQuery}
          >
            Get Query
            </button>
          <button 
            className={styles.clearButton}
            onClick={clearChat}
          >
            Clear Chat
          </button>
        </div>
      </div>
    </>
  )
}
