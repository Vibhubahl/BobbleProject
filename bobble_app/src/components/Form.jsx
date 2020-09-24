import React from "react";
import "../public/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";

function Form() {
  const [fname,setFname] =  React.useState("");
  const [lname,setLname] =  React.useState("");
  const [email,setEmail] =  React.useState("");
  const [pass,setPass] =  React.useState("");
  const [response,setResponse] = React.useState({});
  const handleClick = async () => {
    const user={
      email:email,
      password:pass
    }
    const response = await axios.post("https://reqres.in/api/register",user).then((response) => {
      setResponse(response);
    }).catch(err=>{
      console.log(err);
    });
  };

  return (
    <div className="fn">
      <div className="titl">
        <h1>VB</h1>
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="cont shwd">
          <small className="smallTitle">SIGN UP</small>
          <h2 className="title mt-4">Create your account</h2>
          <small className="st">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </small>
          <div class="but">
            <GoogleLogin
              clientId="164453527576-3rbr1lf02kg1q051n20sf6ea8sd0b4di.apps.googleusercontent.com"
              buttonText="Login with Google"
            />
            <FacebookLogin
              appId="3117997044992982"
              fields="name,email,picture"
              cssClass="btnFacebook"
              icon="fa-facebook"
              textButton="&nbsp;&nbsp;Login with Facebook"
            />
          </div>
          <hr className="le" />
          <p className="or mt-3">or</p>
          <hr className="le" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <input
              className="input-group-prepend inp"
              type="text"
              placeholder="First Name"
              onChange={(e)=>setFname(e.target.value)}
            ></input>
            <br />
            <input
              className="input-group-prepend inp"
              type="text"
              placeholder="Last Name"
              onChange={(e)=>setLname(e.target.value)}
            ></input>
            <br />
            <input
              className="input-group-prepend inp"
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <br />
            <input
              className="input-group-prepend inp"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPass(e.target.value)}
            ></input>
            <br />
            <small className="txt">
              By clicking Sign Up you, agree to our{" "}
              <small className="bl">Terms of Use</small> and our{" "}
              <small className="bl">Privacy Policy</small>
            </small>
            <br />
            <button className="mt-3 butt btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;