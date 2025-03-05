'use client'
import '@/style/app.css'
import Link from 'next/link'
import Apptable from '@/components/app.table';
import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json()
      console.log("<< check res", data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        <li style={{ height: 30 }}>
          <Link className='red' href={"/facebook"}>
            facebook
          </Link>
        </li>

        <li style={{ height: 30 }}>
          <Link className='red' href={"/youtube"}>
            youtube
          </Link>
        </li>
        <li style={{ height: 30 }}>
          <Link className='red' href={"/brave"}>
            brave
          </Link>
        </li>
      </ul>
      <Apptable />
    </div>
  )
}


