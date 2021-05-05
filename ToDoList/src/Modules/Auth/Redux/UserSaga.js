import { fork, takeEvery, call, put, all } from "@redux-saga/core/effects";
import { setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from './UserRedux';
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../API/Firebase';


function* workerSignIn(action) {
    const {email, password} = action.payload;

    try {

        yield call(signIn, email, password);

        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));

    } catch (error) {
        console.log(error);
    } 
}

function* watchSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* signUpAndUpdateUser(email, password, displayName) {
    try {

        yield call(signUp, email, password);
        yield call(updateUser, displayName);

        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));

    } catch(error) {  
    }
}

function* workerSignUp(action) {

    const { email, password, displayName } = action.payload;

    try {

        yield call(signUpAndUpdateUser, email, password, displayName);

    } catch (error) {
        console.log(error);
    } 
}

function* watchSignUpRequest() {
    yield takeEvery(SIGN_UP_REQUEST, workerSignUp);
}

function* workerSignOut() {
    try {

        yield call(signOut);
        yield put(setUserAC(null));

    } catch (error) {
        console.log('ERROR', error);
    }
}

function* watchSignOutRequest() {
    yield takeEvery(SIGN_OUT_REQUEST, workerSignOut)
}

export const userSagas = [
    fork(watchSignUpRequest),
    fork(watchSignOutRequest),
    fork(watchSignInRequest),
];


