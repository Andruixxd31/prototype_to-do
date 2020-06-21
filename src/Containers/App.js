import React, { Component } from 'react';
import Menu from '../Components/Menu';
import FriendsBoard from '../Components/FriendsBoard';
import TaskBoard from '../Components/TaskBoard';
import Login from '../Components/Login';
import Register from '../Components/Register';
import './App.css';


const initialState = {
  route: 'home',
  score: 0,
  taskArr: []
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState); //Will restart to default values
    } else if (route === 'home') {
      console.log("Home"); //to get feedback on the change
    } else if (route === 'loginInfo') {
      console.log("Login");//feedback
    }
    else if (route === 'registerInfo') {
      console.log("Register"); //feedback
    }
    this.setState({ route: route }) //Changing the route to the one received
  }

  //Method that will make a new array and adding the new task to the start of it 
  //instead of mutating the already existing array
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

  onDelete = (id) => {
    this.state.taskArr.forEach(element => {
    });
    this.setState({
      taskArr: this.state.taskArr.filter(task => task.id !== id)
    });
  }

  render() {
    const { taskArr, route } = this.state;
    return (
      //The conditional will choose what to render depending of the value of the route
      route === 'home' ?
        <div>
          <Menu />
          <FriendsBoard score={this.state.score} />
          <div className="">
            <TaskBoard
              onTaskCompleted={this.onTaskCompleted}
              onTaskDeselected={this.onTaskDeselected}
              onDelete={this.onDelete}
              addTask={this.addTask}
              taskArr={taskArr}
            />
          </div>
        </div>
        : route === 'loginInfo' ?
          <Login onRouteChange={this.onRouteChange} />
          :
          <Register onRouteChange={this.onRouteChange} />
    );
  }

}

export default App;
