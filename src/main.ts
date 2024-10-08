import {onAddMusicOnClick} from "./addMusic"

import {Listter} from "./classListter"



/*class Listter {

  url: String; 
  music: any = []; 
  
  constructor(){
    
    
    
    
      this.music = []
      this.url = 'http://localhost:3000';
      
      this.fetchMusic();
      
  }

  async fetchMusic(){
     let res = await fetch(`${this.url}/addMusic`)
     let data = await res.json();
     this.music = data; 

     this.renderMusicCards();
  }
  
  renderMusicCards(){
  
      let container = document.getElementById('container') as HTMLDivElement
      container.innerHTML = "";
      
      for(let music of this.music){
          //make a card 
          let card = document.createElement('div');
          let info = document.createElement('h3');
          let delButton = document.createElement('button')
         
          // let albumInfo = document.createElement('h3');
          
          //modify 
          info.innerText = "(Artist)" + `${music.artist}`+ "-" +"(Album)" +`${music.album}` ;
          delButton.innerText = 'X'; 
          delButton.addEventListener('click', () => {
              
              this.deleteMusic(music);
          })
          
          //albumInfo.innerText = ;

          //append 

          card.append(info,delButton) 
          container.append(card)
      }
  }
  
 
  async deleteMusic(music: any){
      let url = `${this.url}/addMusic/${music.id}`
      //remove music from database 
      let res = await fetch(url, {
          method: "DELETE",
      })
       let data = await res.json(); 
       console.log(data) 

       //this.music = this.music.filter(u => u.id !== music.id)
       //this.renderMusicCards();
  } 
  
  
  
  //delete music 
  

  
  




} */



new Listter(); 

document.getElementById("submit-btn")!.addEventListener("click", onAddMusicOnClick)

//post music 

/*async function onAddMusicOnClick(event: Event){
  event.preventDefault()
  
  let userInput = (<HTMLInputElement>document.getElementById('artistName')).value;
  let userInput2 = (<HTMLInputElement>document.getElementById('albumName')).value;
  
  
  let testMusic: any; 
  let res: any; 
  let data: any; 
  
  testMusic = {artist: userInput , album: userInput2}
  
  //this.deleteMusic(music);
  
  res = await fetch('http://localhost:3000/addMusic', {
      method:"POST" , 
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(testMusic)

  })
   data = await res.json();

} */



