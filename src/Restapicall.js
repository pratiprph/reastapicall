import React, { Component , useEffect} from 'react';
import axios from 'axios';

let Restapicall = (props) =>{

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

  let postData = ()=>{
    console.log("post call");
  }

  const callApiAsPerNeed = ()=>{
    if(props.type==="get"){
      fetchData();
    } else if(props.type==='post'){
      postData();
    }
  }
 
   useEffect((props)=>{
    //fetchData()
    callApiAsPerNeed()
   },[])

  return (
     <div></div>
  
  );
    }
      
//  let  Restapicall = ()=> {
 
//   return (
//     <div>
//      dshlhdsl
//      <ApiCall url="https://jsonplaceholder.typicode.com/users" type="get" responseType="json"/>
//      <ApiCall url="http://dummy.restapiexample.com/api/v1/employees" type="get" responseType="text"/>
//      <ApiCall url="http://dummy.restapiexample.com/api/v1/employees" type="post" responseType="text"/>
//     </div>
//   );
  
//}

export default Restapicall;
