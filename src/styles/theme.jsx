import { ThemeProvider } from "styled-components";
import dark from './themes/dark.jsx';
import light from './themes/light.jsx'
import GlobalStyles from './globals.jsx';

function Theme({children}) {
    const theme = localStorage.getItem('theme');

    return (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}

export default Theme;