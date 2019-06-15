const initState = {
    projects: [
        {id: '1', title: 'Testing', content: 'lah blah blah'},
        {id: '2', title: 'More Testing', content: 'lah blah blah'},
        {id: '3', title: 'Still Testing', content: 'lah blah blah'}
    ]
}


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
        console.log(action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log(action.err)
        return state;
        default:
        return state
    }
}




export default projectReducer