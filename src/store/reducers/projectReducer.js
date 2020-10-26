const initState = {
  projects: [
    { id: '1', title: 'Help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'Collect all stars', content: 'blah blah blah' },
    { id: '3', title: 'Egg hunt with youshi', content: 'blah blah blah' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('create project errr', action.error);
      return state;

    default:
      return state;
  }
};
export default projectReducer;



