const initState = {
  projects: [
    { id: "1", title: "Title 1", content: "lorem ipsum text here" },
    { id: "2", title: "Title 2", content: "lorem ipsum text here" },
    { id: "3", title: "Title 3", content: "lorem ipsum text here" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error: ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
