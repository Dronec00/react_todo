import React from "react";
import styled from "styled-components";
import Clear from "./buttons/ClearCompleted";
import AllComplete from "./buttons/AllActivateComplete";

const Info = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
gap: 16px;
margin-top: -24px;

width: 542px;
height: 140px;

background: #25273C;
border-radius:  0  0  6px 6px;

flex: none;
order: 6;
align-self: stretch;
flex-grow: 0;`

const ItemsLeft = styled.div`
color: #6C6E83;
font-size: 14px;
font-family: Josefin Sans;
font-weight: 600;
user-select: none;
`


export default function BlockUnderTasks({countNotes, ClearCompletedTasks, AllActivate}){

    return(<Info>
        <ItemsLeft> {countNotes} items left </ItemsLeft>
        <AllComplete AllActivate={AllActivate} />
        <Clear ClearCompletedTasks={ClearCompletedTasks}></Clear>
        </Info>)
}