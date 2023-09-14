import superagent from 'superagent';
const api="https://auth-api-akmm.onrender.com/api/v1/product"
export const category = (name) => {
    return {
      type: "PICK",
      payload: name,
    };
  };

export const addItem = (item) => {
    return {
      type: "ADD",
      payload: item,
    };
  };
  export const removeItem = (item) => {
    return {
      type: "REMOVE",
      payload: item,
    };
  };

  const getAction = (payload) => {
      return {
          type: 'GET',
          payload: payload
      }
  }
  export const getRemoteData = () => (dispatch) => {
      return superagent.get(api)
          .then((data) => {
              dispatch(getAction(data.body))
          })
  }








// export const getRemoteData = () => (dispatch) => {
//     return superagent.get(api)
//         .then((data) => {
//             dispatch(getAction(data.body))
//         })
// }