export function convertData(response, key) {
  let convertedData = [];

  response.forEach(obj => {
    let address = obj.address;

    obj.data.forEach(dataObj => {
      let timestamp = dataObj.timestamp;
      let value = dataObj[key];

      if (!convertedData.some(item => item.timestamp === timestamp)) {
        let newTimestampObj = {timestamp};
        newTimestampObj[address] = value;
        convertedData.push(newTimestampObj);
      } else {
        convertedData.forEach(item => {
          if (item.timestamp === timestamp) {
            item[address] = value;
          }
        });
      }
    });
  });

  return convertedData;
}