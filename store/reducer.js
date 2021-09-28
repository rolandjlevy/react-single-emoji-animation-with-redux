import { 
  PREV_EMOJI, 
  NEXT_EMOJI, 
  UPDATE_EMOJI, 
  SET_SLIDER_STATUS  
} from './actionTypes.js';

const initialState = {
  position: 0,
  sliderActive: false,
}

const limitStart = (n, limit) => (n === limit) ? limit : n - 1;
const limitEnd = (n, limit) => (n === limit) ? limit : n + 1;

 const emojiReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_EMOJI:
      return {
        ...state,
        position: limitStart(Number(state.position), 0)
      }
    case NEXT_EMOJI:
      return {
        ...state,
        position: limitEnd(Number(state.position), emoji.length-1)
      }
    case UPDATE_EMOJI:
      return {
        ...state,
        position: action.payload
      }
    case SET_SLIDER_STATUS:
      return {
        ...state,
        sliderActive: action.sliderActive
      }
    default: return state
  }
}

export default emojiReducer;