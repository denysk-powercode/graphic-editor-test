/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';

export const actionTypes = {
  setBg: 'EDITOR/SET_BG',
  addElement: 'EDITOR/ADD_ELEMENT',
  modifyElement: 'EDITOR/MODIFY_ELEMENT',
  setBgImage: 'EDITOR/SET_BG_IMAGE',
  deleteElement: 'EDITOR/DELETE_ELEMENT',
  setFilter: 'EDITOR/SET_FILTER',
};

export const setBG = createAction(actionTypes.setBg, (color) => ({ color }));
export const addElement = createAction(actionTypes.addElement, (elObject) => ({ elObject }));
export const modifyElement = createAction(actionTypes.modifyElement, (id, newAttrs) => ({ id, newAttrs }));
export const setBgImage = createAction(actionTypes.setBgImage, (imgURL) => ({ imgURL }));
export const deleteElement = createAction(actionTypes.deleteElement, (id) => ({ id }));
export const setFilter = createAction(actionTypes.setFilter, (filter) => ({ filter }));

export const undo = createAction('CANVAS_UNDO');
export const redo = createAction('CANVAS_REDO');
