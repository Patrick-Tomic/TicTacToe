


let gameArray = ['','','','','','','','',''];
const winner = (()=>{
  const check = (array )=>{
    isTrue = false;
   const win= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
   ];
   for(let i=0;i<8;i++){
      let winCondition = win[i];
      let a = array[winCondition[0]];
      let b = array[winCondition[1]];
      let c = array[winCondition[2]];
      if(a==''||b==''||c==''){
        continue;
      }else if(a==b &&b==c){
        isTrue=true;
        break;
      }
   }
   if(isTrue==true){
    console.log('Winner!');
  }
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