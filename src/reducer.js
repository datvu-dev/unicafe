const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}
  
const counterReducer = (state, action) => {
    let newState = {}

    if (state === undefined) {
        return initialState
    }

    if (action.type === 'reset') {
        return initialState
    }

    newState = {
        good: action.type === 'good' ? state.good + 1 : state.good,
        ok: action.type === 'ok' ? state.ok + 1 : state.ok,
        bad: action.type === 'bad' ? state.bad + 1 : state.bad
    }

    return newState
}
  
export default counterReducer 