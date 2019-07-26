import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import undoable, { includeAction } from 'redux-undo';
import createHistory from './history';
import app from './app/reducer';
import user from './user/reducer';
import editor from './editor/reducer';
import canvas from './canvas/reducer';

import { actionTypes } from './canvas/actions';

const history = createHistory();
const rootReducer = combineReducers({
  app,
  user,
  editor,
  canvas: undoable(canvas, {
    limit: 20,
    undoType: 'CANVAS_UNDO',
    redoType: 'CANVAS_REDO',
    filter: includeAction([...Object.values(actionTypes)]),
  }),
  router: connectRouter(history),
});

export default rootReducer;
