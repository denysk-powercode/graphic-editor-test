/* eslint-disable no-param-reassign,no-unused-vars */
import * as actions from './actions';
import handleActions from '../immerHandleActions';

const initialState = {
  backgroundColor: '#FF2E2E',
  bgImageURL: null,
  filter: '',
  elements: [
    {
      id: 'sdasd',
      type: 'text',
      text: 'Test text',
      x: 0,
      y: 0,
      align: 'left',
      fontStyle: 'normal',
      // width: 125,
      // height: 30,
      fill: '#fff',
      fontSize: 30,
      rotation: 45,
      fontFamily: 'Arial',
    },
  ],
};

const canvasReducer = handleActions(
  {
    [actions.setBG]: (draft, { payload: { color } }) => {
      draft.backgroundColor = color;
      draft.bgImageURL = null;
      draft.filter = '';
    },
    [actions.addElement]: (draft, { payload: { elObject } }) => {
      draft.elements.push(elObject);
    },
    [actions.modifyElement]: (draft, { payload: { id, newAttrs } }) => {
      draft.elements = draft.elements.map((item) => (item.id === id ? { ...item, ...newAttrs } : item));
    },
    [actions.setBgImage]: (draft, { payload: { imgURL } }) => {
      draft.bgImageURL = imgURL;
      draft.filter = '';
    },
    [actions.deleteElement]: (draft, { payload: { id } }) => {
      draft.elements = draft.elements.filter((item) => item.id !== id);
    },
    [actions.setFilter]: (draft, { payload: { filter } }) => {
      draft.filter = filter;
    },
  },
  initialState
);

export default canvasReducer;
