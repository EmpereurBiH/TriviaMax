const CatchAllPage = () => {
    return <h1>I am a catch...not</h1>
}

export const getServerSideProps = (context) => {
    console.log(context)
    return { props: {} }
}

export default CatchAllPage