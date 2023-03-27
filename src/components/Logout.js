import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';
function Logout() {
    
    const Logout=()=>{
        console.log("SESIÓN TERMINADA LUNA HERNANDEZ_24/02/23");         
        Swal.fire({
            icon: 'success',
            title: 'Sesion cerrada de App UTD',
            text: 'Gracias por utilizar el sistema UTD',
            footer: '<a href="www.utd.com"> UTD oficial</a>'
          })
      }  
    return (        
            <GoogleLogout
                clientId="371163760517-e7cm1t83fug4bf1m51ta6q1hcdug6uda.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;