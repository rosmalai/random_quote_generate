import React from "react";
import { useEffect, useState } from "react";


export function Fetch() {
    const [quote, setQuote] = useState(null);
    useEffect(() => {
        let isMounted = true;
        fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then(data => {
                if (isMounted == true) {
                    setQuote(data);
                console.log(data);
                }
                
            })
            .catch(error => { ('Error: ', error) });
        return () => { isMounted = false };  //setQoute function been called multiple time
    }, []);
    return (
        <div>
            {quote ?(
                <div>
                    <p>"{quote.quote}"</p>
                    <p>- {quote.author}</p>
                </div>
            ):(
                <p>Loading...</p>
            )}
          
            
        
        </div>
    )
}
    
