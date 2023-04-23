import infoSvg from "../public/information-circle.svg";

function TopDashboard() {
  return (
    <div className="flex gap-4 mt-8 mx-4">
      <div className="w-1/3 bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Current Epoch</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">1</p>
        </div>
      </div>
      <div className="w-1/3 bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Reward Coefficient</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">3.13</p>
        </div>
      </div>
      <div className="w-1/3 bg-gray-3 border border-gray-2 rounded">
        <div className="flex justify-between mx-2 mt-2">
          <p className="text-gray-1 font-medium">Total MMs</p>
          <img src={infoSvg} alt="info" />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <p className="text-white text-6xl font-medium">12</p>
        </div>
      </div>
    </div>
  );
}

export default TopDashboard;
