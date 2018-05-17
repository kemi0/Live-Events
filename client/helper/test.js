//how to get require data from front_end to back_end; getting data from back_end database; 
import React, { Component } from 'react'; 
import axios from 'axios';
// import helperList from './helperList';
class Test extends Component{
    componentDidMount(){
      this.getUserData();
    }

  //requesting data from server by using '/api/user-data' : 
  async getUserData(){
    const response = await axios.get('/api/user-data');
    console.log('data from database', response.data);
    // <helperList/>
  }

  render(){
    return <div></div>
  }

}

export default Test;