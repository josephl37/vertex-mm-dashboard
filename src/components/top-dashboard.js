import { Tooltip } from "react-tooltip";
import infoSvg from "../public/information-circle.svg";
import { useSelector } from "react-redux";
import { getCurrentEpoch } from "../utils";

function TopDashboard() {
  const data = useSelector((state) => state.data);

  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mt-8">
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Current Epoch</p>
          <img
            src={infoSvg}
            alt="info"
            data-tooltip-id="my-tooltip"
            data-tooltip-html="An epoch lasts for 28 days.<br />There are a total of 6 epochs<br />in the Vertex Trading Incentive<br/> Program (VTIP)."
          />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">{getCurrentEpoch()}</p>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Reward Coefficient</p>
          <img
            src={infoSvg}
            alt="info"
            data-tooltip-id="my-tooltip"
            data-tooltip-html="A dynamic, relative measure of how much<br /> $VRTX is earned for a constant level of<br />liquidity (a constant depth and spread). A<br />value of 1.00 is average. To mazimize<br />rewards per liquidity provided, one would<br />provide liquidity into the markets with the<br />highest reward coefficient."
          />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">
            {(data.reward_coefficient)?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Total MMs</p>
          <img
            src={infoSvg}
            alt="info"
            data-tooltip-id="my-tooltip"
            data-tooltip-html="The total number of market makers<br />for each market in the current epoch."
          />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">
            {data?.makers?.length}
          </p>
        </div>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "rgb(42, 42, 47)",
          color: "#A2A2A6",
          opacity: 1,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
        }}
        place="bottom"
      />
    </div>
  );
}

export default TopDashboard;
