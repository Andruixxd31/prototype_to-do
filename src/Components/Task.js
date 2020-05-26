import React from 'react';
import './TaskBoard.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    } 

    //Will update the score depending if the checkbox is checked or unchecked
    onChecked = (event) => {
        this.setState({checked: !this.state.checked}); //Will change the state to the opposite of the current one
        if(this.state.checked === true) {
            console.log('Pressed');
            this.props.onTaskCompleted(); //will add 10 points to the score of the user
            
        }else{
            console.log('Unpressed');
            this.props.onTaskDeselected(); //will substract 10 points to the score of the user
        }
    }

    //delete the task
    onDelete = (event) => { 
        this.props.onTaskDeleted(this.props.key);
    }

    render() {
        return(
            <div className="">
                <div className="bg-pink pa2 dib flex">
                    <input 
                        className="flex start bg-pink" type="checkbox" id="task" name="task1" value="t"
                        onClick={this.onChecked} //will called the function when the checkbox is clicked
                    ></input>
                    {/* The design of the text will be changed if the checkbox is checked*/}
                    <div style = {{textDecoration: this.state.checked ? "" : "line-through"}}> 
                        <text 
                        //Getting the text typed on the Taskboard input when the add button was clicked
                        className="white b ph2">{this.props.text} 
                        </text>
                    </div>
                    <button 
                        className="bg-light-blue" type="checkbox" id="task" name="task1" value="t"
                        onClick={this.onDelete} //will called the delete function
                    >Del</button>
                </div>
            </div>
        );
    }
}

export default Task;
