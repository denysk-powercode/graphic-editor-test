import React, { useState, useRef } from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Tools = ({ setBg, bgColor, addText, addRect, addSvg, setBgImage, setFilter, activeFilter }) => {
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const fileInput = useRef(null);
  const onPick = (colorObj) => {
    setBg(colorObj.hex);
    setPickerVisibility(false);
  };
  const download = () => {
    fileInput.current.click();
  };
  const onInputChange = (e) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);
    Reader.onloadend = function() {
      setBgImage(Reader.result);
      fileInput.current.value = '';
    };
  };
  return (
    <ToolsColumn>
      <InvisibleInput type="file" ref={fileInput} onChange={onInputChange} />
      {isPickerVisible && <StyledSketchPicker color={bgColor} onChangeComplete={onPick} />}
      <button type="button" onClick={() => setPickerVisibility(!isPickerVisible)}>
        Background color
      </button>
      <button type="button" onClick={addText}>
        Text
      </button>
      <button type="button" onClick={addRect}>
        Add rectangle
      </button>
      <button type="button" onClick={download}>
        Download image
      </button>
      <button type="button" onClick={addSvg}>
        Add svg
      </button>
      <select
        name="filters"
        id="filters"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        value={activeFilter}
      >
        <option value="">None</option>
        <option value="blur">Blur</option>
        <option value="brighten">Brighten</option>
        <option value="contrast">Contrast</option>
        <option value="enhance">Enhance</option>
        <option value="grayscale">Grayscale</option>
        <option value="noise">Noise</option>
      </select>
    </ToolsColumn>
  );
};

Tools.propTypes = {
  setBg: func.isRequired,
  addText: func.isRequired,
  addRect: func.isRequired,
  setBgImage: func.isRequired,
  setFilter: func.isRequired,
  addSvg: func.isRequired,
  bgColor: string.isRequired,
  activeFilter: string,
};
Tools.defaultProps = {
  activeFilter: '',
};

const ToolsColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 10%;
  justify-content: space-around;
`;

const StyledSketchPicker = styled(SketchPicker)`
  position: absolute;
  z-index: 2;
  top: 12%;
  left: 90%;
`;

const InvisibleInput = styled.input`
  display: none;
`;

export default Tools;
