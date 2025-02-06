import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John',
            age: 25
        }
        this.changeName = () => {
            this.setState({ name: 'sadvi' })
        }
        this.changeAge = () => {
            this.setState({ age: 30 })
        }
    }
    render() {
        console.log(this);
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>update</button>
                <h2>{this.state.age}</h2>
                <button onClick={this.changeAge}>increment age</button>
            </div>
        )
    }
}