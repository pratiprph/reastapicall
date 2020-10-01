import React, { Component , useEffect} from 'react';
import axios from 'axios';

const ApiCall = (props) =>{

  let fetchData = ()=>{
    axios({
      method: props.type,
      url:props.url,
      responseType: props.responseType
    })
      .then(function (response) {
        console.log(response.data)
      });
  }
 
   useEffect((props)=>{
    fetchData()
   },[])

  return (
     <div></div>
  
  );
    }
      
 let  App = ()=> {
 
  return (
    <div className="App">
     dshlhdsl
     <ApiCall url="https://jsonplaceholder.typicode.com/users" type="get" responseType="json"/>
     <ApiCall url="http://dummy.restapiexample.com/api/v1/employees" type="get" responseType="text"/>
    </div>
  );
  
}

export default App;
