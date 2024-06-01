import Header from '@/components/Header';

const mainStyles = {
    width: '100%',
    height: '1093px',
    background: 'url("/assets/images/pic_1.jpg") no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    padding: '0 170px',
    margin: 'auto',
}

const Main = () => {
    return (
        <section style={mainStyles}>
            <Header />
        </section>
    )
}

export default Main;