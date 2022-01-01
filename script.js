var a;
var die;
var tim;
var rand;

var last;

var count;
var k=8;
var h ;
a=0;
die = setInterval(roll,500);
tim = setInterval(start,1000);

function start(){
    a=a+1
    if(a==k)
    {
        clearInterval(die);
        clearInterval(tim);
        //console.log(rand);
        last=rand;
        h();
        //console.log(last)
        
    }
    if(a<=7){

    var b ;
    b=8-a
    document.getElementById('bottom3').innerHTML="Dice Will Stop In "+b+" seconds"
    }
      

}



function roll(){
    //a=a+1;
    //if(a==10)
    //{
      //  clearInterval(die);
    //}
    rand = Math.floor(Math.random()*6)+1
   // console.log(rand);
    document.getElementById('dice').innerHTML=" <img src='image/"+rand+".png'/>";
}



var count;
function one(){
    count=1;
     document.getElementById('out').innerHTML="Selected Variable:"+count+""
     var score=0;
     console.log(count)
       h = function (){
        console.log(k)
        if(count==last)
        {
             document.getElementById('bottom3').innerHTML="your Guess is right"
             score=score+10;
             document.getElementById('inn').innerHTML="Score:"+score+"";
        }
        else{
           document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
        } 
     }
     
    
 
 
 }
 function two(){
     count=2;
      document.getElementById('out').innerHTML="Selected Variable:"+count+""
      var score=0;
  console.log(count)
  h = function (){
    console.log(k)
    if(count==last)
    {
         document.getElementById('bottom3').innerHTML="your Guess is right"
         score=score+10;
         document.getElementById('inn').innerHTML="Score:"+score+"";
    }
    else{
       document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
    } 
 }
 
     
     }
  function three(){
     count=3;
      document.getElementById('out').innerHTML="Selected Variable:"+count+""
      var score=0;
      console.log(count)
      h = function (){
        console.log(k)
        if(count==last)
        {
             document.getElementById('bottom3').innerHTML="your Guess is right"
             score=score+10;
             document.getElementById('inn').innerHTML="Score:"+score+"";
        }
        else{
           document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
        } 
     }
     
  
  
     }
  function four(){
     count=4;
      document.getElementById('out').innerHTML="Selected Variable:"+count+""
      var score=0;
      console.log(count)
      h = function (){
        console.log(k)
        if(count==last)
        {
             document.getElementById('bottom3').innerHTML="your Guess is right"
             score=score+10;
             document.getElementById('inn').innerHTML="Score:"+score+"";
        }
        else{
           document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
        } 
     }
  
  
     }
  function five(){
     count=5;
      document.getElementById('out').innerHTML="Selected Variable:"+count+""
      var score=0;
      console.log(count)
      h = function (){
        console.log(k)
        if(count==last)
        {
             document.getElementById('bottom3').innerHTML="your Guess is right"
             score=score+10;
             document.getElementById('inn').innerHTML="Score:"+score+"";
        }
        else{
           document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
        } 
     }
     
  
     }
 
 
  function six(){
     count=6;
      document.getElementById('out').innerHTML="Selected Variable:"+count+""
  
      var score=0;
      console.log(count)
      h = function (){
        console.log(k)
        if(count==last)
        {
             document.getElementById('bottom3').innerHTML="your Guess is right"
             score=score+10;
             document.getElementById('inn').innerHTML="Score:"+score+"";
        }
        else{
           document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
        } 
     }
 
     }
 

 //var score=0;
 //console.log(count)
 //if(last===count)
 //{
   //   document.getElementById('bottom3').innerHTML="your Guess is right"
     // score=score+10;
      //document.getElementById('inn').innerHTML="Score:"+score+"";
 //}
 //else{
  //  document.getElementById('bottom3').innerHTML="your Guess is wrong,better luck next time"
 //}
















