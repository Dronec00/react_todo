import {React} from "react";
import styled from "styled-components";

const Deal = styled.span`
width: 480px;
height: 18px;
font-family: 'Josefin Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 18px;

${props => props.noteDone? `
text-decoration-line: line-through;

color: #6C6E83;
`: `
text-decoration-line: none;
color: #FFFFFF;
`}
`

export default function Text ({note}) {
        return <Deal noteDone = {note.doneDeal} >
        {note.list}
        </Deal>
}