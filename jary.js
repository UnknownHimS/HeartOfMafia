const inputuser = document.getElementById("inputuser");
const submitbutton = document.getElementById("submitbutton");
let user;

submitbutton.onclick=function(){
     user = inputuser.value;

      if(user.replace(' ', '').toLowerCase() == 'romantic-action'){
         location.replace('nom-act.html');
      }

}