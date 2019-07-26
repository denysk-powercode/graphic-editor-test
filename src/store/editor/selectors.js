/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const getElements = (state) => state.canvas.present.elements;
export const getSelectedElementId = (state) => state.editor.activeElementId;

export const selectActiveElement = createSelector(
  [getElements, getSelectedElementId],
  (elements, id) => {
    return elements.find((item) => item.id === id);
  }
);
