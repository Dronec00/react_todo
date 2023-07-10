import {React} from "react";
import styled from "styled-components";

const ClearCompleted = styled.div`

position: relative;
display: flex;
justify-content: center;
align-items: center;

color: #6C6E83;
font-size: 14px;
font-family: Josefin Sans;
font-style: normal;
font-weight: 600;
line-height: normal;

width: 107px;
height: 18px;

cursor: pointer;
user-select: none;
`

export default function Clear ({ClearCompletedTasks}) {
    return <ClearCompleted onClick={() => {ClearCompletedTasks()}}>
        Clear completed
        
    </ClearCompleted>
}