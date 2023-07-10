import {React} from "react";
import styled from "styled-components";

const RemoveNote = styled.button`

position: absolute;     
right: 12px;
border: 0;
border-radius: 0;
background: inherit;

cursor: pointer;
position: absolute;

width: 20px;
height: 20px;

&:before, &:after {
    top: 0px;
    position: absolute;
    content: ' ';
    background-color: #494C6B;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    height: 14px ;
    width: 1px ;
}

&:before {
    transform: rotate(45deg)
}
&:after {
    transform: rotate(-45deg)
}
`

export default function Remove ({note, remove}) {
    return <RemoveNote onClick={()=>{remove(note.id, note.doneDeal)}}></RemoveNote>
}