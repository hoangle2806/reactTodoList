
import React, {Component} from 'react';

class CollectInput extends Component{
    state = {
        input : "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state.input)
        this.setState({
            input : '',
        });
    }
    render(){
        return (
            <div>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input 
                value = {this.state.input}
                placeholder = "Enter new todo..."
                onChange={(event) => this.setState({input : event.target.value})} />
                <input type='submit' value="Add"/>
            </form>
            </div>
        )
        
    }
}

export default CollectInput;