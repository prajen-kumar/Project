function date(){
   let now=new Date();
   let H=now.getHours();
   let M=now.getMinutes();
   let S=now.getSeconds();

   H=H<10?'0'+H:H;
   M=M<10?'0'+M:M;
   S=S<10?'0'+S:S;
   
   const time=H+' : '+M+' : '+S;

   let realTime=document.getElementById("innerClock");
   if(realTime){
      realTime.innerHTML=time;
   }
}
date();
setInterval(date,1000);