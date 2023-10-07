


let gameArray = ['','','','','','','','',''];
const winner = (()=>{
  const check = (array )=>{
    let isTrue = false;
    let Xcount =0;
    let Ocount = 0;
    for(let i=0;i<array.length;i++){
      if(i+1%3==0 && Xcount!=3 ||i+1%3==0 && Ocount!=3){
        Xcount=0;
        Ocount=0;
      }
     else {
      if(array[i]=="X"){
        Xcount++;
        
     }
     else if(array[i]=='O'){
        Ocount++;
        
     }
     if(Xcount==3){
      console.log('Player X wins');
      isTrue=true;
     }else if(Ocount==3){
      console.log("player O wins!");
      isTrue=true
     }
    }
  }
  if(isTrue==true)return;
  Xcount=0;
  Ocount=0;
 
}
  return {check};
})();
const gameBoard = (()=>{
   

    const build = (array)=>{
      let count =0;
        const body = document.querySelector('body');
        const container= document.querySelector('.container');
        for(let i = 0; i<array.length;i++){
            const cell  = document.createElement('div');
            const error = document.querySelector('.errorMessage');
          
          cell.addEventListener('mouseover',()=>{cell.style.background = 'grey';});
          cell.addEventListener('mouseleave',()=>{cell.style.background='white';});
          cell.addEventListener('click',()=>{
            if(array[i]=='X'||array[i]=='O'){
              
              error.style.display = 'block';
            }else{
              error.style.display ='none';
            if(count%2==0){
              array.splice(i,1,'X');
               winner.check(gameArray);
              cell.innerHTML = array[i];
            }else{
              array.splice(i,1,'O');
              winner.check(gameArray);
              cell.innerHTML = array[i];
              
            }
            
          }
            count++;
          });
          if(i==1||i==7){
            cell.setAttribute('style','border-right:1px solid black; border-left:1px solid black;');
            
          }else if(i==3||i==5){
            cell.setAttribute('style','border-bottom:1px solid black;border-top:solid black 1px');
          }else if(i==4){
            cell.setAttribute('style','border:1px solid black;');
          }
          cell.innerHTML = array[i];
            container.appendChild(cell);
            
        }
        
    }
  
    return {build};
})();

gameBoard.build(gameArray);


/* const gameArray = (()=>{
    
   buildBoard:function(){
        const body = document.querySelector('body');
        const container = document.querySelector('.container');
        for(let i=0;i<array.length;i++){
          const cell = document.createElement('div');
          cell.setAttribute('style','height:10vh; width:10vw;');
          cell.innerHTML = gameArray[i];
         
          if(i==1||i==7){
            cell.setAttribute('style','border-right:1px solid black; border-left:1px solid black;');
            
          }else if(i==3||i==5){
            cell.setAttribute('style','border-bottom:1px solid black;border-top:solid black 1px');
          }else if(i==4){
            cell.setAttribute('style','border:1px solid black;');
          }
            container.appendChild(cell);
        }
        body.append(container);
    }
})();
let array =[8];
gameArray.buildBoard(array); */