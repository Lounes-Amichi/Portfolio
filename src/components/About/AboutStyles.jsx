import styled from "styled-components";

const accent = props => props.theme.colors.accent;
const text = props => props.theme.colors.text;

export const Span = styled.span`
    color: ${props => props.$accent ? accent : text};
`