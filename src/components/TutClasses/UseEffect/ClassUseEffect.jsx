import React, { Component } from 'react'

export class ClassUseEffect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times` 
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating Document Title')
        if (prevState.count != this.state.count) {
            
        }
        document.title = `Clicked ${this.state.count} times` 
    }


  render() { 
    return (
        <div>
            <input type="text"
                value={this.state.name}
                onChange={e => {
                    this.setState({name:e.target.value})
                }}
            />
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Click {this.state.count}
            </button>
      </div>
    )
  }
}

export default ClassUseEffect
