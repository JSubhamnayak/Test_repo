let mnum=prompt("enter the maximum num");
let random=Math.floor(Math.random()*mnum)+1;
let gnum=prompt("enter the number you guess");
while(true){
    if(gnum=="quit"){
        console.log("successfuly quit the game");
        break;
    }
    if(gnum==random){
        console.log("u guess the right");
        break;  
    }
    else if(gnum>random){
          gnum=prompt("you enter too big no pls enter another");
    }
    else{
        gnum=prompt("you enter too small no pls enter another");
    }
}