import {Container, LogoContainer} from './HeaderStyles.jsx';

function Header(){

    return (
        <Container>
            <LogoContainer>
                <p>header</p>
            </LogoContainer>
            <a href="#">Home</a>
        </Container>
    );
}

export default Header