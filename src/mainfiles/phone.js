import React from "react";
import myself from "./background/myselferino.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "mazurjakubb@gmail.com",
      succesMessge: 0,
      forcerefreshtime: 0,
      minutes: 0,
      hours: 0,
      mopacity: 0,
      mTop: "0px",
      feedback: "",
      usermopacity: 0,
      messegearray: [],
      nofadeout: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    /*
	const templateId = 'template_qzwwoLpA'
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  */

    if (this.state.feedback !== "") {
      this.state.messegearray.push([
        [this.state.feedback],
        ["20px"],
        [0],
        "start",
      ]);
    }

    this.setState({
      nofadeout: 1,
      succesMessge: 1,
      feedback: "",
      name: "",
    });

    setTimeout(() => {
      this.setState({
        nofadeout: 0,
      });
    }, 100);
  }

  handleChange2(event) {
    this.setState({ name: event.target.value });
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }

  sendFeedback(templateId, variables) {
    const templateParams = {
      name: this.state.name,
      message: this.state.feedback,
    };
    window.emailjs
      .send("mazurjakubb_gmail_com", "template_qzwwoLpA", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  componentDidMount() {
    setInterval(() => {
      let d = new Date();
      this.setState({
        minutes: d.getMinutes(),
        hours: d.getHours(),
      });
    }, 100);
  }

  render() {
    let fadeInMessage = {
      opacity: this.state.mopacity,
      marginTop: this.state.mTop,
    };

    let usermessage = {
      opacity: this.state.usermopacity,
    };

    if (this.state.feedback !== "") {
      this.state.usermopacity = 1;
    } else {
      this.state.usermopacity = 0;
    }

    setTimeout(() => {
      this.state.mopacity = 1;
      this.state.mTop = "40px";
    }, 1500);

    if (this.state.messegearray.length !== 0) {
      for (let i = 0; i < this.state.messegearray.length; i++) {
        if (this.state.messegearray[i][3] === "start") {
          setTimeout(() => {
            this.state.messegearray[i][1] = "40px";
            this.state.messegearray[i][2] = 0;
            this.state.messegearray[i][3] = "end";
          }, 100);

          setTimeout(() => {
            this.state.messegearray[i][2] = 1;
          }, 1500);
        }
      }
    }

    return (
      <div className="global-phone-head-container">
        <div className="round-background"></div>

        <div className="within-phone">
          <div className="whole-form">
            <form className="name">
              <h1 className="textarea-headlines"></h1>

              <div className="mesege-contents">
                <h1 className="textarea-headlines"></h1>
                <textarea
                  className="textarea-class-1"
                  id="test-mailing"
                  name="test-mailing"
                  onChange={this.handleChange}
                  placeholder=""
                  required
                  value={this.state.feedback}
                />
                <div
                  type="button"
                  value="Submit"
                  className="submit-button"
                  onClick={this.handleSubmit}
                >
                  <i className="fas fa-arrow-circle-right"></i>
                </div>
              </div>
              <div className="reveletion-button"></div>
            </form>
          </div>
          <div className="phone-elements">
            <div className="grey-edges-mother-class">
              <div className="grey-outline"></div>
              <div className="top-grey-edge"></div>
            </div>

            <div className="white-screen">
              <div className="more-more-grey">
                <div className="time-chat">
                  {this.state.hours}:{this.state.minutes < 10 && 0}
                  {this.state.minutes}
                </div>

                <div className="icon-panel">
                  <div className="connection">
                    <i className="fas fa-wifi"></i>
                  </div>
                  <div className="signal">
                    <i className="fas fa-signal"></i>
                  </div>
                  <div className="battery">
                    <i className="fas fa-battery-three-quarters"></i>
                  </div>
                </div>
                <div className="myselfchat">
                  {" "}
                  <img src={myself} className="myself-img"></img>
                </div>
                <h1 className="chat-fontsize">Jakub Mazur</h1>

                <div className="main-text-chat-container">
                  <div className="first-message" style={fadeInMessage}>
                    {/* <div className="thepointer-message"></div>*/}

                    <h2 className="mesge-to-viewers">
                      Hello stranger! Please remember to leave contact
                      information.{" "}
                    </h2>
                  </div>

                  <div>
                    {this.state.messegearray.map((value, i) => {
                      return (
                        <div
                          key={i}
                          className="user-message-cont"
                          style={{ marginLeft: this.state.messegearray[i][1] }}
                        >
                          <h2 className="user-message">
                            {this.state.messegearray[i][0]}
                          </h2>
                          {this.state.messegearray[i][2] === 0 && (
                            <h1 className="succes-sent">Sent!</h1>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {this.state.nofadeout === 0 && (
                    <div className="user-message-cont" style={usermessage}>
                      <h2 className="user-message">{this.state.feedback}</h2>
                    </div>
                  )}
                </div>
              </div>

              <div className="camera-panel"></div>
              <div className="kamer-circle-1"></div>
              <div className="kamer-circle-2"></div>
              <div className="kamer-circle-3"></div>
              <div className="kamer-circle-4"></div>
              <div className="kamera-line"></div>
              <div className="kamera-line2"></div>
              <div className="right-button"></div>
              <div className="left-button-1"></div>
              <div className="left-button-2"></div>
              <div className="left-button-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
