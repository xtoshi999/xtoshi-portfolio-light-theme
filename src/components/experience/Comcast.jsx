const Comcast = () => {
    return (
      <>
        <div className="experience comcast">
          <p className="experience-role">Full Stack Developer</p>
          <p className="experience-company"></p>
          <div className="experience-description">
            <ul>
              <li>
              Built scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
              </li>
              <li>
                Engineered, maintained, and delivered over 10 high-impact features, enhancing the workflow for 
                hundreds of network engineers managing a network of 300,000 devices
              </li>
              <li>
              Designed REST and WebSocket APIs for real-time data processing.
              </li>
              <li>
              Collaborated with cross-functional teams to deliver SaaS products for financial clients.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-toolkit-container">
          <div className="experience-toolkit">
            <img src="/toolkit-logos/node.png" alt="node logo" />
            <img src="/toolkit-logos/express.png" alt="express logo" />
            <img src="/toolkit-logos/react.png" alt="react logo" />
            <img src="/toolkit-logos/typescript.png" alt="typescript logo" />
          </div>
        </div>
      </>
    );
  };
  
  export default Comcast;
  