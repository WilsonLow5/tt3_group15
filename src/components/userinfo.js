import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

export default function userinfo() {
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

  return (
        {items.map((row) =>  (<div>
            <TextField value={row.username}/>
            <TextField value={row.firstname}/>
        </div>))};
  );
}
