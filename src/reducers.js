export default function counter(state = {}, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        default:
            return state
    }
}