function getMessage(type, code, lang){
    switch (type){
        case "user":
            return getMessageUser(code, lang);
        default:
            return "No message code founded";
    }
}

function getMessageUser(code, lang){
    switch(lang){
        case "es":
            switch (code){
                case "nousername":
                    return "Nombre de usuario no encontrado en la peticion";
                case "noname":
                    return "Nombre no encontrado en la peticion";
                case "nolastname":
                    return "Apellido no encontrado en la peticion";
                case "noemail":
                    return "Email no encontrado en la peticion";
                case "nopassword":
                    return "Password no encontrado en la peticion";
                case "norole":
                    return "Rol del usuario no encontrado en la peticion";
                default:
                    return "Codigo de mensaje no encontrado";
            }
        //english is the default language
        default:
            switch (code){
                case "nousername":
                    return "Username not found";
                case "noname":
                    return "Name not found";
                case "nolastname":
                    return "Lastname not found";
                case "noemail":
                    return "Email not found";
                case "nopassword":
                    return "Password not found";
                
                default:
                    return "No message code founded";
            }
    }
}



module.exports = getMessage;