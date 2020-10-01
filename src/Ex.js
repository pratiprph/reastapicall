import React from 'react'
import  Restapicall  from './Restapicall';

 let Ex = ()=> {
    return (
        <div>
            <Restapicall url="https://jsonplaceholder.typicode.com/users" type="get" responseType="json"/>
        </div>
    )
}

export default Ex;
