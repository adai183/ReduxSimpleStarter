import {FETCH_LOCATIONS} from '../actions/index';

const INITIAL_STATE ={all: [], post: null};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATIONS :
      return {...sate, all: action.payload.data};

    default:
      return state;

  }
}
