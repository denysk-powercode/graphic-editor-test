import React, { useState, useRef, useEffect } from 'react';
import { func, bool, object, string, array } from 'prop-types';
import styled from 'styled-components';
import Konva from 'konva';
import { Layer, Stage, Rect, Image } from 'react-konva';
import useImage from '../useImage';

import SingleElement from './Element';

const canvasWidth = Number(process.env.REACT_APP_CANVAS_WIDTH);
const canvasHeight = Number(process.env.REACT_APP_CANVAS_HEIGHT);
const initProps = {
  x: 0,
  y: 0,
  width: canvasWidth,
  height: canvasHeight,
};

const Canvas = ({
  canvasRef,
  elements,
  selectedId,
  selectShape,
  modifyElement,
  activeElement,
  setEditingStatus,
  isEditing,
  activeFilter,
  background,
}) => {
  const textAreaRef = useRef(null);
  const layerRef = useRef(null);
  const bgRef = useRef(null);
  const bgImageRef = useRef(null);
  useEffect(() => {
    if (bgRef.current) bgRef.current.cache();
  }, [background.color, background.gradient]);
  const [image] = useImage(background.imageURL, 'Anonymous');
  useEffect(() => {
    if (bgImageRef.current) {
      bgImageRef.current.cache();
      bgImageRef.current.getLayer().draw();
    }
  }, [image]);
  const [textAreaValue, setTextAreaValue] = useState(activeElement ? activeElement.text : '');
  const [textAreaCoords, setTextAreaCoords] = useState({ x: 0, y: 0 });
  const onTextDblClick = (e) => {
    const absPos = e.target.getAbsolutePosition();
    setTextAreaCoords({ x: absPos.x, y: absPos.y });
    setTextAreaValue(activeElement.text);
    setEditingStatus(true);
    textAreaRef.current.focus();
  };
  const handleTextEdit = (e) => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    setTextAreaValue(e.target.value);
  };
  const onTextareaKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      const { width, height } = getComputedStyle(textAreaRef.current);
      setEditingStatus(false);
      modifyElement(activeElement.id, {
        text: textAreaValue,
        width: parseInt(width, 10),
        height: parseInt(height, 10),
      });
    }
  };
  const filters = activeFilter ? [Konva.Filters[`${activeFilter[0].toUpperCase()}${activeFilter.slice(1)}`]] : '';
  const colorObj = background.type === 'color' ? { fill: background.color } : background.gradient;
  console.log('colorObj', colorObj);
  return (
    <div style={{ position: 'relative' }}>
      <Stage
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={(e) => {
          // deselect when clicked on empty area
          const clickedOnEmpty =
            (e.target.attrs.id && e.target.attrs.id.includes('bg')) || e.target === e.target.getStage();
          if (clickedOnEmpty && selectedId) {
            selectShape(null);
          }
          if (clickedOnEmpty && isEditing) {
            setEditingStatus(false);
          }
        }}
      >
        <Layer ref={layerRef}>
          {background.imageURL ? (
            <Image {...initProps} id="bgImage" ref={bgImageRef} image={image} filters={filters} noise={3} />
          ) : (
            <Rect {...initProps} id="bg" ref={bgRef} filters={filters} noise={3} {...colorObj} />
          )}
          {elements.map((el) => {
            return (
              <SingleElement
                key={el.id}
                {...el}
                onSelect={selectShape}
                isSelected={el.id === selectedId}
                modifyElement={modifyElement}
                onTextDblClick={onTextDblClick}
                textEditVisible={isEditing}
              />
            );
          })}
        </Layer>
      </Stage>
      <StyledTextArea
        ref={textAreaRef}
        value={textAreaValue}
        onChange={handleTextEdit}
        onKeyDown={onTextareaKeyDown}
        xCoord={textAreaCoords.x}
        yCoord={textAreaCoords.y}
        textEditVisible={isEditing}
        el={activeElement && activeElement.type === 'text' && activeElement}
      />
    </div>
  );
};

Canvas.propTypes = {
  canvasRef: object.isRequired,
  background: object.isRequired,
  elements: array.isRequired,
  selectedId: string,
  selectShape: func.isRequired,
  modifyElement: func.isRequired,
  setEditingStatus: func.isRequired,
  activeElement: object,
  activeFilter: string,
  isEditing: bool.isRequired,
};
Canvas.defaultProps = {
  selectedId: null,
  activeElement: null,
  activeFilter: '',
};

const StyledTextArea = styled.textarea`
  display: ${(props) => (props.textEditVisible ? 'block' : 'none')};
  position: absolute;
  top: ${(props) => `${props.yCoord}px`};
  left: ${(props) => `${props.xCoord}px`};
  transform-origin: left top;
  background: none;
  padding: 0;
  margin: 0;
  resize: none;
  border: 1px solid white;
  outline: none;
  text-align: ${(props) => props.el && props.el.align};
  font-style: ${(props) => props.el && props.el.fontStyle};
  overflow: hidden;
  line-height: 1;
  font-size: ${(props) => `${props.el && props.el.fontSize}px`};
  height: auto;
  width: ${(props) => `${props.el && props.el.width}px`};
  color: ${(props) => props.el && props.el.fill};
  font-family: ${(props) => `${props.el && props.el.fontFamily}`};
  transform: ${(props) => `rotateZ(${props.el && props.el.rotation}deg)`};
`;

export default Canvas;
