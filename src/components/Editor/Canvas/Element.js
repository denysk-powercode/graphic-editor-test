import React, { useRef, useEffect, useState } from 'react';
import { func, bool, string } from 'prop-types';
import { isMobile } from 'react-device-detect';
import { Text, Rect, Transformer, Image } from 'react-konva';
import useImage from '../useImage';

const canvasWidth = isMobile ? process.env.REACT_APP_MOBILE_CANVAS_WIDTH : process.env.REACT_APP_CANVAS_WIDTH;
const canvasHeight = isMobile ? process.env.REACT_APP_MOBILE_CANVAS_HEIGHT : process.env.REACT_APP_CANVAS_HEIGHT;

const typesMap = {
  text: Text,
  rect: Rect,
  svg: Image,
  image: Image,
};

const SingleElement = ({
  type,
  id,
  isSelected,
  onSelect,
  modifyElement,
  onTextDblClick,
  textEditVisible,
  ...elProps
}) => {
  const currentShapeRef = useRef(null);
  const transformerRef = useRef(null);
  const [lastPos, setLastPos] = useState({ x: elProps.x, y: elProps.y });
  const Shape = typesMap[type];
  const onDragEnd = (e) => {
    const { x, y } = e.target.attrs;
    if (x > canvasWidth || x < 0 || y > canvasHeight || y < 0) {
      e.target.to({ x: lastPos.x, y: lastPos.y });
      modifyElement(id, { x: lastPos.x, y: lastPos.y });
    } else {
      modifyElement(id, {
        x: e.target.x(),
        y: e.target.y(),
      });
      setLastPos({ x: e.target.x(), y: e.target.y() });
    }
  };
  const onTransformEnd = (e) => {
    // transformer is changing scale
    const node = e.currentTarget;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);
    modifyElement(id, {
      x: node.x(),
      y: node.y(),
      rotation: node.attrs.rotation,
      width: node.width() * scaleX,
      height: node.height() * scaleY,
    });
  };
  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      if (transformerRef.current) {
        transformerRef.current.setNode(currentShapeRef.current);
        transformerRef.current.getLayer().batchDraw();
      }
    }
  }, [isSelected, textEditVisible]);
  const [image] = useImage(elProps.url);
  return (
    <>
      {textEditVisible && isSelected && type === 'text' ? null : (
        <Shape
          draggable
          onClick={() => !isSelected && onSelect(id)}
          onTouchStart={() => !isSelected && onSelect(id)}
          ref={currentShapeRef}
          onDragEnd={onDragEnd}
          onTransformEnd={onTransformEnd}
          key={id}
          onDblClick={type === 'text' ? onTextDblClick : undefined}
          image={image}
          {...elProps}
        />
      )}

      {isSelected && !textEditVisible && <Transformer ref={transformerRef} />}
    </>
  );
};

SingleElement.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  isSelected: bool.isRequired,
  onSelect: func.isRequired,
  modifyElement: func.isRequired,
  onTextDblClick: func.isRequired,
  textEditVisible: bool,
};
SingleElement.defaultProps = {
  textEditVisible: false,
};

export default SingleElement;
