
export async function onAddMusicOnClick(event: Event){
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
  
  } 