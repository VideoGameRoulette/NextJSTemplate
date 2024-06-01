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

const headingStyles = {
    fontFamily: 'Source Sans 3',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '120px',
    lineHeight: '151px',
    textAlign: 'center',
    color: 'white',
    marginTop: '200px',
}

const menuStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    gap: 64,
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    fontSize: '16px',
}

const buttonStyles = {
    filter: 'drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.5))',
    background: '#C271FF',
    borderRadius: '22px',
    padding: '8px 16px',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Source Sans 3',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '18px',
}

const heading2Styles = {
    color: 'white',
    fontFamily: 'Source Sans 3',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
}

const peopleStyles = {
    width: 'calc(100% - 540px)',
    height: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 'auto',
}

const avatarStyles = {
    width: '150px',
    height: '150px',
    borderRadius: '100%',
}

const Person = ({ img, name, title, desc }) => {
    return (
        <div style={{ color: 'white', maxWidth: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <img style={avatarStyles} src={img} alt={name} />
            <h5 style={{ fontWeight: 700 }}>{name}</h5>
            <p>{title}</p>
        </div>
    );
};

const Main = () => {
    return (
        <section style={mainStyles}>
            <Header />
            <h1 style={headingStyles}>Get schooled</h1>
            <div style={{ ...menuStyles, textTransform: 'uppercase' }}>
                <div>Smiles</div>
                <div>Grin</div>
                <div>Laugh</div>
            </div>
            <div style={{ ...menuStyles, marginTop: '32px' }}>
                <a style={buttonStyles} href="#Register">Register For Free</a>
            </div>
            <div style={{ ...menuStyles, marginTop: '128px' }}>
                <div style={heading2Styles}><span style={{ color: '#C271FF' }}>Learn </span>from the pros</div>
            </div>
            <div style={{ ...peopleStyles, marginTop: '64px' }}>
                <Person
                    img="/assets/images/profile_1.jpg"
                    name="Phillip Massey"
                    title="« Smile of the year » 2018 - 2019"
                />
                <Person
                    img="/assets/images/profile_2.jpg"
                    name="Nannie Lawrence"
                    title="Best « little smile » 2017"
                />
                <Person
                    img="/assets/images/profile_3.jpg"
                    name="Bruce Walters"
                    title="Best « Friend Smile » live performance 2019"
                />
                <Person
                    img="/assets/images/profile_4.jpg"
                    name="Henry Hughes"
                    title="« 24h smiles » winner 2016 - 2019"
                />
            </div>
        </section>
    )
}

export default Main;