const canvas= document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
 const scale=10;
 const rows= canvas.height/scale;
 const columns= canvas.width/scale;


    this.x=0;
    this.y=0;
    this.xspeed=scale*1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
    
        const draw=()=>{
            
             
            
            
            //ctx.fillStyle="white";
        //ctx.fillRect(this.x,this.y,scale,scale);
        for(let i=0;i<this.tail.length;i++){
        ctx.fillStyle="white";
        ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
        ctx.fillStyle="black";
        ctx.strokeRect(this.tail[i].x,this.tail[i].y,scale,scale);
    
    
    
    }
         }

        const update=()=>{
         for(let i=0;i<this.tail.length-1;i++){
             this.tail[i]=this.tail[i+1]; 
             console.log(tail)
         }
         this.tail[this.total]={x:this.x,y:this.y};
        



            this.x += this.xspeed;
            this.y += this.yspeed;
            if (this.x> canvas.width) {
                this.x=0;
            }
            if (this.y> canvas.height) {
                this.y=0;
                
            }
            if (this.x< 0) {
                this.x=canvas.width;
                
            }
            if (this.y<0) {
                this.y=canvas.height;
                
            }
        }
    
        




    window.setInterval(()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawfruit();  
        update();
    draw();
    if (this.x==this.a && this.y==this.b) {
        this.total++;
        piclocation();
    }
    check();
    document.getElementById('score').innerHTML="SCORE : "+this.total;
},150);

window.addEventListener('keydown',(evt)=>{
    const direction =evt.key.replace('Arrow','');
changedirection(direction);
});

const changedirection=(direction)=>{
    switch(direction){
        case 'Up':
            this.xspeed=0;
            this.yspeed= -scale*1;
            break;
        case 'Down':
            this.xspeed=0;
            this.yspeed= scale*1;
            break;
        case 'Right':
            this.yspeed=0;
            this.xspeed= scale*1;
        break;
            case 'Left':
            this.yspeed=0;
            this.xspeed= -scale*1;
            break;
                            }
}
const piclocation=()=>{
    this.a=Math.floor(Math.random()*rows)*scale;
    this.b=Math.floor(Math.random()*columns)*scale;
    ;}

piclocation();
const drawfruit=()=>{
    ctx.fillStyle="blue";
ctx.fillRect(this.a,this.b,scale,scale);
}
const check=()=>{
    for(let i=0;i<this.tail.length;i++){
        if (this.x==this.tail[i].x && this.y==this.tail[i].y) {
          this.total=0;
          this.tail=[]; 
        
        }
    }
}
