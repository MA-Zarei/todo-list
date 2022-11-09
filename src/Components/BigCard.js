import { useState } from 'react';
import './Card.css';
import addicon from '../icons8-plus-math-120(-xxxhdpi).png'



function BigCard(props){
    let[newtask,setNewtask]=useState([])
    function onInputChange(event){
      setNewtask(event.target.value);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const task=[newtask,Math.floor(Math.random()*100),];
        props.AddTask(task)
        setNewtask('')
    }

    return(
        <form onSubmit={handlesubmit}>
            <div className='webflow-style-input'>
                <input
                type="text"
                placeholder="Type Tasks here ..."
                className="taskinput"
                value={newtask}
                required
                onChange={onInputChange}
                />
                <button type='submit'>
                    <img src={addicon} />
                </button>
            </div>
        </form>
)}

export default BigCard