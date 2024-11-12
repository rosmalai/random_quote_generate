import './App.css'

//Comment part can be used if You don't want to use fetch component

// import { useEffect, useState } from 'react'
import { Fetch } from './components/fetch';
function App() {
  
  // const [quote, setQuote] = useState(null);
  //   useEffect(() => {
  //       fetch('https://dummyjson.com/quotes/random')
  //           .then(res => res.json())
  //           .then(data => {
  //               console.log(data);
  //               setQuote(data);
                
  //           })
  //           .catch(error => { ('Error: ', error) });
  //   }, []);

  return (
    <div>
      <Fetch/>
      
      {/* {
        quote ? (<div>
          <p>"{quote.quote}"</p>
          <p>-{quote.author}</p>
        </div>) : (
          <p>Loading...</p>
        )
      } */}
      
    </div> 
  )
}

export default App
