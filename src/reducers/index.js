import { combineReducers } from 'redux';

import configdetails from './reducer_config';
import tvshowdetails from './reducer_tvshow';
import showcompletedetails from './reducer_tvshowdetails';

export default combineReducers({
    configdetails,
    tvshowdetails,
    showcompletedetails
  })