'use client'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation'

const Facebook = () => {
    const router = useRouter()
    const handle = () => {
        router.push("/")
    }
    return (
        <div>
            facebook
            <Button variant='success'>Tôi tên là Thông</Button>
            <button onClick={() => { handle() }}>
                back home
            </button>
        </div>
    )
}

export default Facebook