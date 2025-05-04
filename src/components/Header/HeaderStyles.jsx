import styled from 'styled-components';

const text = props => props.theme.colors.text
const background = props => props.theme.colors.background
const primary = props => props.theme.colors.primary
const secondary = props => props.theme.colors.secondary
const accent = props => props.theme.colors.accent
const static1 = props => props.theme.colors.static1

export const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;
    border-bottom: 1px solid ${static1} ;
`;

export const LogoContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
`;