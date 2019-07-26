import React, { useState } from 'react';
import { func, object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import { modifyElement } from '../../../store/canvas/actions';
import { selectActiveElement } from '../../../store/editor/selectors';

const TextTools = ({ modifyElement, activeElement }) => {
  const [fontSize, setFontSize] = useState(activeElement.fontSize);
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const onFontSizeChange = (e) => {
    setFontSize(e.target.value);
    modifyElement(activeElement.id, { fontSize: Number(e.target.value) });
  };
  const rotateRight = () => {
    const newValue = activeElement.rotation + 45;
    const value = newValue > 360 ? newValue - 360 : newValue;
    modifyElement(activeElement.id, { rotation: value });
  };
  const rotateLeft = () => {
    const newValue = activeElement.rotation - 45;
    const value = newValue < 360 ? newValue + 360 : newValue;
    modifyElement(activeElement.id, { rotation: value });
  };
  const onColorPick = (data) => {
    modifyElement(activeElement.id, { fill: data.hex });
    setPickerVisibility(false);
  };
  const onBoldClick = () => {
    const fontStyle = activeElement.fontStyle === 'normal' ? 'bold' : 'normal';
    modifyElement(activeElement.id, { fontStyle });
  };
  const onItalicClick = () => {
    const fontStyle = activeElement.fontStyle === 'normal' ? 'italic' : 'normal';
    modifyElement(activeElement.id, { fontStyle });
  };
  const onAlignmentChange = (e) => {
    modifyElement(activeElement.id, { align: e.target.value });
  };
  return (
    <Container>
      {isPickerVisible && <StyledSketchPicker color={activeElement.fill} onChangeComplete={onColorPick} />}
      <select name="align" id="align" onChange={onAlignmentChange} value={activeElement.align}>
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
      <button type="button" onClick={onBoldClick}>
        Bold
      </button>
      <button type="button" onClick={onItalicClick}>
        Italic
      </button>
      <button type="button" onClick={rotateLeft}>
        Rotate -45
      </button>
      <button type="button" onClick={rotateRight}>
        Rotate +45
      </button>
      <input type="number" value={fontSize} onChange={onFontSizeChange} max={50} min={1} step={1} />
      <ColorBtn clr={activeElement.fill} onClick={() => setPickerVisibility(true)} />
    </Container>
  );
};

TextTools.propTypes = {
  modifyElement: func.isRequired,
  activeElement: object.isRequired,
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
`;

const StyledSketchPicker = styled(SketchPicker)`
  position: absolute;
  z-index: 5;
`;

const ColorBtn = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.clr};
  margin-left: 15px;
  border: 1px solid #000;
`;

const mapStateToProps = (state) => ({
  activeElement: selectActiveElement(state),
});

const mapDispatchToProps = { modifyElement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextTools);
