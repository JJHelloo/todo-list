import { useState } from 'react'


function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === '') return

        props.onSubmit(newItem)
        setNewItem('')
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        {/* <label htmlFor='item'> New Item</label> */}
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type='text' id='item'>        
        </input>
        <button className='btn'>Add</button>
    </form>
)}

export default NewTodoForm