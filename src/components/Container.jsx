import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import uniqid from 'uniqid';
import Textplace from "./Textplace"
import Text from "./TextList"
import DoneButton from "./buttons/Done";
import RemoveNote from "./buttons/Remove";
import BlockUnderTasks from "./Info";

const Columns = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;

margin: auto;
position: relative;
width: 542px;
height: 632px;
top: 157px;
`

const WriteColumn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
gap: 26px;

width: 542px;
height: 64px;

background: #25273C;
border-radius: 6px;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

const Tasks = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 1px;

width: 542px;
height: 366px;

background: #383A4F;
border-radius: 6px 6px 0 0;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

overflow-y: auto;
overflow-x: hidden;

&::-webkit-scrollbar {
    width: 5px;
    
}

&::-webkit-scrollbar-track {
    background: #383A4F;
    max-height: 220px;
    border-radius: 0 10px 0 0;
}

&::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 3px solid #7061F3;
    opacity: 0.2;
    
}
`

const List = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px;
gap: 16px;
position: relative;
width: 542px;
height: 60px;
color: white;
font-family: inherit;
background: #25273C;
border-radius: 4px;

flex: none;

align-self: stretch;
&:hover {
    box-shadow: inset 1px 0px 1.5px 2px rgba(0, 0, 0, 0.25);
}
`

const DragAndDropToReorderList = styled.div`
position: absolute;
top: 618px;
color: #454659;
font-size: 14px;
font-family: Josefin Sans;
font-weight: 700;
user-select: none;
`

function id(){
    return uniqid()
}

export default function Container() {

    const [notes, setNotes] = useState([])
    const [obj, setObj] = useState({list: ''})
    const [isClick, setClick] = useState(false)
    let [countNotes, setCount] = useState( 0 )

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
      };
    
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    }

    const drop = () => {
        const copyListItems = [...notes];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setNotes(copyListItems);
    }

    const [isDone, setIsDone] = useState(true)

    function StrokeLine (id, doneDeal, isDone) {
        if(isDone){setCount(++countNotes)}
        else {setCount(--countNotes)}
        setIsDone(!isDone)
        return (setNotes(notes.map( note => {
            if (note.id === id) {
                return {...note, [doneDeal]: !note.doneDeal};
            } else {
                return note;
            }
            
        } )))
    }

    function change (list, event) {
        let note = {
            id: id(),
            [list]: event.target.value,
            doneDeal: false, 
        }
        return setObj({...note})
    }

    const remove = (id, doneDeal) => {
        if(doneDeal === false) {setCount(--countNotes)}
        setNotes(notes.filter(note => note.id !== id ))
    }
    
    const addTask = () => {
        if(obj.list.replace(/\s/g, '')){
        setClick(true)
        setCount(countNotes + 1)
        console.log(countNotes)
        setNotes([...notes, obj]) 
        setObj({...obj,  list: ''})
        }
    }

    const LostFocus = (e) => {
        if(!e.target.value.replace(/\s/g,'')){
            setObj({...obj,  list: ''}) 
        }
    }

    const ClearCompletedTasks = () => {
        setNotes(notes.filter(note => note.doneDeal === false ))
    }

    const AllActivate = (doneDeal) => {
        setCount(0)
        return (setNotes(notes.map( note => 
        !note.doneDeal? {...note, [doneDeal]: !note.doneDeal}: note)))
    }

    const render = () => { 
        
        if(isClick){
            
        return notes.map((note, idx) => {
            return(
                
             <List key={idx}
            onDragStart={e => dragStart(e, idx)}
            onDragEnter={e => dragEnter(e, idx)}
            onDragOver={e => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy'
            }}
            onDragEnd={drop}
            draggable>
                
                <DoneButton note={note} StrokeLine={StrokeLine} isDone={isDone} />
                <Text note={note} StrokeLine={StrokeLine} countNotes = {countNotes} ></Text>
                <RemoveNote remove={remove} note={note} />
                </List>
                )
        })}
        
    }

    return <>
    <Columns>
    <WriteColumn>
    <Textplace add = {addTask} change={change} obj={obj} LostFocus={LostFocus}/>
    </WriteColumn>
    <Tasks>{render()}</Tasks>
    <BlockUnderTasks countNotes={countNotes} ClearCompletedTasks={ClearCompletedTasks} AllActivate={AllActivate} />
    <DragAndDropToReorderList>Drag and drop to reorder list</DragAndDropToReorderList>
    </Columns>
    
    </>
}