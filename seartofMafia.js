const darkmode = document.getElementById("darkmode");
const home = document.getElementById('home');
const title = document.getElementById('title');
const sentenceContainer = document.getElementById('sentenceContainer');
const chapter1 = document.getElementById('chapter1');
const pre1 = document.getElementById('pre1');

const preone = `   In a world where everyone has their own fears

and weaknesses, a man named Denzo has none. He is a

perpectionist, even about his appearance, allowing

no flaws. Denzo does not let any emotion get in his

way, and he is a genius with an IQ surpassing Albert

Einstein's, scoring at 240.`;


darkmode.onclick=function(){
    if(darkmode.textContent === 'darkmode🌙'){
       document.body.style.background=`linear-gradient(270deg, rgb(28, 28, 28), rgb(58, 58, 58, 0.5)),
       url('zafiarom.png')`;
       home.style.textShadow="2px 2px 3px";
       title.style.textShadow="2px 2px 5px";
       sentenceContainer.style.textShadow='3px 3px 4px black';
       sentenceContainer.style.color='rgb(255, 182, 192)';
       sentenceContainer.style.fontWeight='bold';
       darkmode.textContent='lightmode⚡';
       darkmode.style.color='white';
       sentenceContainer.style.margin='-120px 0px';
       title.style.margin='35px 400px';
       chapter1.style.margin='90px 100px';
       pre1.textContent=`
          In a world where everyone has their own fears  and weaknesses, a man named Denzo has none. He is 
         
 a perpectionist, even about his appearance, allowing  no flaws. Denzo does not let any emotion get in his
    
 way, and he is a genius with an IQ surpassing Albert Einstein's, scoring at 240.
    
    
`
       
       
    }
    else if(darkmode.textContent === 'lightmode⚡'){
        darkmode.textContent='darkmode🌙';
        
        document.body.style='white';
        document.body.style.backgroundImage = `url('/zafiarom.png')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.bodybackgroundSize = '50%';
        document.body.style.backgroundPosition= 'right 0px';

        sentenceContainer.style.textShadow='0px 0px 0px';
        sentenceContainer.style.color='rgb(0, 0, 0, 0.9)';
        sentenceContainer.style.fontWeight='100';
        title.style.textShadow=" 3px 3px 4px black";
        darkmode.style.color='black';
        sentenceContainer.style.margin='245px 0px';
        title.style.margin='100px 100px';
        chapter1.style.margin='200px 40px'
        pre1.textContent=preone;
        
        
   
        

    }
   
}
