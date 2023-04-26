import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { convertData } from "../utils";

function ExpectedRewards() {
  const response = useSelector((state) => state.data.makers_statistics);
  const data = response ? convertData(response, "expected_reward") : null;

  const keys = data
    ? Object.keys(data[0]).filter((k) => k !== "timestamp")
    : null;
  const colors = [
    "#4C289F",
    "#CDADEF",
    "#E4B50E",
    "#AF5067",
    "#CF96A4",
    "#53AC8C",
  ];
  
  if (data === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="timestamp"
              scale="auto"
              tickCount={4}
              tickFormatter={(t) =>
                new Intl.DateTimeFormat('en-US', {
                  minute: 'numeric',
                  hour: 'numeric'
                }).format(t)
              }
            />
            <YAxis tickFormatter={(c) => c.toString().replace(/000$/, "K")} />
            <Tooltip
            itemSorter={() => 1}
            />
            {keys.map((key, index) => (
              <Area
                key={key}
                dataKey={key}
                stackId="1"
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default ExpectedRewards;