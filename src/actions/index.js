import axios from "axios";
import { getCurrentEpoch } from "../utils";
export const FETCH_DATA = "FETCH_DATA";

const base = "https://prod.vertexprotocol-backend.com";

export function fetchData(market, interval) {
  const epoch = getCurrentEpoch();
  return dispatch => {
    axios.post(`${base}/indexer`, {
      maker_statistics: {
        epoch: epoch,
        product_id: market,
        interval: interval
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        dispatch({
          type: FETCH_DATA,
          payload: response.data
        });
      })
  };
}
