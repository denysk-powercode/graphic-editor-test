import React, { useState } from 'react';
import { func, object, array } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import { modifyPathColor } from '../../../store/editor/actions';
import { modifyElement } from '../../../store/canvas/actions';
import { selectActiveElement } from '../../../store/editor/selectors';

const SVGColorsPicker = ({ pathColors, modifyPathColor, modifyElement, activeElement }) => {
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [color, setCurrentColor] = useState('#fff');
  const [index, setCurrentIndex] = useState(null);
  const parseSVG = async (index, color) => {
    if (activeElement && activeElement.type === 'image') {
      const resp = await fetch(activeElement.url);
      const text = await resp.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'image/svg+xml');
      const paths = doc.querySelectorAll('path');
      paths[index].setAttribute('fill', color);
      const serialized = new XMLSerializer().serializeToString(doc);
      const blob = new Blob([serialized], { type: 'image/svg+xml' });
      const objUrl = URL.createObjectURL(blob);
      modifyElement(activeElement.id, { url: objUrl });
    }
  };
  const onColorPick = (data) => {
    setCurrentColor(data.hex);
    modifyPathColor(index, data.hex);
    parseSVG(index, data.hex);
    setCurrentIndex(null);
    setPickerVisibility(false);
  };
  const onColorClick = (i, color) => {
    setPickerVisibility(false);
    setCurrentIndex(i);
    setCurrentColor(color);
    setPickerVisibility(true);
  };
  return (
    <Container visible={pathColors.length}>
      {isPickerVisible && <StyledSketchPicker color={color} onChangeComplete={onColorPick} />}
      {pathColors.map((col, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ColoredDiv key={`${col}${i}`} color={col} onClick={() => onColorClick(i, col)} />
      ))}
    </Container>
  );
};

SVGColorsPicker.propTypes = {
  pathColors: array.isRequired,
  modifyPathColor: func.isRequired,
  modifyElement: func.isRequired,
  activeElement: object,
};
SVGColorsPicker.defaultProps = {
  activeElement: null,
};

const Container = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
`;

const StyledSketchPicker = styled(SketchPicker)`
  position: absolute;
  z-index: 5;
`;

const ColoredDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

const mapStateToProps = (state) => ({
  pathColors: state.editor.pathColors,
  activeElement: selectActiveElement(state),
});

const mapDispatchToProps = { modifyPathColor, modifyElement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SVGColorsPicker);
