import React, { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import "./faq.scss";

const Faq = () => {
  const [display, setDisplay] = useState({});
  let [x, setx] = useState(true);
  const questions = [
    {
      id: "q1",
      question: "How to use project or send requests to any endpoint?",
      answer: "Copy the primary url of the project given inside project page. Then, choose the method you want to call, copy it's url and append it to primary url. Provide the body as per schema defined by you, and required headers and send request.",
    },
    {
      id: "q2",
      question: "What are privacy levels?",
      answer: "We have, currently, maximum 5 privacy levels per end point.\n\
        1) Private: Only you can access it.\n\
        2) Publlic: Anyone with url can access it.\n\
        3) Secured: You have to provide key as a query parameter(named 'key') to access it in required format. ('BASE_URL?key='KEY'))\n\
        4) Authentication: You have to provide auth token in header(named 'x-auth-token') to access it.\n\
        5) Both Auth and Secured: You have to provide both key and auth token\n\
      ",
    },
    {
      id: "q3",
      question: "How to use privacy levels?",
      answer: "Select any level you want from the dropdown of privacy levels that is given beside all methods of any project.",
    },
    {
      id: "q4",
      question: "How to use Sign in method in User Authentication Api of project?",
      answer: "You have to provide key in query parameter (if privacy level is secured) and/or authentication token in header (named 'x-auth-token') along with the correct body format as described by you in its schema.",
    },
    {
      id: "q5",
      question: "My project key got in unknown hands by mistake?",
      answer: "No worries, you can generate new key, that will invalidate all requests with old keys.",
    },
    {
      id: "q6",
      question: "What is API Auth or How to introduce User Authentication System in a project?",
      answer: "API Auth is a feature using which you can introduce or enable User Authentication system in your project with almost all flexibilities and freedom which is possible. You can enable/disable it by clicking ApiAuth button inside your desired project page.",
    },
    {
      id: "q7",
      question: "Can we use projects with our frontend application? How?",
      answer: "Yes! Call the required api using its provided endpoint with required body format designed by you, with appropriate query parameters, and headers from you front end application, and use the data/project however you want.",
    },
  ];
  
  var handleDisplay = (id) => {
    setx(!x);
    let newDisplay = display;
    
    newDisplay[id] = !newDisplay[id];
    console.log("id", newDisplay[id]);
    setDisplay(newDisplay);
  }
  useEffect(() => {
    
    var newDisplay = {};
    for(let i = 0; i < questions.length; i++){
      newDisplay[questions[i]['id']] = false;
    }
    setDisplay(newDisplay);
  }, []);

  return (
    <div className="faqs">
      <div className="head">FAQs</div>
      {questions.map((que) => (
        <div key={que.id} className="question">
          <div id={que.id} onClick={() => handleDisplay(que.id)} className="que">
            <div><b>Problem:</b> {que.question}</div>
            <div>{display[que.id] ? <Remove /> : <Add />}</div>
          </div>
          {display[que.id] && <div className="ans"><b>Solution:</b> {que.answer.split('\n').map(str => <p>{str}</p>)}</div>}
        </div>
      ))}
      
    </div>
  );
};

export default Faq;
