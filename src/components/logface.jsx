import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import Swal from 'sweetalert2';


function Logface() {

  const responseFacebook = (respuesta_correcta) => {
    console.log('Logueado con exito', respuesta_correcta);
    setUser(respuesta_correcta)
    Swal.fire({
        icon: 'success',
        title: 'BIENVENIDO APP UTD',
      })
      
      const [user, setUser] = useState;

  }
  return (
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="928696504929710"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
        
      </div>      
      
      );  
}

export default Logface;
  