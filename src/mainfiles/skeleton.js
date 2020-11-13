import React from 'react';
import blackbackground from './background/background-me2.jpg'
import klawa from './background/rama.jpg'
import cute from './background/cute.JPG'
import Baubles from './baubless.js'
import Contact from './phone.js'

import styles from './styles/global-params.scss';



class Skeleton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            workArray:[],
            skillopacity:0,
        }
    }
  render(){
    return(
        <div className="main-body-overflow">
        
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height" />
        <FirstSection adjectives={this.props.adjectives}/>
        {/* About */}
        <About about={this.props.about}/>
        {/* Skills */}
        <Skills skills={this.props.skills}/>
        {/* Project Editor */}
        <Viewer viewer={this.props.viewer} />
        {/* Conttact*/}
        <Contact2 logos={this.props.logos}/>
        {/* Footer */}
         <Footer navicons={this.props.navicons}/>
        </div>
    )
}
}
class FirstSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            animname:"fadesign",
            incrementmesege:0,
        };
    }
    componentDidMount(){
       
        setInterval(() => {
         this.state.incrementmesege<this.props.adjectives.length-1 ? this.setState({incrementmesege:this.state.incrementmesege+1,}) : this.setState({  incrementmesege:0,}) 
         this.setState({animname:this.state.animname==="fadesign" ? "fadesign2" : "fadesign"})
        
       
        }, 3000);
     }

    render() {
        return (
        <div className="center-flex" style={{backgroundColor:"#070707"}}>
        <div className="center overflow-img">
        <div className="first-section-wrapper">
        
              
       
        <div className="first-section-img-wrapper"><img className="first-section-img" src={blackbackground}></img>
        </div>
            
        <div className="first-mesege-class">
        <h1 className="welcome-messge-font ">Hello,I'm <b>Mazur Jakub</b> </h1>
        <h3 className="awesomeanim" 
        style={{animationName:this.state.animname}}
        ><b>{this.props.adjectives[this.state.incrementmesege]} </b></h3> 
        <h1 className="welcome-messge-font "> Looking for junior job.</h1>
        </div>
      
     
        </div>
        </div>
        </div>
        );
    }
}
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentmessege:"Main Skills",
            clicked:false,
            render:false,
            };
    }
    render() {
        return (
            <div className="section-about-wrapper secondcolor">
            <span id="About" className="anker"></span>
            <div className="about-centered">
            <div className="flex-fluid about-addon">
            <div className="cute-wrapper"><img src={cute} className="cute-img"></img></div>
            <div className="about-section-right">
            <h1 className="big-header " style={{textAlign:"left", marginLeft:""}}>About me</h1>
            <p>I am a graduate in the field of Environmental Engineering at AGH University of Science and Technology in Kraków - Poland. During my time at the university, I have been self-studying coding. I am very motivated and open-minded currently looking for a remote/stationary junior React Developer position.
            </p>
            <div className="button-about-me-pannel">
              {/*first maaaaaaaap */}
            {this.props.about.map((x,i)=>{
           return <div key={i} className="about-b-wrapper" 
           onClick={()=>{this.setState({currentmessege:this.props.about[i][0],})
        }}>

        <div className="ab-center">
        <div className="center-ab-row">
        <div className="text-ab-wrapper">
        <h1 className="buttonOh1 ab-text" style={{
            color:this.state.currentmessege===this.props.about[i][0] ? styles.cfour : "black"
        }}>{this.props.about[i][0]}</h1></div>
     
        {/* STRECHER */}
        <h1 className="buttonOh1"style={{opacity:0 }}>{this.props.about[i][0]}</h1>
             {/* STRECHER */}
             </div>
             </div>
             <div className="underline-about" 
            style={{width:this.state.currentmessege===this.props.about[i][0] ? "200px":"0px",
            }}
            ></div>
           
               </div>
            })}


            {/*first maaaaaaaap */}
            </div>
            <div className="about-me-meseges">
            {this.props.about.map((x,i)=>{
                return <div key={i} className="fade-in-mesges" style={{
                    animationName:this.state.currentmessege===this.props.about[i][0] ? "fadein": "fadeout",
                    position:"absolute",
                    animationDuration:this.state.currentmessege===this.props.about[i][0] ? "1.5s": "0s", 
            }}>{    
                    
                  <div> { this.props.about[i][1].map((m,l)=>{return <p  className="about-me-paragraphs" key={m}>{this.props.about[i][1][l]}</p>})} </div>   }
                  </div>
            })}
            </div>
            </div>
            <div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sprop:this.props.sprop,
            textcolor:"white" ,  
        };
    }
    render() {
        return (
            <div>
            <div className="section-about-wrapper firstcolor" style={{}}>
            <span id="Skills" className="anker"></span>
            <div className="about-centered">
            <h1 className="big-header " >Skills</h1>        
            <div className="box-row-wrapper">
            {this.props.skills.map((x,i)=>{
                return  <div key={i}> <Skillbars  i={i}  skills={this.props.skills} /></div>
            })}
            </div>
            </div>
            </div>
            </div>
        );
    }
}
class Skillbars extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            textcolor:"white",
            percent:0,
            barheight:0,
            local:0,
            width:window.innerWidth,
            scrollhover:"white",
            boxclass:"skill-box",
           
        };
           this.increment=this.increment.bind(this)
    }

    increment(){
        this.over=true    
        if(this.stopinterval===false){      
          let increment = ()=>{
                if(this.max>this.state.percent&&this.over){
                this.stopinterval=true
                this.setState({barheight:this.state.barheight+1.4,percent:this.state.percent+1})
                }else if(0<this.state.percent&&!this.over){    
                  this.setState({barheight:this.state.barheight-1.4,percent:this.state.percent-1})
                }else if(0===this.state.percent) {
                    this.stopinterval=false
                    this.setState({barheight:0,})
                    clearInterval(this.start)}
            }
        this.start = setInterval(increment,15)
        }

    }

    componentDidMount(){
        this.setState({width:window.innerWidth})
        this.stopinterval=false
        this.barheight=0
        this.max=Math.floor((this.props.skills[this.props.i][1]/140)*100)
        this.over=false

        window.addEventListener("resize",()=>
        {this.setState({width: window.innerWidth,})
        this.over=false
        this.setState({
            boxclass:"skill-box",
            scrollhover:"white",
        })
        ;})


        document.addEventListener("scroll", ()=>{
             if( this.state.width<619){
            this.setState({ windowoffset:window.pageYOffset,})
            let local = document.getElementById(this.props.skills[this.props.i][0]).getBoundingClientRect().y
            this.setState({local:local})

            if(local<300 && local>-200){
                if( this.over==false){
               this.increment()
               this.over=true
               this.setState({
                   boxclass:"skill-box hoverbox",
                   scrollhover:styles.cfour,
            })
                }
          }
          else{
            this.over=false
            this.setState({
                boxclass:"skill-box",
                scrollhover:"white",
            
            })
        }
    }
        })
        


    }
    render() {
        return (
            <div  id={this.props.skills[this.props.i][0]}  className={this.state.boxclass} 
                onMouseOver={()=>{
                    if(this.state.width>619){
                    this.setState({
                    boxclass:"skill-box hoverbox",
                    scrollhover:styles.cfour,})
                   this.increment()
                    }
                }}
                onMouseOut={()=>{
                    if(this.state.width>619){
                        this.setState({
                            boxclass:"skill-box",
                            scrollhover:"white",})
                    this.over=false
                    if(this.state.percent===0){this.setState({barheight:0,});  clearInterval(this.start)}
                    }
                }}>
                <h1 className="skill-box-header" style={{color:this.state.scrollhover}}>{this.props.skills[this.props.i][0]}<i className={this.props.skills[this.props.i][2]}></i></h1>
                <div className="skill-elements">
                <div className="colorfull-skillbar" style={{height:this.state.barheight}}></div>
                <div className="percent-indicators i-1 "/* style={{marginTop:60+(140-this.props.skills[i][1])+"px"}}*/>
                <h2 className="indicator-text" style={{color:this.state.scrollhover}}>{this.state.percent+ "%"}
                </h2></div>
                <div className="percent-indicators i-2"><h2 className="indicator-text" style={{color:this.state.scrollhover}}>0%</h2></div>
                </div>
                </div>
        );
    }
}
class Viewer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            param1:Math.floor(Math.random()*10000),
            param2:Math.floor(Math.random()*10000),
            param3:"Hello world",
            translateZ:-200,
            translateX:400,
            ip:0,
            viewer:[...this.props.viewer],
            formheight:"160px",
            rotatearrow:false,
            lightopacity:1,
            formmargin:"-400px",
            clicked:false,
            overflowindex:-1,

        }
        this.nextproject=this.nextproject.bind(this)
        this.lastproject=this.lastproject.bind(this)
        this.hidedetails=this.hidedetails.bind(this)
        this.form=this.form.bind(this)
    }
     nextproject(){  

        if(this.state.ip===this.state.viewer.length-1){
           this.setState({
               ip:0,
               translateZ:this.state.viewer[0][0],
               translateX:this.state.viewer[0][1],
           })
       }else{
           this.setState({
               ip:this.state.ip+1,
               translateZ:this.state.viewer[this.state.ip+1][0],
               translateX:this.state.viewer[this.state.ip+1][1],
           })
       }
        }
       lastproject(){
           if(this.state.ip===0){
               this.setState({
                   ip:this.state.viewer.length-1,
                   translateZ:this.state.viewer[this.state.viewer.length-1][0],
                   translateX:this.state.viewer[this.state.viewer.length-1][1],
               })
           }else{
               this.setState({
                   ip:this.state.ip-1,
                   translateZ:this.state.viewer[this.state.ip-1][0],
                   translateX:this.state.viewer[this.state.ip-1][1],
               })
           }
             
       }
       form(){
           if(this.state.clicked===false){
               this.setState({clicked:true})
        this.state.formmargin==="-400px" ? this.setState({formmargin:"6px"}): this.setState({formmargin:"-400px"});
        this.state.overflowindex===-1? this.setState({overflowindex:1}): 
        setTimeout(() => {
            if(this.state.formmargin==="-400px"){
            this.setState({overflowindex:-1})
            }
        }, 1000);  ;
    }
    setTimeout(() => {
        this.setState({clicked:false})
    }, 1000);
       }

     hidedetails(){this.state.hidedetails===false ? 
        this.setState({hidedetails:true}) 
     : this.setState({hidedetails:false})} 
   
    render() {
        let moving = {transform: `translateZ(${this.state.translateZ}px)translateX(${this.state.translateX}px)`}
    
        return (
            <div className="section-about-wrapper secondcolor"  >
            <span id="Portfolio" className="anker"></span>
            <div className="about-centered" >
            <h1 className="big-header" >Project viewer</h1>
                 
            <div className="projects-showcase"> 
            <div className="button-panel-wrapper">
            
            {/** 
            <div className="button-panel-2">
            <div className="button-1" onClick={this.hidedetails}><i className="fas fa-eye-slash hidedetails tran-05s"></i></div>
            <div className="button-1" onClick={this.form}><i className="fas fa-plus-circle hidedetails tran-05s"></i></div>
            </div>
            */}
            <div className="button-pannel">
            <div className="button-1" onClick={this.lastproject}><i className="fas fa-arrow-circle-left arrowleft tran-05s"></i></div>
            <div className="button-1" onClick={this.nextproject}><i className="fas fa-arrow-circle-left arrowright tran-05s"></i></div>
            </div>
            </div>
            {/*   RENDERING  HERE */}
            <div className="translate-responsive">
            <div className="scene" >
            <div className="wall-wrapper" style={moving}>
            {this.state.viewer.map((x,i)=>{
                return <div key={i} onClick={()=>
                 {this.setState({
                   translateX:this.state.viewer[i][1],
                   translateZ:this.state.viewer[i][0],
                   ip:i})}}>
                <Walls viewer={this.state.viewer} i={i}/></div>
            })}
             {/*   RENDERING HERE */}
            
            
            {this.state.hidedetails===false &&  <div className="wall-floor wall-4"><Baubles/>    </div>  }
            </div>
            </div>
            </div>
            </div>
                  {/* FORM HEEEEEEEEEEEERE */}
                <div className="overflow-form" style={{zIndex:this.state.overflowindex}}>
                  <form className="form-portfolio" style={{marginTop:this.state.formmargin}}>
                  <div className="flex-form">
                  <p>Z cord</p><input  type="number" value={this.state.param1} onChange={(event)=>{this.setState({param1:event.target.value})}}/>
                  <p>X cord</p><input  required value={this.state.param2} onChange={(event)=>{this.setState({param2:event.target.value})}}/>
                  <p>Header Text</p><input required value={this.state.param3} onChange={(event)=>{this.setState({param3:event.target.value})}}/>
                   <div className="submit-form" onClick={()=>{ 
                    this.setState({
                           viewer: [...this.state.viewer, [this.state.param1,this.state.param2,this.state.param3]],
                           param1:Math.floor(Math.random()*10000),
                             param2:Math.floor(Math.random()*10000),
                            
                            param3:"Hello world" })}}>
                           Add your wall!</div>
                           </div>
                  </form>
            </div>
            </div>
            </div>
        )
    }
}

