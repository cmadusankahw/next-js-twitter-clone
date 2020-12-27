import styles from '../styles/Home.module.css'
import path from 'path'
import fs from 'fs'
import Tweet from './Tweet'

export default function Home({tweets}) {
  return (
    <div className={styles.container}>
      <h1> Twitter Clone </h1>
      <hr />
      {tweets.map(tweet =>  <Tweet key={tweet.id} tweet={tweet}/> )}
    </div>
  )
}

export async function getAerverSideProps() {
  const filepath = path.join(process.cwd(), 'data.json')
  const tweets = JSON.parse(fs.readFileSync(filepath, 'utf8'))
  return {
    props: {
       tweets
    }
  }
}