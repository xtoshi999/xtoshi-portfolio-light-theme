import { useEffect } from "react";
import Toolkit from "../components/Toolkit";
import "./About.css";

const About = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div id="borderLeft">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_90_587)">
                <mask id="path-1-inside-1_90_587" fill="white">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0H180C191.046 0 200 8.95431 200 20V180C200 191.046 191.046 200 180 200H20C8.95431 200 0 191.046 0 180V20Z" />
                </mask>
                <path
                  d="M-14 20C-14 1.22232 1.22232 -14 20 -14H166C184.778 -14 200 1.22232 200 20C200 16.6863 191.046 14 180 14H20C16.6863 14 14 16.6863 14 20H-14ZM200 200H0H200ZM20 200C1.22232 200 -14 184.778 -14 166V20C-14 1.22232 1.22232 -14 20 -14V14C16.6863 14 14 16.6863 14 20V180C14 191.046 16.6863 200 20 200ZM200 0V200V0Z"
                  fill="url(#paint0_linear_90_587)"
                  mask="url(#path-1-inside-1_90_587)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_90_587"
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop className="primary-stop" stopColor="#F15025" />
                  <stop
                    className="secondary-stop"
                    offset="0.3125"
                    stopColor="#F18425"
                    stopOpacity="0.447917"
                  />
                  <stop
                    className="secondary-stop"
                    offset="0.473958"
                    stopColor="#F18425"
                    stopOpacity="0"
                  />
                  <stop
                    className="secondary-stop"
                    offset="1"
                    stopColor="#F18425"
                    stopOpacity="0"
                  />
                </linearGradient>
                <clipPath id="clip0_90_587">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="about-content">
            <h1>About Me</h1>
            <div className="about-text">
              <p>
                My name is David. 
                I'm a <span>curious</span> and{" "}
                <span>driven</span> Fullstack Web3 and automated Trading Engineer with a strong background in building decentralized applications and high-performance trading systems.<br></br>
                My past projects include smart contracts that cut gas fees by 25% and Trading automations that ran strategies on Ethereum and Solana with Zero downtime.
                <br></br>
                <br></br>
              </p>
              <p>
                I aspire to build perfect products that are not only <span>functional</span>{" "}
                but also <span>intuitive</span> and <span>impactful.</span> With experience in Full Stack, Web3, and Trading Automation,<br></br> I love bringing concepts to life in ways that enhance both perfomrance and user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="pfp-container">
          <div className="about-pfp">
            <div className="pfp-layer"></div>
          </div>
        </div>
      </div>
      {/* <p className="my-toolkit">My Toolkit</p> */}
      <a href="#toolkit" className="ca3-scroll-down-link ca3-scroll-down-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            className="down-chevron"
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
      <Toolkit />
    </>
  );
};

export default About;
