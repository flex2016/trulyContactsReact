import {
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
    payload: id,
  });

  axiosInstance()
    .delete(`/contacts/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      console.log("res.status", err.status);
      dispatch({
        type: DELETE_CONTACT_ERROR,
        payload: err.response ? err.response.data : "could not connect",
      });
    });
};
