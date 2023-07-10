import {React} from "react";
import styled from "styled-components";

const AllActivateComplete = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-left: 100px;
    color: #6C6E83;
    font-size: 14px;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    user-select: none;
    cursor: pointer;
`

export default function AllComplete ({AllActivate}) {
    
    return <AllActivateComplete onClick={() => {AllActivate('doneDeal')}} >
    <span style={{color: '#4777DB'}}>All</span>
    Activate
    Complete
    </AllActivateComplete>
}