import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";

const base = "http://localhost:4000";

export function fetchData() {
  return (dispatch) => {
    axios.get(`${base}/makers_statistics_response`).then((response) => {
      dispatch({
        type: FETCH_DATA,
        payload: response.data,
      });
    });
  };
}

/* Use for actual endpoint
export function fetchData(market, interval) {
  return dispatch => {
    axios.post(`${base}/indexer`, {
      makers_statistics: {
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
*/
