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
    const name = response.data.name;
    console.log(name);
  }
  render(){
    return <h1> testing </h1>
  }

}

export default Test;