import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    try {
        // const response = await axios.post(SERVER_URL +'login', loginData);
        // const jwtTokenData = response.data;
  
        // if (localStorage.getItem('jwt' !== null)){
            console.log("NOT EQUALS NULL");
          localStorage.setItem('jwt', null);
  
          console.log("JWT Token **************");
          console.log(localStorage.getItem('jwt'));
          localStorage.removeItem('jwt');
          
          navigate("/welcome");
        // }
    } catch (error) {
        alert('Unable to log out');
    }
  return (
    <div>Logout</div>
  )
}

export default Logout