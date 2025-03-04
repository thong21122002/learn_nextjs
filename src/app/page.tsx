import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <Link href={"/facebook"}>
        facebook
      </Link>
      <li style={{ height: 30 }}>
        <a href="/youtube">youtube</a>
      </li>
      <li style={{ height: 30 }}>
        <a href="/brave">brave</a>
      </li>
    </ul>
  )
}
