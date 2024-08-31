import React from 'react'
import './TodoList.css'

function TodoList({item,index,makeItDone,deleteItem,undoItem}) {
  return (
    <>
          
      <p className={`${item.done? 'done-lable': ''}  label`}> {index+1}. {item.label}</p>
      <div className='todo-list'>
    <button  onClick={()=>deleteItem(index)}>Delete</button>
      {!item.done && <button onClick={()=>makeItDone(index)}>Done</button>}
      {item.done && <button onClick={()=>undoItem(index)}>undo</button>}
      
    </div>
    </>
  )
}

export default TodoList
