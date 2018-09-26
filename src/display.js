
import React, {Component} from 'react';

class Display extends Component{
    state = {
        text : "",
    }

    handleUpdate = (text,id)=>{
        this.props.update(text,id)
        this.setState({
            text : "",
        })
    }

    render(){
        return(
            <div>
                For edit text:
                <input 
                    type='text' 
                    placeholder="Enter edited text" 
                    value={this.state.text}
                    onChange={(event) => this.setState({ text : event.target.value})}/>
                {this.props.data.map( (note,id) => (
                    <li key={`note_${id}`}>
                    <div>{note}</div>
                    <button onClick={()=>this.props.delete(id)}>DELETE</button>
                    <button 
                    type = 'submit'
                    onClick={()=>this.handleUpdate(this.state.text,id)}>EDIT</button>
                    </li>
                ))}
            </div>
        )
    }
}

export default Display;