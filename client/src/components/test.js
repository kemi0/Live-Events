import React, { Component } from 'react'; 
import axios from 'axios';

class Test extends Component{
  componentDidMount(){
    this.getUserData();
  }

  //requesting data from server: 
  async getUserData(){
    const response = await axios.get('/api/user-data');
    console.log('user data response:', response);
  }
  render(){
    return <h1> Testing </h1>
  }

}

export default Test;