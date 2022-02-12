const Kenan = () => {
    return (
        <>
            <h1>Denis Gagnon, Maxim Gagnon et Kenan Gagnon</h1>
        </>
    )
}

export const getStaticProps = (context) => {
    return { 
        props: {},
        revalidate: 10 
    }
}

export default Kenan;