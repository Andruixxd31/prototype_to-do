import React, { Component } from 'react';
import Menu from '../Components/Menu';
import FriendsBoard from '../Components/FriendsBoard';
import TaskBoard from '../Components/TaskBoard';
import Login from '../Components/Login';
import Register from '../Components/Register';
import './App.css';


const initialState = {
  route: 'loginInfo',
  score: 50,
  taskArr: []
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState(initialState);
    }else if(route === 'home') {
      console.log("Home");
    }else if (route === 'loginInfo'){
      console.log("Login");
    }
    else if (route === 'registerInfo'){
      console.log("Register");
    }
    this.setState({route: route})
  }

  addTask = (task) => {
    this.setState({
        taskArr: [task, ...this.state.taskArr] //adding the new task and getting the rest of the previous array
    })
  }

  //Add 10 points to the score of the user
  onTaskCompleted = () => {
    this.setState({ score: this.state.score + 10 });
  }

  //Substracts 10 points to the user's score
  onTaskDeselected = () => {
    this.setState({ score: this.state.score - 10 });
  }

  onTaskDeleted = (key) => {
    this.setState({ 
      taskArr: this.state.taskArr.filter(task => task.key !== key)
    });
    // console.log("task.key:", this.state.task.key);
    console.log("key:", key);
  }

  render(){
    const {taskArr, route} = this.state;
    return (

      route === 'home' ? 
      <div>
        <Menu/>
        <FriendsBoard score={this.state.score}/>
        <div className="">
          <TaskBoard 
          onTaskCompleted={this.onTaskCompleted}
          onTaskDeselected={this.onTaskDeselected}
          onTaskDeleted={this.onTaskDeleted}
          addTask={this.addTask}
          taskArr={taskArr}
          />
        </div> 
      </div>
      // route == signInfo ? login : register
      : route === 'loginInfo' ?
        <Login onRouteChange={this.onRouteChange}/>
      : 
        <Register onRouteChange={this.onRouteChange}/>
    );
  } 

}

export default App;
