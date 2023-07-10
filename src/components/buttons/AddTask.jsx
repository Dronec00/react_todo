import {React} from "react";
import styled from "styled-components";
import check from '../../assets/img/check-mark.svg'

const Button =  styled.button`

background: url(${check}), linear-gradient(142deg, #6EBAF8 0%, #AD7AF9 100%);
background-position: center center;
background-repeat: no-repeat;
width: 24px;
height: 24px;

border: 1px solid #303247;
border-radius: 50%;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
cursor: pointer;


`

export default function AddTask ({add}) {
    return <Button onClick={()=> {add()}} ></Button>
}