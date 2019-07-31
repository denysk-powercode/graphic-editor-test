/* eslint-disable no-param-reassign,no-unused-vars */
import { isMobile } from 'react-device-detect';

import * as actions from './actions';
import handleActions from '../immerHandleActions';

const canvasWidth = isMobile ? process.env.REACT_APP_MOBILE_CANVAS_WIDTH : process.env.REACT_APP_CANVAS_WIDTH;
const canvasHeight = isMobile ? process.env.REACT_APP_MOBILE_CANVAS_HEIGHT : process.env.REACT_APP_CANVAS_HEIGHT;
const initialState = {
  background: {
    type: 'color',
    color: '#FF2E2E',
    imageURL: null,
    gradient: {
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: canvasWidth, y: canvasHeight },
      fillLinearGradientColorStops: [0, '#FF2E2E', 1, '#FF2E2E'],
    },
  },
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
      draft.background.color = color;
      draft.background.type = 'color';
      draft.background.imageURL = null;
      draft.background.gradient.fillLinearGradientColorStops = [0, color, 1, color];
      draft.filter = '';
    },
    [actions.changeGradientColorStops]: (draft, { payload: { colorStops } }) => {
      draft.background.type = 'gradient';
      draft.background.imageURL = null;
      draft.background.gradient.fillLinearGradientColorStops = colorStops;
      draft.filter = '';
    },
    [actions.addElement]: (draft, { payload: { elObject } }) => {
      draft.elements.push(elObject);
    },
    [actions.modifyElement]: (draft, { payload: { id, newAttrs } }) => {
      draft.elements = draft.elements.map((item) => (item.id === id ? { ...item, ...newAttrs } : item));
    },
    [actions.setBgImage]: (draft, { payload: { imgURL } }) => {
      draft.background.imageURL = imgURL;
      draft.background.type = 'imageURL';
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
