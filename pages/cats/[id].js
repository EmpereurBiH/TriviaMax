import { useEffect } from 'react'
import { useRouter } from 'next/router'

const CatPage = () => {
    const router = useRouter()
    
    return (
    <>
    <button type="button" onClick={() => router.push('/messages/sup')}>Go To Sup</button>
    <h1>I am a Cat Miow!</h1>
    </>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [
        { params: { id: '1'}},
        { params: { id: '2'}}
        ],
     fallback: false
    }
}


export const getStaticProps = (context) => {
    return { props: {} }
}

export default CatPage