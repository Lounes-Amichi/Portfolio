import { Container, LogoContainer, LogoLink } from './HeaderStyles.jsx';
import { DiCssdeck } from "react-icons/di";



function Header(){

    return (
        <Container>
            <LogoContainer>
                <LogoLink>
                    <DiCssdeck size='2.369rem' />
                    <span>Portfolio</span>
                </LogoLink>
            </LogoContainer>
        </Container>
    );
}

export default Header