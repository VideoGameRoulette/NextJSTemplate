import { Padding } from "@mui/icons-material";

const headerStyles = {
    position: 'relative',
    width: '100%',
    height: '30px',
    top: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    padding: '0 170px',
}

const menuStyles = {
    display: 'flex',
    color: 'white',
    gap: 64,
    fontFamily: 'Source Sans 3',
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase',
}

const Header = () => {
    return (
        <header style={headerStyles}>
            <img src="/assets/images/logo.png" alt="Logo" />
            <div style={menuStyles}>
                <a href="#Courses">Courses</a>
                <a href="#Pricing">Pricing</a>
                <a href="#Login">Login</a>
            </div>
        </header>
    )
}

export default Header;