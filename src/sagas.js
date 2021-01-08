import { all, put, call } from "redux-saga/effects";

export function* helloSaga(index){
    yield index;
    console.log('hello')
    yield index+1;
}

export function* increment(){
    yield put({type: 'INCREASE'});
}

export default function* sagas(){
    yield all([
        call(increment)
    ]);
}