//walls rendering//
class Walls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewer:[...this.props.viewer],
            opacity:1,
            zetindex:20,

            xPOZ:(this.props.viewer[this.props.i][1])*-1 +300,
            zPOZ:(this.props.viewer[this.props.i][0]*-1)-400,
           
        }; 
    }
    componentDidMount(){
            this.img=this.props.viewer[this.props.i][3]
            this.header=this.props.viewer[this.props.i][2]
            this.link=this.props.viewer[this.props.i][4]
    }

    render() {
        return (
            <div 
                className="wall" 
                style={{transform:`translateZ(${this.state.zPOZ}px)translateX(${this.state.xPOZ}px)`}}>
                <div className="header-div"><h1 className="projects-header">{this.header}</h1></div>
                <div className="project-prnt"><img src={this.img} className="project-img"></img></div>
                {/* LIGHT FUUUUUUUUUUUUUUUUUUUUUUUUUUUUNC */}
                <div className="lights" style={{opacity:this.state.opacity,zIndex:this.state.zetindex}}  
                  onClick={()=>{
                      this.setState({opacity:0})
                    setTimeout(() => {
                        this.setState({zetindex:0})
                    }, 1000);
                }}   
                > <i className="fas fa-question lightbulb"></i></div>
                <div className="thumbnail-div"><img src={klawa} className="fill-image"></img>
                <div className="view-button tran-1s"><h1 className="view-button-text tran-1s">
                <a style={{color:"white"}} target="_blank" href={this.link}><i className="fas fa-long-arrow-alt-left">
                </i>View project</a></h1></div>
                </div>
                </div>
        );
    }
}

