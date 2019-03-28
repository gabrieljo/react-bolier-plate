import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";

const initialState = Map({});

export default handleActions({}, initialState);
