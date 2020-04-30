import { combineReducers } from 'redux';
import photoReducer from './photo/reducers';

export default combineReducers({
   photo: photoReducer
});