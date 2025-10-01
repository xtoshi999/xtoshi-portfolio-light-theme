import { useEffect, useState } from "react";
import "./Experience.css";
import Comcast from "../components/experience/Comcast";
import FSA from "../components/experience/FSA";
import Bloomberg from "../components/experience/Bloomberg";

const Experience = () => {
  const [comcast, setComcast] = useState(true);
  const [fsa, setFSA] = useState(false);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);

  const handleFSAClick = () => {
    setFSA(true);
    setComcast(false);
    setBloomberg(false);
    setSIG(false);
  };

  const handleBloombergClick = () => {
    setBloomberg(true);
    setComcast(false);
    setFSA(false);
    setSIG(false);
  };

  const handleSIGClick = () => {
    setSIG(true);
    setComcast(false);
    setFSA(false);
    setBloomberg(false);
  };
  
  const handleComcastClick = () => {
    setComcast(true);
    setSIG(false);
    setFSA(false);
    setBloomberg(false);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="experience-container">
      <p className="experience-header">Experience</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
          <div className="header-btns">
            <div className="header-btn header-btn1"></div>
            <div className="header-btn header-btn2"></div>
            <div className="header-btn header-btn3"></div>
          </div>
          <div className="header-text">
            <p>Learning Through Living</p>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-bg-text">
            <p>David-MB:Experience david-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                  onClick={handleComcastClick}
                  className="experience-terminal-btn terminal-btn1"
                >
                  Full Stack
              </button>
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                Trading
              </button>
              <button
                onClick={handleBloombergClick}
                className="experience-terminal-btn terminal-btn2"
              >
                 WEB3
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {comcast && <Comcast />}
              {fsa && <FSA />}
              {bloomberg && <Bloomberg />}
              {sig && <SIG />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
