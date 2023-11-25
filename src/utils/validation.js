import { regexEmail, regexPassword } from "./constants"


export default function validation(input){

 const errors = {};

 if(!input.email.length) errors.email = "Ingrese su email";
 else {
    if(!regexEmail.test(input.email)) errors.email="Debe ingresar un email valido";
    if(input.email.length > 35) errors.email ="Menor a 35 caracteres";
 }

 if(!input.password.length) errors.password = "Ingrese su password";
 if(!regexPassword.test(input.password)) errors.password = "Debe tener al menos un numero";
 if(input.password.length < 6) errors.password = "Al menos 6 caracteres";
 if(input.password.length > 9) errors.password = "Maximo de 10 caracteres";

  return errors;
}
