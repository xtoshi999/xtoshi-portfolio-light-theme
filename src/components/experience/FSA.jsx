const FSA = () => {
  return (
    <>
      <div className="experience fsa">
        {/* <p className="experience-role"></p> */}
        <p className="experience-company-fsa">Trading Systems Engineer</p>
        <p className="experience-company"></p>
        <div className="experience-description">
          <ul>
            <li>
            Developed high-frequency trading bots in Python, integrating with Binance and Coinbase APIs.
            </li>
            <li>
            Implemented backtesting frameworks using Pandas, NumPy, and Backtrader to optimize strategies.
            </li>
            <li>
            Automated arbitrage and market-making strategies across centralized and decentralized exchanges.
            </li>
            <li>
            Delivered trading bots that processed over $1.2M in simulated trades with zero downtime.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/python.png" alt="python logo" />
          <img src="/toolkit-logos/tradingview.png" alt="tradingview logo" />
          <img src="/toolkit-logos/arbitrage.jpg" alt="arbitrage logo" />
          <img src="/toolkit-logos/sniper.jpg" alt="sniper logo" />
        </div>
      </div>
    </>
  );
};

export default FSA;
