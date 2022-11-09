import { useState, useEffect } from 'react';
import './Card.css';
import './BigCard'
import BigCard from './BigCard';
import delicon from '../icons8-remove-100.png'
import doneicon from '../icons8-double-tick-100.png'
import reseticon from '../icons8-reset-100.png'


function Card() {
const[task,setTask]=useState([])

useEffect(()=>{
  console.log("first effect")
  const temp2=localStorage.getItem('storagedtasks');
  const loadedtasks=JSON.parse(temp2);
  // console.log(loadedtasks)
  if(JSON.stringify(loadedtasks)!=='[]'){
    setTask(loadedtasks)
  }
},[]
)

useEffect(()=>{
  const temp=JSON.stringify(task);
  localStorage.setItem('storagedtasks',temp);
},[task]
)

const handleReset=()=>{
  localStorage.clear()
  setTask([])
}

const AddTask=(event)=>{
  setTask((prev)=>{return[...prev,event]})
}
let done=true;


  return (
    <div className="BigCard" >
      <BigCard AddTask={AddTask}/>
      <ul className='tasks'>
        {
          task.map((item,index)=>{
            let i=index;
            let clas='c'+i;
            return(
              <li id={'c'+i} key={index}>{index+1}- {item[0]}
              <div>
                <img src={doneicon} onClick={
                  ()=>{
                    if(done===false){
                      document.getElementById(clas).classList.add('done')
                      done=true;
                    }else{
                      document.getElementById(clas).classList.remove('done')
                      done=false;
                    }
                  }
                  } className='icon' />
                <img src={delicon} onClick={
                  ()=>{
                    setTask((task.filter((g)=>{return g[0]!==item[0]})));
                  }
                  } className='icon' />
              </div>
              </li>
            )
          }
          )
        }
      </ul>
      <img src={reseticon} onClick={handleReset} className='icon reseticon' />
    </div>
  );
}

export default Card;
