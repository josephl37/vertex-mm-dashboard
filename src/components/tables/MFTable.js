import numeral from "numeral";

function MFTable({ lastData, colors }) {
  return (
    <div className="px-4">
      <div className="flex justify-between text-gray-1 font-medium">
        <p>Address</p>
        <p>Value</p>
      </div>
      <div className="h-42 overflow-y-auto">
        {lastData &&
          Object.entries(lastData).map(([address, value], index) => (
            <div
              key={address}
              className="text-gray-1 flex justify-between mt-1"
            >
              <div className="flex">
                <div
                  className="w-4 h-4 mt-1 mr-2"
                  style={{
                    backgroundColor: colors[index % colors.length],
                  }}
                />
                <p>{address}</p>
              </div>
              <p>{numeral(value).format("0.00%")}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MFTable;
