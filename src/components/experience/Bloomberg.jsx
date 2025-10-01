const Bloomberg = () => {
  return (
    <>
      <div className="experience bloomberg">
        <p className="experience-role">Web3 & Blockchain Engineer</p>
        <p className="experience-company"></p>
        <div className="experience-description">
          <ul>
            <li>
            Built and deployed smart contracts on Ethereum and Solana using Solidity and Rust.
            </li>
            <li>
            Developed cross-chain dApps with wallet integrations (Metamask, Phantom) and Web3.js/Ethers.js.
            </li>
            <li>
            Created DeFi automation tools, NFT marketplaces, and custom trading bots for clients.
            </li>
            <li>
            Helped launch three tokenized projects that attracted thousands of users.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/Rust.png" alt="Rust logo" />
          <img src="/toolkit-logos/solana.png" alt="Solana logo" />
          <img src="/toolkit-logos/Web3.jpg" alt="Web3 logo"></img>
          <img src="/toolkit-logos/bitcoin.jpg" alt="Bitcoin logo" />
        </div>
      </div>
    </>
  );
};

export default Bloomberg;
