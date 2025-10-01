import { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="projects-page-container">
      <div className="projects-filter-tabs">
        <button
          className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-tab ${activeFilter === "fs" ? "active" : ""}`}
          onClick={() => handleFilterChange("fs")}
        >
          Full Stack
        </button>
        <button
          className={`filter-tab ${activeFilter === "web3" ? "active" : ""}`}
          onClick={() => handleFilterChange("web3")}
        >
          Blockchain
        </button>
        <button
          className={`filter-tab ${activeFilter === "trading" ? "active" : ""}`}
          onClick={() => handleFilterChange("trading")}
        >
          Trading
        </button>
      </div>
      <div id="project" className="projects-container">
        <div data-category="web3" className={`project ${activeFilter === "all" || activeFilter === "web3" ? "" : "hidden"}`}>
          <div className="project-img">
            <a 
              href="https://degentaxi.io"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img src="/projects/Degen Tax.png" alt="Degen Tax"/>                     
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Blockchain Developer</h2>
            <p>
            Degen Taxi proves the odds are as advertised and the rolls are predetermined and cannot react to how players bet.
            </p>
            <div className="project-tools">
              <p>Unity</p>
              <p>React.js</p>
              <p>Solana</p>
              <p>Node.js</p>
              <p>Rust</p>
            </div>
            <div className="project-btns">
              <a
                href="https://degentaxi.io"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className={`project ${activeFilter === "all" || activeFilter === "web3" ? "" : "hidden"}`} data-category="web3" >
          <div className="project-img">
            <a
              href="https://littlepepe.com/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/LILPEPE.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FS Web3 Developer</h2>
            <p>
            Little Pepe is a Layer 2 blockchain engineered for speed, security, ultra-low fees—and powered by memes.
            </p>
            <div className="project-tools">
              <p>Web3.js</p>
              <p>TypeScript</p>
              <p>Ethereum</p>
              <p>MongoDB</p>
            </div>
            <div className="project-btns">
              <a
                href="https://alibi-esports.onrender.com/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://wedance.vip"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/wedance.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FullStack Developer</h2>
            <p>
            WeDance is a vibrant, international dance community for connecting dancers, discovering events, and a supportive, welcoming family.
            </p>
            <div className="project-tools">
              <p>Nuxt.js</p>
              <p>Express.js</p>
              <p>TailwindCSS</p>
              <p>PostgreSQL</p>
            </div>
            <div className="project-btns">
              <a
                href="https://wedance.vip/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/virtual-companion-platform"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Virtual Companion Platform.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FullStack Developer</h2>
            <p>
            AI-powered platform for creating and interacting with customizable virtual companions, featuring conversational AI, real-time voice synthesis, and AI-generated imagery. 
            </p>
            <div className="project-tools">
              <p>Python</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Swift</p>
              <p>Kottlin</p>
            </div>
            <div className="project-btns">
              <a
                href="https://alibi-esports.onrender.com/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "web3" ? "" : "hidden"}`} 
          data-category="web3" >
          <div className="project-img">
            <a
              href="https://justshift.io"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Justshift.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Blockchain Developer</h2>
            <p>
            This DEX platform offers a decentralized and secure way to trade cryptocurrencies while providing users with a range of features that enhance their trading experience.
            </p>
            <div className="project-tools">
              <p>React.js</p>
              <p>Node.js</p>
              <p>Bitcoin</p>
              <p>Swap</p>
            </div>
            <div className="project-btns">
              <a
                href="https://alibi-esports.onrender.com/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>


        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/food-inventory"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Food inventory.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FullStack Developer</h2>
            <p>
            A versatile app designed to help users manage their food inventory while also assisting food-insecure individuals in locating nearby free food resources.
            </p>
            <div className="project-tools">
              <p>JavaScript</p>
              <p>Java</p>
              <p>Flutter</p>
              <p>Python</p>
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/xtoshi999/food-inventory"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://storyfile.com"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/storyfile.png"
                alt="story landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">AI Agent Developer</h2>
            <p>
            StoryFile is an AI-powered video platform that allows users to create and train conversational AI interactions, making AI conversations feel more human.
            </p>
            <div className="project-tools">
              <p>Python</p>
              <p>JavaScript</p>
              <p>Next.js</p>
              <p>ML</p>
            </div>
            <div className="project-btns">
              <a
                href="https://storyfile.com"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "web3" ? "" : "hidden"}`} 
          data-category="web3" >
          <div className="project-img">
            <a
              href="https://vegas.fun/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/vegas.png"
                alt="story landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Web3 Developer</h2>
            <p>
            Vegas Fun brings the fun and excitement of Las Vegas anywhere in the world! Play exciting, free, premium slots on your mobile phone or tablet 
            </p>
            <div className="project-tools">
              <p>Web3.js</p>
              <p>Node.js</p>
              <p>Next.js</p>
              <p>Solidity</p>
            </div>
            <div className="project-btns">
              <a
                href="https://vegas.fun/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/health-monitoring"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Health Monitoring.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FullStack Developer</h2>
            <p>
            A comprehensive health monitoring app that enables users to track vital signs, medication schedules, and wellness activities.
            </p>
            <div className="project-tools">
              <p>JavaScript</p>
              <p>React Native</p>
              <p>Node.js</p>
              <p>MongoDB</p>
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/xtoshi999/health-monitoring"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div 
          className={`project ${activeFilter === "all" || activeFilter === "web3" ? "" : "hidden"}`} 
          data-category="web3" >
          <div className="project-img">
            <a
              href="https://puffdognft.vercel.app/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/puff.png"
                alt="story landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Web3 Developer</h2>
            <p>
            PUFF DOG ("PUFF") is a meme-driven cryptocurrency built on the Solanablockchain, integrating NFTs and gaming tocreate an engaging ecosystem for the PUFF community.
            </p>
            <div className="project-tools">
              <p>Web3.js</p>
              <p>Rust</p>
              <p>Node.js</p>
              <p>React.js</p>
            </div>
            <div className="project-btns">
              <a
                href="https://puffdognft.vercel.app/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div  
          className={`project ${activeFilter === "all" || activeFilter === "trading" ? "" : "hidden"}`} 
          data-category="trading" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/solana-arbitrage-bot"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/arbitrage.jpg"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Trading Bot Developer</h2>
            <p>
            Profitable Solana Arbitrage Trading bot running on DEXes like Raydium AMM, Raydium CMM, Pump.fun Meteora and so on.
            </p>
            <div className="project-tools">
              <p>Solana</p>
              <p>Web3.js</p>
              <p>TypeScript</p>
              <p>Jito</p>
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/xtoshi999/solana-arbitrage-bot"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div 
          className={`project ${activeFilter === "all" || activeFilter === "fs" ? "" : "hidden"}`} 
          data-category="fs" >
          <div className="project-img">
            <a
              href="https://www.24northhotel.com"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/work1.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">FullStack Developer</h2>
            <p>
            A resort with a pool party paradise, tiki cocktails, poolside cabanas, island-inspired food, and a social club with lawn games and karaoke.
            </p>
            <div className="project-tools">
              <p>Angular.js</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>Bootstrap</p>
            </div>
            <div className="project-btns">
              <a
                href="https://www.24northhotel.com"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div 
          className={`project ${activeFilter === "all" || activeFilter === "trading" ? "" : "hidden"}`} 
          data-category="trading" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/pumpfun-bot-telegram"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/pumpfunbot.jpg"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Trading Bot Developer</h2>
            <p>
            Solana volume booster running on PumpSwap, Raydium CLMM & CPMM, Meteora DLMM & Dynamic AMM.
            </p>
            <div className="project-tools">
              <p>Crypto Trading</p>
              <p>Solana</p>
              <p>TypeScript</p>
              <p>Telegram</p>
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/xtoshi999/pumpfun-bot-telegram"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div 
          className={`project ${activeFilter === "all" || activeFilter === "trading" ? "" : "hidden"}`} 
          data-category="trading" >
          <div className="project-img">
            <a
              href="#"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Buyzone.png"
                alt="TradingView"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Trading Bot Developer</h2>
            <p>
            This ETH/USDT 4H setup plans a long entry at $2,100–$2,200 (A–B–C correction), targeting $3,000 with a $1,900 stop. It offers a ~4:1 R:R, backed by structure, support zones, and volume confirmation.
            </p>
            <div className="project-tools">
              <p>Ethereum</p>
              <p>Trading Strategy</p>
              <p>Crypto Trading</p>
            </div>
            <div className="project-btns">
              <a
                href="#"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`project ${activeFilter === "all" || activeFilter === "trading" ? "" : "hidden"}`} 
          data-category="trading" >
          <div className="project-img">
            <a
              href="https://wowswap.io"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/Wowswap.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Trading Developer</h2>
            <p>
            WOWswap is a decentralized leveraged trading protocol providing the best token rates for traders and maximizing returns for liquidity providers, in one platform
            </p>
            <div className="project-tools">
              <p>Crypto Trading</p>
              <p>Web3.js</p>
              <p>Solana</p>
              <p>React.js</p>
            </div>
            <div className="project-btns">
              <a
                href="https://wowswap.io/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className={`project ${activeFilter === "all" || activeFilter === "trading" ? "" : "hidden"}`} 
          data-category="trading" >
          <div className="project-img">
            <a
              href="https://github.com/xtoshi999/copy-trading-bot-telegram"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/copytrading.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Trading Bot Developer</h2>
            <p>
            Copy trading bot runnig on Raydium and Pump.fun.
            </p>
            <div className="project-tools">
              <p>Crypto Trading</p>
              <p>Solana</p>
              <p>TypeScript</p>
              <p>Telegram</p>
            </div>
            <div className="project-btns">
              <a
                href="https://github.com/xtoshi999/copy-trading-bot-telegram"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="project" data-category="web3" style={{ display: activeFilter === "all" || activeFilter === "web3" ? "flex" : "none" }}>
          <div className="project-img">
            <a
              href="https://tweet2earn.xyz"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/T2E-Dapp.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Web3 Developer</h2>
            <p>
            Tweet to Earn Platform. The vision of the project is to allow users to earn $ELMNT token by tweeting once per day for the public and twice for token holders.
            </p>
            <div className="project-tools">
              <p>Wbe3.js</p>
              <p>Next.js</p>
              <p>Solana</p>
              <p>Twitter API</p>
            </div>
            <div className="project-btns">
              <a
                href="https://tweet2earn.xyz/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="project" data-category="web3" style={{ display: activeFilter === "all" || activeFilter === "web3" ? "flex" : "none" }}>
          <div className="project-img">
            <a
              href="https://lootboxes.vercel.app/"
              target="_blank"
              rel="noopen noreferrer"
            >
              <img
                src="/projects/lootbox.png"
                alt="peak performance landing page"
              />
            </a>
          </div>
          <div className="project-info">
            <h2 className="project-title">Smart contract Web3 Developer</h2>
            <p>
            This project is an innovative gaming project built on the Solana blockchain network.
            </p>
            <div className="project-tools">
              <p>Wbe3.js</p>
              <p>Next.js</p>
              <p>Solana</p>
              <p>Twitter API</p>
            </div>
            <div className="project-btns">
              <a
                href="https://lootboxes.vercel.app/"
                target="_blank"
                rel="noopen noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Projects;
