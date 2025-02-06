import React, { Component } from 'react'
import "../index.css"
export default class CounterEx extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    reset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <div className='m-container'>
                <h1 className='myheader'>{this.state.count}</h1>
                <div className='btn'>
                    <button onClick={this.increment} className='counter-box'>Increment</button>
                    <button onClick={this.decrement} className='counter-box'>Decrement</button>
                    <button onClick={this.reset} className='counter-box'>Reset</button>
                </div>
            </div>
        )
    }
}
