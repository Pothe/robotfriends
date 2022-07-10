import React, {Component} from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import Errorboundry from '../components/Errorboundry';

// import {robots} from '../robots';
class App extends Component {
 constructor(){
  super()
  this.state={
    robots:[],
    searchfield:'',
  }

  }
  componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{this.setState({robots:users})} )
   
 }
 onSearchhange=(event)=>{
  this.setState({searchfield:event.target.value})
 }

  render(){
      const {robots,searchfield}= this.state;
      const filteredRobot = robots.filter(robots=>{
      return robots.username.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
     })
     if(!robots.length){
      <h2>Loading......</h2>
     }else{
  return (
   <div className='App tc'>
   
      <h2>Robotfriend</h2>
    <Searchbox searchchange ={this.onSearchhange}/>   
    <Scroll>   
      <Errorboundry>
          <Cardlist robots={filteredRobot}/> 
        
        </Errorboundry>  
        
    </Scroll> 
       
   </div>   
     );
    }
  }
}
export default App;
