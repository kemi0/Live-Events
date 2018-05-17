import React, { Component } from 'react'; 
import axios from 'axios';
import helperList from '../../helper/helperList';
class Test extends Component{
    componentDidMount(){
      this.getUserData();
    }
  
    //requesting data from server: 
    async getUserData(){
      const response = await axios.get('/api/user-data');
      console.log('user data response from database:', response.data);
      <helperList/>
      // const name = response.data.name;
      // console.log(name);
    }






// class Test extends Component{
//   componentDidMount(){
//     this.getUserData();
//   }

//   //requesting data from server: 
//   async getUserData(){
//     const response = await axios.get('/api/user-data');
//     console.log('user data response:', response.data);
//     const result = response.data
//     // const name = response.data.name;
//     // console.log(name);
//   }
  render(){
    return <h1> hihi </h1>
  }

}

export default Test;