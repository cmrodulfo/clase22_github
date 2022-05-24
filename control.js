
const user = document.getElementById('user');
const password = document.getElementById('password');
const logIn = document.getElementById('logIn');


//const data = [user.value, password.value,]
//console.log(data)

logIn.addEventListener('click', function(){
    if(password.value == ''){
        alert('Debe completar todos los campos')
    }
    else{
        if(user.value == ''){
            alert('Debe completar todos los campos')
        }
        else{
            if(user.value.includes('@'))
            {}
            else {
                alert('El usuario debe contener un @')
            }
    }
}})
   