

/* var gameArray = ['','','','','','','','','']; */


const gameBoard = (()=>{
    const build = (array)=>{
        const body = document.querySelector('body');
        const container= document.querySelector('.container');
        for(let i = 0; i<array.length;i++){
            const cell  = document.createElement('div');
            cell.setAttribute('style','height:10vh; width:10vw;');
          cell.innerHTML = array[i];
         
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
    return {build};
})();

gameBoard.build(['','','','','','','','','']);

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