import React ,{useState} from 'react';
import "./Feedback.css";
import {FaGithub, FaLinkedin, FaTwitter,} from "react-icons/fa";
import Axios from "axios";

const Feedback = () => {

  const[listOfFeedback, setListOfFeedback] = useState([]);
  const[name, setName] = useState("");
  const[text, setText] = useState("");
  const[thanks, setThanks] = useState("");

  const send = () => {
    Axios.post("https://nutrition-jungle.herokuapp.com/post", {name,text})
    .then(() => {
      setListOfFeedback([...listOfFeedback,{name,text}])
    })
    .catch(Error);
  };

  return (
    <div className='box'>
      <div className='feedback'>
        <h1>Feedback</h1>
        <p>{thanks}</p>
        <input type="text"placeholder='Name' onChange={(event) => setName(event.target.value)}></input>
        <input type="text" placeholder='Feedback..'  onChange={(event) => setText(event.target.value)}></input>
        <button onClick={send => setThanks(<p>Thank you for your feedback</p>)}>Send</button>
      </div>
      <div className='contact'>
        <a href='https://github.com/Likhithkp?tab=repositories'>More projects @ <FaGithub/></a>
        <a href='https://twitter.com/likkp09'>Contact me @<FaTwitter/></a>
        <a href='https://www.linkedin.com/in/likhithkp09/'> Contact me @<FaLinkedin/></a>
      </div>
    </div>
  )
}

export default Feedback;