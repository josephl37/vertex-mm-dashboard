import { Tooltip } from "react-tooltip";
import infoSvg from "../public/information-circle.svg";
import ExpectedRewards from "./charts/expectedRewards";
import RewardShare from "./charts/rewardShare";
import MakerFee from "./charts/makerFee";
import MarketUptime from "./charts/marketUptime";
import SumQScore from "./charts/sumQscore";
import QScore from "./charts/qScore";

function BottomDashboard({interval}) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">
            Expected Rewards per MM ($VRTX)
          </p>
          <img src={infoSvg} alt="info" 
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="The expected rewards ($VRTX)<br />per MM for each market in the<br />current epoch."
          />
        </div>
        <div className="h-96 w-full">
          <ExpectedRewards interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Reward Share for Market (%)</p>
          <img src={infoSvg} alt="info" 
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="Shows the relative Q-scores for each<br />MM for each market in the current epoch.<br />Each datapoint compares the cumulative<br />scores up to that point (from the start<br />of the epoch)."
          />
        </div>
        <div className="h-96 w-full">
          <RewardShare interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Maker Fee for Market (%)</p>
          <img src={infoSvg} alt="info" 
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="Shows the maker fee (%) of each MM<br />for each market in the current epoch."
          />
        </div>
        <div className="h-96 w-full">
          <MakerFee interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Uptime for Market (%)</p>
          <img src={infoSvg} alt="info"
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="The uptime of each MM for each<br />market in the current epoch."
          />
        </div>
        <div className="h-96 w-full">
          <MarketUptime interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Per-Minute Q Score</p>
          <img src={infoSvg} alt="info"
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="A representation of a MM’s two-sided<br/>quoting performance for each market<br />in the current epoch. The amount of<br />$VRTX earned by MMs is proportional<br />to their relative Q-score."
          />
        </div>
        <div className="h-96 w-full">
          <QScore interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Sum Q Score</p>
          <img src={infoSvg} alt="info"
          data-tooltip-id="chart-tooltip"
          data-tooltip-html="need definition"
          />
        </div>
        <div className="h-96 w-full">
          <SumQScore interval={interval}/>
        </div>
      </div>
      <Tooltip
        id="chart-tooltip"
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
export default BottomDashboard;