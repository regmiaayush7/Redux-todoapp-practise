import { combineReducers } from 'redux';
import Todoreducer from './appreducer/reducer'

export default combineReducers({
    mainreducer: Todoreducer
});