import React from 'react'

export class Form extends React.Component {

    state = {        
        name: 'Jin',
        arr: ['ivanov', 'petrov', 'sidorov']
    } 

    handelChangeName = (ev) => {        
        this.setState({name: ev.target.value})
    }

    handelSubmite = (ev) => {
        ev.preventDefault()
        console.log(ev.target.elements.password)
    }
    
    render() {
        return <form onSubmit={this.handelSubmite}>      

        <p>Name: {this.state.name}</p>
        {this.state.arr.map((item, idx) => {
            return <div key={idx}>{item}</div>
        } )}
        <input type='text' onChange={this.handelChangeName} name='login'/><br />
        <input type='text' name='password'/>
        <button>send form</button>        

    </form>
    }
}