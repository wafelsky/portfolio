import React from "react";
import styles from './styles/global-params.scss';
import logopng from './background/logopng.png'



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {///////// the ID must exist in the document before you add the button!
      iColor:styles.c,
      width: "",
      navmargin:"-400px",
      currentlyclicked:"Home",
      widthchange:1400,
    underlinewidth: "140px",
    topunderlinecolor:"rgb(235, 164, 11)",
    windowoffset:0,
    emailclicked:false,
    phoneclicked:false,
    };
    this.smallscreenpanel=this.smallscreenpanel.bind(this)

  }
 smallscreenpanel(){
    this.state.navmargin==="-400px" ? this.setState({navmargin:"0px"}) : this.setState({navmargin:"-400px"}) ;
  }
  componentDidMount() { this.setState({ width: window.innerWidth, });
  window.addEventListener("resize",()=>{this.setState({width: window.innerWidth,});})
   document.addEventListener("scroll", ()=>{
     this.setState({ windowoffset:window.pageYOffset,})
    //////////////////handles detection of where did the user scroll

      for(let i=0;i<this.props.navbuttons.length;i++){
        let local = document.getElementById(this.props.navbuttons[i][0]).getBoundingClientRect().y
        if(local<10){this.setState({currentlyclicked:this.props.navbuttons[i][0]})}
      }
 })
    
  }


  render() {
    let scrollnav = { marginTop:this.state.navmargin}

    return (
      <div className="absolute-main-nav" id="Home">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" ></link>

        <div className="header-flex-container" 
        style={{backgroundColor:this.state.windowoffset!==0 ? "#191919": "#070707",
        border:this.state.windowoffset!==0 ? "2px solid #101010":"none"

      }} >
      
          <div className="flex-header-row left-buttons " >
          <div className="logo-wrapper">
          <img className="logo-png" src={logopng}></img>
          <div></div></div>

          {/* auto buttons top */}
          {this.state.width>=this.state.widthchange &&<div className="flex-header-row">
          {this.props.navbuttons.map((x,i)=>{
            return  <div key={i} className="button-wrapper">
            <a href={`#${this.props.navbuttons[i][0]}`} 
    className="trans-text">
            <div className="panel-button" onClick={()=>{this.setState({currentlyclicked:this.props.navbuttons[i][0]})}}>
            <h1 className="left-panel-font" style={{color:this.state.currentlyclicked===this.props.navbuttons[i][0] ? styles.cfour : "white"
          }} >
            
            {this.props.navbuttons[i][0]}</h1>
            </div></a>
            <div className="underline-magic" style={{width: this.state.currentlyclicked===this.props.navbuttons[i][0] ? "150px" : "0px" , }} ></div> 
            </div>
            
          
          })}</div>}
          </div>
          
          {/*ICONZ RIGHT*/}
          
          <div className="flex-header-row right-buttons ">

          {this.props.navicons.map((x,i)=>{
            return  <Navicons   i={i}  navicons={this.props.navicons} />
          })}

         
          {/* SMALL SCREEN NAV SCROLL BUTTON */}
          {this.state.width<this.state.widthchange &&   <div className="iconz-fontsize" onClick={this.smallscreenpanel}>
          {this.state.navmargin!="-400px" && <div className="inheritance-issues"><i className="fas fa-times-circle hover-icon "></i></div>}
          {this.state.navmargin==="-400px" && <i className="fas fa-bars hover-icon"></i> }
          </div>}
          {/* ENDDDDDDDD */}
          
          </div>
          {/* auto buttons right */}
          {this.state.width<this.state.widthchange && <div className="hide-panel-overflow" style={{height:this.state.navmargin==="-400px" ? "0px": "320px"}}>
          <div className="smaller-screen-panel " style={scrollnav}>
          {this.props.navbuttons.map((x,i)=>{
            return  <div key={i} className="button-wrapper-right">
            <div className="panel-button-right" onClick={()=>{this.setState({currentlyclicked:this.props.navbuttons[i][0],navmargin:"-400px"})}}>
            <h1 className="left-panel-font" >
            <a href={`#${this.props.navbuttons[i][0]}`} style={{color:this.state.currentlyclicked==="home" ? this.state.iColor : "white",textAlign:"center"}}>
          {this.props.navbuttons[i][0]}</a></h1>
            </div>
            <div className="underline-magic-right" style={{width: this.state.currentlyclicked===this.props.navbuttons[i][0] ? "150px" : "0px" , }} ></div> 
            </div>
          
          })}
          </div>
          </div>}
          
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
      <div className="iconz-fontsize ">
            {this.action==="copy" &&
            <div>
            <i onClick={()=>{
              navigator.clipboard.writeText(this.copytext)
              this.setState({popupopacity:1})
              setTimeout(() => {
                this.setState({popupopacity:0})
              }, 1000);}}
             className={`${this.icon} hover-icon`}></i>
             <div className="popup" style={{opacity:this.state.popupopacity}}><p>Copied</p></div>
             </div>
          } 
          {this.action==="link" && 
         <a href={this.link} target="_blank"> <i className={`${this.icon} hover-icon`} ></i></a>
        }

          </div>
    );
  }
}

export default Navbar;
