import React from 'react';
import {FirstName,LastName} from './App';

const CompC = ()=>{ 
  return(
    <>
  <FirstName.Consumer> 
    

    {(fname)=>{
       return(
         <>
         <LastName.Consumer>
            {(lname)=>{
              return(
                <>
                <h1>Hey i am getting values as : {fname} {lname}, from the App component</h1>
                </>
              )
            }}
         </LastName.Consumer>
         </>
       ) 
     }}
    
  </FirstName.Consumer>



    
    </>
  )
}
export default CompC;