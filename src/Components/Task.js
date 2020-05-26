import React from 'react';
import './TaskBoard.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    } 

    onChecked = (event) => {
        this.setState({checked: !this.state.checked});
        if(this.state.checked === true) {
            console.log('Pressed');
            this.props.onTaskCompleted();
            
        }else{
            console.log('Unpressed');
            this.props.onTaskDeselected();
        }
    }

    onDelete = (event) => {
        this.props.onTaskDeleted(this.props.key);
    }

    render() {
        return(
            <div className="">
                <div className="bg-pink pa2 dib flex">
                    <input 
                        className="flex start bg-pink" type="checkbox" id="task" name="task1" value="t"
                        onClick={this.onChecked}
                    ></input>
                    <div style = {{textDecoration: this.state.checked ? "" : "line-through"}}>
                        <text 
                        className="white b ph2">{this.props.text}
                        </text>
                    </div>
                    <button 
                        className="bg-light-blue" type="checkbox" id="task" name="task1" value="t"
                        onClick={this.onDelete}
                    >Del</button>
                </div>
            </div>
        );
    }
}

export default Task;
