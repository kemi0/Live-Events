import React, { Component } from 'react'; 
import axios from 'axios';
// // import helperList from './helperList';

class Test extends Component{
  componentDidMount(){
    this.getData();
  }
  
  async getData(){
      const response = await axios.get('/api/data')
          // .then(function(data) {
          //   console.log("THis is from db");
          // })
          // .catch(function(err) {
          //   console.log(err);
          // }); 
      
      console.log("this is a the data " , response.data);
  }

  render(){
    return (
      <div> testing </div>
    )
  }
}

export default Test;


//     componentDidMount(){
//       this.getUserData();
//     }

//   //requesting data from server by using '/api/user-data' : 
//   async getUserData(){
//     const response = await axios.get('/api/get-data');
//     console.log(' data response from database :', response.data);

//     // const name = response.data.name;
//     // console.log(name);
//   }

//   render(){
//     return <h1> testing </h1>
//   }

// }

// export default Test;
