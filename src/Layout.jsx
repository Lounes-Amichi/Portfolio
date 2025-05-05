import Theme from './styles/themes/theme.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';

function Layout(){
    return (
        <Theme>
            <Header />
            <About />
        </Theme>
    );
}

export default Layout