import styled from 'styled-components';

const h1 = props => props.theme.fontSize.h1;
const h2 = props => props.theme.fontSize.h2;
const h5 = props => props.theme.fontSize.h5;
const text = props => props.theme.colors.text;


export const Section = styled.section`
    display: flex;
    flex-direction: ${props => props.$row ? "row" : "column"};
    max-width: 1240px;
    box-sizing: content-box;
    overflow: hidden;
    padding: ${(props) => props.$nopadding ? "0" : "72px 48px 0"};
`

export const SectionTitle = styled.h2`
    font-size: ${props => props.$main ? h1 : h2};
    line-height: ${props => props.$main ? '72px' : '48px'};
    color: ${text};
    padding-bottom: ${props => props.$nopadding ? '0px' : '16px'};
`

export const SectionText = styled.p`
    max-width: 800px;
    line-height: 40px;
    padding-bottom: ${h2};
    font-size: ${h5};
`