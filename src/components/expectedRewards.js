import { useSelector } from "react-redux";
import { convertData } from "../utils"; 

function ExpectedRewards() {
  const response = useSelector((state) => state.data.makers_statistics);
  const data = response ? convertData(response, 'expected_reward') : null;

  console.log(data);

  return (
    <>
      
    </>
  )
}

export default ExpectedRewards;