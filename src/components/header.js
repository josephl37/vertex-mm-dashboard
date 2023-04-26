function Header() {
  // TODO: set state for Market and Interval dropdown
  // TODO: fetchData given market and interval state
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white text-2xl font-bold">Vertex MM Rewards</p>
        <p className="text-gray-1">
          Details about MM Program can be found{" "}
          <a
            href="https://vertex-protocol.gitbook.io/docs/community-token-and-dao/trading-rewards"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium hover:text-white"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="flex gap-4">
        <div>
          <label htmlFor="market" className="block mb-1 font-medium text-gray-1">
            Market
          </label>
          <select
            id="market"
            className="bg-gray-3 border border-gray-2 text-gray-1 text-sm rounded block w-full p-2"
          >
            <option value="1">BTC-Spot</option>
            <option value="2">BTC-Perp</option>
            <option value="3">ETH-Spot</option>
            <option value="4">ETH-Perp</option>
          </select>
        </div>
        <div>
          <label htmlFor="interval" className="block mb-1 font-medium text-gray-1">
            Interval
          </label>
          <select
            id="interval"
            className="bg-gray-3 border border-gray-2 text-gray-1 text-sm rounded block w-full p-2"
          >
            <option value="900">Past 15 Minutes</option>
            <option value="3600">Past 1 Hour</option>
            <option value="14400">Past 4 Hours</option>
            <option value="86400">Past 1 Day</option>
            <option value="172800">Past 2 Days</option>
            <option value="604800">Past 1 Week</option>
            <option value="2630000">Past 1 Month</option>
            <option value="7890000">Past 3 Months</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
