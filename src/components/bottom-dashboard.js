import infoSvg from "../public/information-circle.svg";
import ExpectedRewards from "./charts/expectedRewards";
import RewardShare from "./charts/rewardShare";
import MakerVolume from "./charts/makerVolume";
import MarketUptime from "./charts/marketUptime";
import QScore from "./charts/qScore";

function BottomDashboard({interval}) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">
            Expected Rewards per MM ($VRTX)
          </p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="h-96 w-full">
          <ExpectedRewards interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Reward Share for Market (%)</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="h-96 w-full">
          <RewardShare interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Maker Volume for Market (%)</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="h-96 w-full">
          <MakerVolume interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Uptime for Market (%)</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="h-96 w-full">
          <MarketUptime interval={interval}/>
        </div>
      </div>
      <div className="bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between my-2 mx-2">
          <p className="text-gray-1 font-medium">Per-Minute Q Score</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="h-96 w-full">
          <QScore interval={interval}/>
        </div>
      </div>
    </div>
  );
}
export default BottomDashboard;