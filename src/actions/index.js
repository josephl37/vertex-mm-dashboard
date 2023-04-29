import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";

const base = "https://test.vertexprotocol-backend.com";

export function fetchData(market, interval) {
  return dispatch => {
    axios.post(`${base}/indexer`, {
      maker_statistics: {
        epoch: 2,
        product_id: market,
        interval: interval
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        dispatch({
          type: FETCH_DATA,
          payload: response.data
        });
      })
  };
}
