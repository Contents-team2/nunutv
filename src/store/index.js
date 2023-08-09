

const redux = require('redux');
//변형하는 사람 Reducer 즉상태를 변경함
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "decrement") {
        return { counter: state.counter - 1 }
    }
    return state;
}
//이 스토어는 리덕스 스토어로 만든것이고 (counterReducer) 로 상태를 변경합니다.
const store = redux.createStore(counterReducer);