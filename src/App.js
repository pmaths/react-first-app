import React,{useState} from "react";
import Tweet from './Tweet';
// import Hello from './Sayhello';

function App(){
// eslint-disable-next-line
  const [users,setUsers]=useState(
    [
      {name :"Ed", message:"Hello there" },
      {name :"John", message:"I am good"},
      {name :"Bosh", message:"I am fine"}
    ]
  );
  // const [isRed,setRed]=useState(false);
  // const [count, setCount]=useState(0);
  
  // const increment =()=>{
  //   setCount (count +1);
  //   setRed(!isRed);
  // }
     return (
       <div className="app">
         {users.map(user =>(
         <Tweet name={user.name} message={user.message }/>)
         
         )}
        
       </div>
     );

  // return (
  // <div className= "app">
  //   <h1 className={isRed ? "red" : " "}>Change my color</h1>
  //   <button onClick={increment}>Increment</button>
  //    <h1>{count}</h1>
  // </div>
  // );

  // return(
  //   <div className= "app">
  //     <h1>Hello React</h1>
  //     <Tweet name="Krishna" message="Eternal"/>
  //     <Tweet name="Radhe" message="Devi"/>
  //     <Tweet name="Lalitaji" message="Gopi"/>
  //     <Tweet name="Vishakaji" message="Sewa Gopi"/> 
  //    {/* <h1>This is app component</h1> */}
  //    {/* <Hello/>  */}

  //   </div>  
 //  ); 
}

export default App;

