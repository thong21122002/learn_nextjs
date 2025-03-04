'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Facebook = () => {
    const router = useRouter()
    const handle = () => {
        router.push("/")
    }
    return (
        <div>
            facebook
            <button onClick={() => { handle() }}>
                back home
            </button>
        </div>
    )
}

export default Facebook