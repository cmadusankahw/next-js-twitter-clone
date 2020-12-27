import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tweet from './Tweet'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Next App working!</h1>
      <Tweet/>
    </div>
  )
}
