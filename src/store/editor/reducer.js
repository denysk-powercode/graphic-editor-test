/* eslint-disable no-param-reassign,no-unused-vars */
import * as actions from './actions';
import handleActions from '../immerHandleActions';
import * as canvasActions from '../canvas/actions';

const initialState = {
  activeElementId: null,
  isEditing: false,
  isCropping: false,
  isSelectionActive: false,
  pathColors: [],
};

const editorReducer = handleActions(
  {
    [actions.setActiveElementId]: (draft, { payload: { id } }) => {
      draft.activeElementId = id;
    },
    [actions.setEditingStatus]: (draft, { payload: { status } }) => {
      draft.isEditing = status;
    },
    [canvasActions.deleteElement]: (draft, { payload: { id } }) => {
      draft.activeElementId = null;
      draft.isEditing = false;
    },
    [canvasActions.addElement]: (draft, { payload: { id } }) => {
      draft.activeElementId = null;
      draft.isEditing = false;
    },
    [actions.setPathColors]: (draft, { payload: { colors } }) => {
      draft.pathColors = colors;
    },
    [actions.startCrop]: (draft) => {
      draft.isCropping = true;
    },
    [actions.startSelection]: (draft) => {
      draft.isSelectionActive = true;
    },
    [actions.endSelection]: (draft) => {
      draft.isSelectionActive = false;
    },
    [actions.modifyPathColor]: (draft, { payload: { i, color } }) => {
      draft.pathColors[i] = color;
    },
  },
  initialState
);

export default editorReducer;
