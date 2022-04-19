function getAdmins(map){

    for([key,value] of map){
        if(valuw === 'Admin'){
            admins.push(key)
        }
    }
   return admins;
}

const usuarios = new Map();

usuarios.set('Laura','Admin');
usuarios.set('Junior','Admin');
usuarios.set('Pedro','User');
usuarios.set('Kelly','User');

console.log(getAdmins(usuarios))