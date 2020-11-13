import React from 'react'
import styles from './styles/global-params.scss';

class Baubles extends React.Component{
    constructor(props){
        super(props)
        this.state={

            mouseX:0,
            mouseY:0,
            windowwidth:0,

        }
        this.resize=this.resize.bind(this)
    }

    resize(){
        this.setState({
            windowwidth:window.innerWidth
        })

    }
    componentWillUnmount(){
        document.removeEventListener("mousemove", this.resize)
    }

    componentDidMount(){
        document.addEventListener("mousemove", this.resize)

      
       
        let mouse = {
            x:undefined,
            y:undefined,
        }

    

        document.addEventListener("mousemove", (event) =>{
            mouse.x=event.pageX - ((this.state.windowwidth/2)-400)
            mouse.y=event.pageY -50;
        })

  

        let canvas = document.getElementById("Baubles")
        canvas.width= 400;
        canvas.height= 600;
     
        console.log("window width" + window.innerWidth)
        let c = canvas.getContext('2d')
    
      

       

        let colorArray=["rgb(240, 236, 44)", "rgb(211, 160, 20)", "rgb(237, 240, 102)"]
   
        function Circle (x,y,radius,xvelocity,yvelocity)  {
            this.x=Math.random()*canvas.width
            this.y=Math.random()*canvas.height
            this.xvelocity=Math.random()*0.7 - Math.random()*0.4
            this.yvelocity=Math.random()*0.2
            this.radius=(Math.random()*5)*4
            this.saveradius=this.radius
            this.growradius=100
         
          
            let rand = Math.floor(Math.random()*3)

        this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle= styles.c
           
            if(mouse.x - this.x< this.growradius && mouse.x - this.x >- this.growradius && mouse.y - this.y< this.growradius && mouse.y - this.y >- this.growradius){
                c.strokeStyle=colorArray[rand];
           }
            c.stroke();
            c.fillStyle=styles.c
            if(mouse.x - this.x< this.growradius && mouse.x - this.x >- this.growradius && mouse.y - this.y< this.growradius && mouse.y - this.y >- this.growradius){
                 c.fillStyle=colorArray[rand]
              
            }
          
            c.fill();
        }
            
            
          this.update = function(){
                if(this.x + this.radius>canvas.width || this.x<0){
                    this.xvelocity= -this.xvelocity
                }
                if(this.y + this.radius>canvas.height || this.y<0){
                    this.yvelocity= -this.yvelocity
                }
               this.x+=this.xvelocity
               this.y+=this.yvelocity

               if(mouse.x - this.x<50 && mouse.x - this.x >-50 && mouse.y - this.y<50 && mouse.y - this.y >-50){
                   if(this.radius<50){
                    this.radius+=0.4
                   }
               
                }
                else{
                    if(this.radius>this.saveradius && this.radius>2){
                        this.radius--
                    }
                    
                }



            }
         

           
            

            }

   
        let circleArray=[]
        
        for(let i=0; i<100; i++){
            circleArray.push(new Circle())
        }
        
        function animacja (){
            requestAnimationFrame(animacja);
            c.clearRect(0,0,window.innerHeight+1000,window.innerWidth+1000)
          
            for(let i=0; i<circleArray.length; i++){
                circleArray[i].draw()
                circleArray[i].update()
            }
           

        }
        animacja()
      
        
        

    
;
    }

    render(){

        return(<div>
            
            <canvas id="Baubles" className="first-canvas"></canvas>
           
        
            
            
            </div>)
    }


}

export default Baubles;