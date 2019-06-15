

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
       dispatch({ type: "CREATE_PROJECT", project})

    }
}