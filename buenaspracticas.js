let edad_del_usuario = 25; @param number
function comprobar_requisitos_del_usuario(){ 
    let tieneVehiculo = true; @param boolean
    if (edad_del_usuario >= 18){ 
        if(tieneVehiculo===true){
            return true; 
        }else {
            return false;
        }
    }else{
        return false;
    }
}
console.log(comprobar_requisitos_del_usuario()); @returns boolean
