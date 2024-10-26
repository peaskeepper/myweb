let username = ''
let password = ''

function login(){
    username = document.querySelector('.username').value;
    password = document.querySelector('.password').value;
    

   if(username || password === !null ){
      alert(`your username is \n ${username} \n and Password is \n ${password}`)
   } else{
      alert('Enter username and password')
   };
}