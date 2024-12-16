import React, { useState } from 'react';
import { Form as FormClass } from './class_component/Form';
import { Count as CountClass } from './class_component/Count';
import { Form } from './components/Form/Form';
import { Count } from './components/Count';
import { Child } from './components/Child';

import './index.css'


// import { Form } from './components/Form';

export const App = () => {
  const [name, setName] = useState("Jin")
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState(['ivanov', 'petrov', 'sidorov'])

  const handelChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">

      <h2 style={{backgroundColor: 'green'}}>Class Component</h2>

      <CountClass count={10}/>        
        <hr/>      
      <FormClass/> 
            
      <hr/>
      <Form/>

      <h2>Func component</h2>
      <Count />
      <hr/>
      <h3>Parent component</h3>
      <p>Count {count}</p>
      <input onChange={handelChangeName}/>
      <h3>Child component</h3>
      <Child name={name} handelChangeCount={setCount}/>
      {arr.map((item, idx) => <p key={idx}>{item}</p>)}
    </div>
  );
}
