import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    message: "",
    sent: false,
  };

  /*HANDLE INPUTS*/

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTel = (e) => {
    this.setState({ tel: e.target.value });
  };

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  /*END OF HANDLE INPUT*/

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      message: this.state.message,
    };

    console.log(data);

    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  /*for reseting initial data*/

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      tel: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 7000);
  };
  /* 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, tel, message } = this.state;

    await axios.post("/api/form", {
      name,
      email,
      tel,
      message,
    });
  } */

  render() {
    return (
      <div className="contactContainer">
        <section id="contact" className="menu-link">
          <div className="contactTitle">
            <h3 id="contact">CONTACT ME</h3>
          </div>
          <form onSubmit={this.formSubmit}>
            <div className="formContainer">
              <div className="contacto">
                <div className="firstCol">
                  <label className="noMessage">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name..."
                      value={this.state.name}
                      onChange={this.handleName}
                      required
                    ></input>
                  </label>
                  <label className="noMessage">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email..."
                      value={this.state.email}
                      onChange={this.handleEmail}
                      required
                    ></input>
                  </label>
                  <label className="noMessage">
                    <input
                      type="tel"
                      name="tel"
                      placeholder="Your phone number..."
                      value={this.state.tel}
                      onChange={this.handleTel}
                    ></input>
                  </label>
                </div>
                <label className="message">
                  <textarea
                    type="textarea"
                    name="message"
                    cols="38"
                    rows="5"
                    placeholder="Your message..."
                    value={this.state.message}
                    onChange={this.handleMessage}
                    required
                  ></textarea>
                </label>
              </div>
            </div>
            <div
              id="message"
              className={this.state.sent ? "msg msgAppear" : "msg"}
            >
              Your message has been sent successfully, thank you for your
              interest!
            </div>
            <div>
              <button type="submit" className="btn-3">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export default Contact;
