import {React, useState } from "react";
import styled from "styled-components";
import AddTask from "./buttons/AddTask";

const Textplace = styled.input`
width: 450px;
height: 18px;
border: 0;
padding: 1px;
font-family: 'Josefin Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 18px;
background: inherit;
color: white;
outline: none;
flex: none;
order: 1;
flex-grow: 0;`



export default function Textarea ({add, change, obj, LostFocus}){
    
    function addEnter (event) {
        if(event.key === 'Enter'){
            add()
        }
    }

    return(<><Textplace placeholder="Add a new task..."
    type="text"
    onChange={event => change('list', event)}
    value={obj['list']}
    onKeyUp = {addEnter}
    onBlur={ (e) => LostFocus(e)}
    />
    <AddTask add={add} />
    </>
    )
}