class Contact2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            phoneclicked:false,
            emailclicked:false,};
        this.copyemails=this.copyemails.bind(this)
        this.copyphone=this.copyphone.bind(this)
    }
    copyemails(){ 
    navigator.clipboard.writeText("mazurjakubb@gmail.com");
    this.setState({emailclicked:true});
    setTimeout(() => {
        this.setState({emailclicked:false})   ;
    }, 1000);
}
    copyphone(){ 
    navigator.clipboard.writeText("511 518 517");
    this.setState({phoneclicked:true});
    setTimeout(() => {
        this.setState({phoneclicked:false})   ;
    }, 1000);
}
    render() {
        return (
            <div className="section-about-wrapper firstcolor" >
            <span id="Contact" className="anker"></span>
            <div className="about-centered">
            <h1 className="big-header" ></h1>
            <div className="contact-height">
            <div className="flex-fluid ">
            <div className="boxx-contact"> 
            <Contact />
            </div>
            <div className="text-container-contact">
            
                   
            <h1 className="big-header">Hire me!</h1>
            <div className="fluid-contact">
           
            
            <p className="contact-text">I am available for freelance work. Connect with me via phone: 511518517 or email: mazurjakubb@gmail.com</p>
           
            <div className="contact-grid">
            {this.props.logos.map((x,i)=>{
               return <div key={i} className="grid-img-cont"><img src={this.props.logos[i]} className="con-back-img"></img></div>
            })}
            </div>
           
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.copyphone=this.copyphone.bind(this)
    }

    copyphone(){ navigator.clipboard.writeText("511 518 517")
    this.setState({phoneclicked:true})
    setTimeout(() => {
        this.setState({phoneclicked:false})   
    }, 1000);
}

    render() {
        return (
            <div className="center-flex secondcolor"  style={{padding:"20px"}}>
            <div className="center">
            <div className="footer-wrapper">
            <h1 className="footer-text">Thank you for visiting!</h1>
            
            <div className="center-flex">
            <div className="footer-iconz-wrapper">
            
            {this.props.navicons.map((x,i)=>{
                return  <Navicons  key={i} i={i}  navicons={this.props.navicons} />
              })}
            
              </div>
            </div>
           
            <h1 className="footer-text">Designed by <a className="sign-footer"><b>Jakub Mazur</b></a></h1>
     
            </div>
            </div>
            </div>
        );
    }
}


class Navicons extends React.Component {
    constructor(props) {
      super(props);
      this.state = { popupopacity:0,};
    }

  
    render() {
  
      this.action=this.props.navicons[this.props.i][1]
      this.icon = this.props.navicons[this.props.i][0]
      this.copytext=this.props.navicons[this.props.i][2]
      this.link=this.props.navicons[this.props.i][2]

      return (
        <div className="fi-background ">
              {this.action==="copy" &&
              <div>
              <i onClick={()=>{
                navigator.clipboard.writeText(this.copytext)
                this.setState({popupopacity:1})
                setTimeout(() => {
                  this.setState({popupopacity:0})
                }, 1000);}}
               className={`${this.icon} fi-font`}></i>
               <div className="popup" style={{opacity:this.state.popupopacity, marginTop:"11px"}}><p>Copied</p></div>
               </div>
            } 
            {this.action==="link" && 
           <a href={this.link} target="_blank"> <i className={`${this.icon} fi-font`} ></i></a>
          }
  
  
            
            </div>
      );
    }
  }



export default Skeleton


