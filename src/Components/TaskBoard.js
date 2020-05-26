import React from 'react';
import shortid from 'shortid';
import './TaskBoard.css';
import Task from './Task';

class TaskBoard extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: '',
        }
    }

    onInputChange = (event) => {
        this.setState({taskInput: event.target.value});
    }
    
    createTask = (event) => {
        event.preventDefault();
        this.props.addTask({
            id: shortid.generate(),
            text: this.state.taskInput
        })
    }


    render() {
        return(
            <div className="pa3 ph5 mv5 w-25">
                <div className="tc bg-light-silver dib br3 bw2 pb5">
                    <h3 className="bg-green tc ma0 pa2">To-Dos</h3>
                    <button 
                        className="f6 link dim ba hot-pink" href="#0"
                        onClick={this.createTask}
                        >Add</button>
                    <input 
                    type="text" className="br3" 
                    name="text"
                    placeholder="Add a To-Do"
                    onChange={this.onInputChange}
                    ></input>
                    {/* <Task onTaskCompleted={this.props.onTaskCompleted} onTaskDeselected={this.props.onTaskDeselected} text={this.state.taskInput}/> */}
                    <div>
                    {this.props.taskArr.map(task => (
                        <Task 
                        key={task.id} text={task.text} 
                        onTaskCompleted={this.props.onTaskCompleted} 
                        onTaskDeselected={this.props.onTaskDeselected}
                        onTaskDeleted={this.props.onTaskDeleted}
                        />
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskBoard;