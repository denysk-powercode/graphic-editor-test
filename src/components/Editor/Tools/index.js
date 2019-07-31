import React, { useState, useRef } from 'react';
import { func, string, object } from 'prop-types';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const Tools = ({
  setBg,
  background,
  addText,
  addRect,
  addSvg,
  setBgImage,
  setFilter,
  activeFilter,
  changeGradientColorStops,
  addImage,
  exportImg,
}) => {
  const [isPickerVisible, setPickerVisibility] = useState(false);
  const [isGradientPickerVisible, setGradientPickerVisibility] = useState(false);
  const [activeGradientIndex, setActiveGradientIndex] = useState(1);
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
  const onGradientPickerClick = (i) => {
    setActiveGradientIndex(i);
    setGradientPickerVisibility(true);
  };
  const onGradientColorPickComplete = (data) => {
    const defaultColor = background.color;
    const oldStops = background.gradient.fillLinearGradientColorStops;
    const formRGBString = (rgbObj) => `rgba(${rgbObj.r},${rgbObj.g},${rgbObj.b},${rgbObj.a})`;
    const newColorStops =
      activeGradientIndex === 1
        ? [0, formRGBString(data.rgb), 1, oldStops[3] || defaultColor]
        : [0, oldStops[1] || defaultColor, 1, formRGBString(data.rgb)];
    changeGradientColorStops(newColorStops);
    setGradientPickerVisibility(false);
  };
  return (
    <ToolsColumn>
      <InvisibleInput type="file" ref={fileInput} onChange={onInputChange} />
      {isPickerVisible && <StyledSketchPicker color={background.color} onChangeComplete={onPick} />}
      <Btn type="button" onClick={() => setPickerVisibility(!isPickerVisible)}>
        Background color
      </Btn>
      <GradientWrapper>
        {isGradientPickerVisible && (
          <StyledSketchPicker
            color={background.gradient.fillLinearGradientColorStops[activeGradientIndex]}
            onChangeComplete={onGradientColorPickComplete}
          />
        )}
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <GradientPicker
            clr={background.gradient.fillLinearGradientColorStops[1]}
            onClick={() => onGradientPickerClick(1)}
          />
          <GradientPicker
            clr={background.gradient.fillLinearGradientColorStops[3]}
            onClick={() => onGradientPickerClick(3)}
          />
        </div>
      </GradientWrapper>
      <Btn type="button" onClick={addText}>
        Text
      </Btn>
      <Btn type="button" onClick={addRect}>
        Add rectangle
      </Btn>
      <Btn type="button" onClick={download}>
        Download image
      </Btn>
      <Btn type="button" onClick={addSvg}>
        Add svg
      </Btn>
      <Btn type="button" onClick={addImage}>
        Add image
      </Btn>
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
      <Btn type="button" onClick={exportImg}>
        Generate png
      </Btn>
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
  addImage: func.isRequired,
  exportImg: func.isRequired,
  changeGradientColorStops: func.isRequired,
  background: object.isRequired,
  activeFilter: string,
};
Tools.defaultProps = {
  activeFilter: '',
};

const ToolsColumn = styled.div`
  display: flex;
  position: relative;
  ${({ theme }) => theme.mobile`
     flex-direction: row;
     height: auto;
     flex-wrap: wrap;
     width: 90vw;
     margin-bottom: 30px;
  `};
  flex-direction: column;
  height: 100%;
  width: 10%;
  justify-content: space-between;
`;

const Btn = styled.button`
  ${({ theme }) => theme.mobile`
  margin-bottom: 10px;
  margin-right: 10px;
  `};
  margin: 0;
`;

const StyledSketchPicker = styled(SketchPicker)`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mobile`
      left: 0%;
      top: 45%;
  `};
  top: 12%;
  left: 90%;
`;

const InvisibleInput = styled.input`
  display: none;
`;

const GradientWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const GradientPicker = styled.div`
  position: relative;
  width: 25px;
  margin-right: 15px;
  height: 25px;
  border: 1px solid black;
  background-color: ${(props) => props.clr};
`;

export default Tools;
