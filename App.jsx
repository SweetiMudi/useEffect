import React, { useEffect, useState } from 'react';

const App = () => {
  const[num,setNum]=useState(0);
 

  useEffect(()=>{
   // It will show that how many times the button is clicked in the browser title.
    document.title = `You Clicked me ${num} Times.`
  })

    return(
     <>
      <button onClick={ () => {setNum(num+1)} }>
         Click me {num}
      </button>
     </>
    )
    };
export default App;