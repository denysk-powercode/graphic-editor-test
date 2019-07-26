/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';

export const setActiveElementId = createAction('EDITOR/SET_ACTIVE_ELEMENT_ID', (id) => ({ id }));
export const setEditingStatus = createAction('EDITOR/SET_EDITING_STATUS', (status) => ({ status }));

export const setPathColors = createAction('EDITOR/SET_PATH_COLORS', (colors) => ({ colors }));
export const modifyPathColor = createAction('EDITOR/MODIFY_PATH_COLOR', (i, color) => ({ i, color }));
