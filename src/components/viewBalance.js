import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function ViewBalance() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      let mounted = true;
    const doFetch = async () => {
      try {
        const url = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance'
        // const article = { username: "Group15", password: "TZbpGSJNjhmM36s"};
        const headers = { 
            'x-api-key': 'Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO'
        };
        await axios.post(url, {accountKey: '0d5face7-207f-4cce-9340-787cffd84441'}, { headers })
            .then((response) => {
                    console.log(response)
                    setItems(response.data);
                    setLoading(false);
                    
            })
            .catch((error) => {console.log(error);})

         } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    doFetch();
    return () => {
      mounted = false;
    };
  }, []);

  console.log(items);

  return (
    <div>
      <div>your cash balance is : {items.cashBalance}</div>  
      <div>your asset balance is : {items.assetBalance}</div>  
    </div>
        
  )
}
