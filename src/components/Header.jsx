import {React} from "react";
import styled from "styled-components";

const TODO = styled.div`
display: flex;

justify-content: center;
padding: 0px;
gap: 10px;

position: relative;
left: -192px;
height: 36px;

top: 79px;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const TextTODO = styled.div`

width: 164px;
height: 36px;

font-family: 'Josefin Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 36px;

letter-spacing: 0.5em;

color: #FFFFFF;
opacity: 0.6;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

user-select: none;

`

export default function Header(){

    return(<TODO>
        <TextTODO>TODO</TextTODO>
        </TODO>)
}