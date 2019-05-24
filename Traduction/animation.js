var input = document.querySelector("input") ;
var page ;
var T=[0,4,12,3,2,8,7,6,5,10,9,1,11];
var adresse_physique = document.getElementById('adr') ;
var pagee = document.getElementById('adr1') ;
var decalage = document.getElementById('adr2') ;
var decalage1 = document.getElementById('adr22') ;
var cas = document.getElementById('adr3') ;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function myFunction() {
  
  document.getElementById("myDropdown").classList.toggle("show");
  if($(".fa").hasClass('right'))
  {
    $(".fa").removeClass('right');
    $(".fa").addClass('left');
  }
  else
  {
    if($(".fa").hasClass('left')) $(".fa").removeClass('left');
    $(".fa").addClass('right');
  }
  
}

function test(t){
 var b=true;
if(t.length !=4) 
{
 var instructions=document.getElementById("ins");
 instructions.style.color='#fff' ;
document.getElementById("fa-exclamation-triangle").style.display="block";
  instructions.innerHTML="veuillez entrer une adresse physique de 16 bits en HEXADECIMAL";  
  
  b=false;
}
else
{
  for(var i=0;i<4;i++)
  {
    if (isNaN(t[i])) {
         if(t[i]!='a' && t[i]!='b' && t[i]!='c' && t[i]!='d' && t[i]!='e' && t[i]!='f' )
         {
          var instructions=document.getElementById("ins");
          instructions.style.color='fff' ;
          instructions.innerHTML="veuillez entrer une adresse physique de 16 bits en HEXADECIMAL";
          document.getElementById("fa-exclamation-triangle").style.display="block";
          b=false;  
         }
    }
  }
}

if(b==true)
{
   if(t[0]=='c' || t[0]=='d' || t[0]=='e' || t[0]=='f' )
        {
           var instructions=document.getElementById("ins");
          instructions.style.color='fff' ;
          instructions.innerHTML="cette adresse n'est pas presente dans la memoire centrale (voir le tableau de page)";
          document.getElementById("fa-exclamation-triangle").style.display="block";
          b=false;  
        }
}
return b;
}


input.addEventListener("change", function traduction(){
var teest=input.value ;
if(test(teest))
{
  var instructions=document.getElementById("ins");
  instructions.style.color='#C0C1D8' ;
  document.getElementById("fa-exclamation-triangle").style.display="none";
document.getElementById("fa-arrow-circle-right").style.display="block";

 document.getElementById("fa-arrow-circle-right").classList.add("fa-arrow-circle-right");
var instructions=document.getElementById("ins");
instructions.innerHTML="calculer le nombre de bits necessaire pour le decalage ";  


page = input.value.substr(0,1) ;
pagee.textContent=hex2bin(page);
dec = input.value.substr(1,3) ;

decalage1.textContent=hex2bin(dec);
document.getElementById("fa-arrow-circle-right").addEventListener("click",function(){
 

var page_dec = toDecimal2(page) ;
for (var i = 1; i <= 12; i++) {
	if(page_dec===i)
	{
     var casee = T[i];

     for(var k=1;k<=12;k++)
      {
  
        if(k==i)
          {
            
            instructions.innerHTML="Chercher la case equivalente de cette page en memoire centrale";  
           

     var tr= document.getElementById(k) ;
     tr.style.background="#2c3e50";
                    }
        else
          {
               var tr= document.getElementById(k) ;
               tr.style.background="white"; 
          }
      }
        }
}
      document.getElementById("fa-arrow-circle-right").addEventListener("click",function(){
      instructions.innerHTML="Remplacer la page par la case trouvée dans le tableau de page et obtenir l'adresse physique";  
      
      


     cas.textContent=hex2bin(casee);
     decalage.textContent=hex2bin(dec);
     adresse_physique.textContent = toHex(casee)+dec ;
     document.getElementById("fa-arrow-circle-right").addEventListener("click",function(){
      document.getElementById("fa-arrow-circle-right").classList.remove("fa-arrow-circle-right");
   instructions.innerHTML="Fin";  
});
});
});
}
else
{
  for(var k=1;k<=12;k++)
      {
  
      
               var tr= document.getElementById(k) ;
               tr.style.background="white"; 
          
      }
      cas.textContent="case";
     decalage.textContent="decalage";
     adresse_physique.textContent = "adresse physique" ;
     pagee.textContent="page";
     decalage1.textContent="decalage";

      document.getElementById("fa-arrow-circle-right").classList.remove("fa-arrow-circle-right");
}
});

function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(4, '0');
}

function toDecimal2(value) {

  if(value=='a') return 10;
  if(value=='b') return 11;
  if(value=='c') return 12;
  if(value=='d') return 13;
  if(value=='e') return 14;
  if(value=='f') return 15;
  else return Number(value); 
}

function toHex(value) {

  if(value==10) return 'a';
  if(value==11) return 'b';
  if(value==12) return 'c';
  if(value==13) return 'd';
  if(value==14) return 'e';
  if(value==15) return 'f';
  else return value; 
}






































