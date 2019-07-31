import React, { useRef, useState, useEffect } from 'react';
import { object } from 'prop-types';
import { Layer, Stage, Rect, Image, Transformer } from 'react-konva';
import { throttle } from 'lodash';

// TODO big chunk of this code is being repeated over and over across multiple components, find a way to optimize

import useImage from '../useImage';

const canvasWidth = process.env.REACT_APP_CANVAS_WIDTH;
const canvasHeight = process.env.REACT_APP_CANVAS_HEIGHT;

const initialSelectionRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  stroke: '#2532de',
  strokeWidth: 1,
  dash: [5, 10],
};

const CropCanvas = ({ activeElement, secondCanvasRef }) => {
  const [image] = useImage(activeElement.url);
  const [isImageSelected, setImageSelectedStatus] = useState(false);
  const transformerRef = useRef(null);
  const imageRef = useRef(null);
  const [initialSelectionRectCoords, setInitialSelectionRectCoords] = useState({ x: 0, y: 0 });
  const [selectionRect, changeSelectionRect] = useState(initialSelectionRect);
  const [isSelectionActive, setSelectionStatus] = useState(false);
  useEffect(() => {
    if (isImageSelected) {
      // we need to attach transformer manually
      if (transformerRef.current) {
        transformerRef.current.setNode(imageRef.current);
        transformerRef.current.getLayer().batchDraw();
      }
    }
  }, [isImageSelected]);
  const onImageClick = () => setImageSelectedStatus(true);
  const onSelectionStart = (e) => {
    const clickedOnImage =
      (e.target.attrs.id && e.target.attrs.id.includes('image')) ||
      (e.target.attrs.name && e.target.attrs.name.includes('anchor'));
    if (clickedOnImage) return;
    setSelectionStatus(true);
    setInitialSelectionRectCoords({ x: e.evt.offsetX, y: e.evt.offsetY });
  };
  const onSelectionEnd = () => {
    setSelectionStatus(false);
    setInitialSelectionRectCoords({ x: 0, y: 0 });
    changeSelectionRect(initialSelectionRect);
  };
  const onSelectionChange = (e) => {
    if (isSelectionActive) {
      const width = Math.abs(e.evt.offsetX - initialSelectionRectCoords.x);
      const height = Math.abs(e.evt.offsetY - initialSelectionRectCoords.y);
      if (width > canvasWidth || height > canvasHeight) {
        onSelectionEnd();
      }
      const xCoord = e.evt.offsetX - initialSelectionRectCoords.x > 0 ? initialSelectionRectCoords.x : e.evt.offsetX;
      const yCoord = e.evt.offsetY - initialSelectionRectCoords.y > 0 ? initialSelectionRectCoords.y : e.evt.offsetY;
      changeSelectionRect({ ...selectionRect, x: xCoord, y: yCoord, width, height });
    }
  };
  const throttledOnChange = throttle(onSelectionChange, 500);
  return (
    <>
      <Stage height={canvasHeight} width={canvasWidth} ref={secondCanvasRef}>
        <Layer
          onMouseDown={(e) => {
            // deselect when clicked on empty area
            onSelectionStart(e);
            const clickedOnEmpty =
              (e.target.attrs.id && e.target.attrs.id.includes('bg')) || e.target === e.target.getStage();
            if (clickedOnEmpty && isImageSelected) {
              setImageSelectedStatus(false);
            }
          }}
          onMouseUp={onSelectionEnd}
          onMouseMove={throttledOnChange}
          onMouseLeave={onSelectionEnd}
        >
          <Rect id="bg" x={0} y={0} height={canvasHeight} width={canvasWidth} fill="lightgrey" />
          <Image
            draggable
            id="image"
            onClick={onImageClick}
            ref={imageRef}
            image={image}
            x={0}
            y={0}
            height={activeElement.originalHeight}
            width={activeElement.originalWidth}
          />
          {isImageSelected && <Transformer ref={transformerRef} />}
          {isSelectionActive && <Rect {...selectionRect} />}
        </Layer>
      </Stage>
    </>
  );
};

CropCanvas.propTypes = {
  activeElement: object,
  secondCanvasRef: object.isRequired,
};

CropCanvas.defaultProps = {
  activeElement: null,
};

export default CropCanvas;
