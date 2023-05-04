import { Tooltip } from "react-tooltip";
import ExpectedRewards from "./data/expectedRewards";
import RewardShare from "./data/rewardShare";
import MakerFee from "./data/makerFee";
import MarketUptime from "./data/marketUptime";
import SumQScore from "./data/sumQscore";
import QScore from "./data/qScore";

function BottomDashboard({ interval }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
      <ExpectedRewards interval={interval} />
      <RewardShare interval={interval} />
      <MakerFee interval={interval} />
      <MarketUptime interval={interval} />
      <QScore interval={interval} />
      <SumQScore interval={interval} />
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