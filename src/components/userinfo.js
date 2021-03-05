import React, {useState, useEffect} from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';

export default function UserInfo() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      let mounted = true;
    const doFetch = async () => {
      try {
        const url = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login';
        const article = { username: "Group15", password: "TZbpGSJNjhmM36s"};
        const headers = { 
            'x-api-key': 'Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO'
        };
        await axios.post(url, article, { headers })
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

  console.log(items.firstName);

  return (
    <div>
        <TextField label="First Name" value={items.firstName}/>
        <TextField label="Last Name" value={items.lastName}/>
        <TextField label="NRIC" value={items.nric}/>
        <TextField label="Address" value={items.address}/>
        <TextField label="Phone Number" value={items.phoneNumber}/>
        <TextField label="Email Address" value={items.email}/>
    </div>      
  );
}
