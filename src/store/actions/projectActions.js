export const createProject = (project) => {
  return (dispatch, getState) => {
    //Async code
    dispatch({
      type: "CREATE_PROJECT",
      project,
    });
  };
};
