import axios from "axios";
import { getCurrentEpoch } from "../utils";
export const FETCH_DATA = "FETCH_DATA";
export const RESTRICT_USER = "RESTRICT_USER";

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
        dispatch({
          type: FETCH_DATA,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: RESTRICT_USER,
          payload: error
        });
      });  };
}
