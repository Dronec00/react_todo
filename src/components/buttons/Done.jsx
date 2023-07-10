import {React} from "react";
import styled from "styled-components";
import tick from "../../assets/img/Vector.svg"

const DoneButton = styled.div`

    display: flex;
    width: 20px;
    height: 20px;
    padding: 5px 4px;
    border: 1px solid #383A4F;
    border-radius: 50%;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background: ${props => !props.noteDone? `linear-gradient(142deg, #6EBAF8 0%, #AD7AF9 100%)`: ''};
    }

    background: ${props => props.noteDone? `
    url(${tick}) no-repeat, linear-gradient(142deg, #6EBAF8 0%, #AD7AF9 100%);
    background-position: center center;
    `: ''};
    
`

export default function Done ({StrokeLine, note}) {
    
    return <DoneButton
    onClick={() => {StrokeLine(note.id, 'doneDeal', note.doneDeal)}}
    noteDone = {note.doneDeal}
    >
            {console.log(note.doneDeal)}
        </DoneButton>
}