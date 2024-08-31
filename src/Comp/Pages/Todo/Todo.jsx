import React, { useState } from 'react'
import TodoList from '../../TodoItem/TodoList'
import './Todo.css'
import Footer from '../../Common/Footer'

function Todo() {
  const [todoInp,setTodoInp]=useState('')
  const [todoListArray,setTodoListArray]=useState([])
  const handleInput=(event)=>{
    
    setTodoInp(event.target.value)

  }
  const handleAdd=()=>{
   
    setTodoListArray([...todoListArray,{label:todoInp,done:false}])
    
    setTodoInp('')
    

  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };
  const makeItDone=(index)=>{
 
  const temp= [...todoListArray] 
  temp[index].done=true
  setTodoListArray(temp)

  }
  const deleteItem=(index)=>{
  const temp= [...todoListArray] 
  temp.splice(index,1)
  setTodoListArray(temp)

  }
  const undoItem=(index)=>{
   const temp= [...todoListArray]
   temp[index].done=false
  setTodoListArray(temp)
  }

  
  return (
    <div className='h'>
<h2>Todo List</h2>
    <div className='main'>
   <input type="text" onChange={handleInput} onKeyDown={handleKeyDown} value={todoInp} id='add'/>
      <button className='todo-btn' onClick={handleAdd}>+</button>
</div>


    <div>
            <div className='content'> 
         
      {
        todoListArray.map((ele,index)=><TodoList  item={ele} index={index} key={index} makeItDone={makeItDone} deleteItem={deleteItem} undoItem={undoItem} />)
    }
          </div>
      </div>
      
    </div>

  )
  
}

export default Todo
