const inputuser = document.getElementById("inputuser");
const submitbutton = document.getElementById("submitbutton");
let user;

submitbutton.onclick=function(){
     user = inputuser.value;
      if(user.replace(' ', '').toLowerCase() == 'english'){
         location.replace('englis.html');
      }
      else if(user.replace(' ', '').toLowerCase() == 'romantic-action'){
         location.replace('Rom-act.html');
      }

}