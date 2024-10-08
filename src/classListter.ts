


export class Listter {

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
    
  
    
    
  
  
  
  
  } 