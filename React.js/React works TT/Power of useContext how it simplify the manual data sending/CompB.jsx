import CompC from './CompC';
import { FirstName,LastName } from './App';
import { useContext } from 'react';

//power of useContext wow!!!
const CompB = ()=>{ 

const fName = useContext(FirstName)
const lName = useContext(LastName)
  return(
    <h1>Hello i am getting the values as: {fName} {lName}</h1>
  )
}
export default CompB;