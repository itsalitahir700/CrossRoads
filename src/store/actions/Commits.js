import gitCall from "../../services/GitService";
export const getCommits = () => async (dispatch) => {
  dispatch({
    type: "TEST",
  });
  try {
    const resp = await gitCall();
    dispatch({
      type: "COMMIT_SUCCESS",
      payload: resp.data,
    });
    return resp.data;
  } catch (error) {
    dispatch({
      type: "COMMIT_ERROR",
      error,
    });
  }
};

export default getCommits;
