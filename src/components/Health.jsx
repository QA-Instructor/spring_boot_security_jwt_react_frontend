import React, {useState, useEffect} from 'react';
import { SERVER_URL } from '../constants.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Health = () => {

    const navigate = useNavigate();

    const [data, setData] = useState('');
    
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        'Content-Type': 'application/json',
      };

      useEffect(() => {
        if (!localStorage.getItem("jwt")) {
            navigate("/login");
          }
        axios.get(SERVER_URL + 'authhealth', {headers})
        .then(response => {
          console.log(response.data);
          setData(response.data);
 
      }).catch((err) => {
        if (!localStorage.getItem("jwt")) {
            navigate("/login");
          }
      });
    
      }, []);

  return (
    <div>
        <h1>Health Component</h1>
        <p>{data}</p>
    </div>
  )
}

export default Health