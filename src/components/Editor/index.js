import React, { useRef, useCallback, useEffect } from 'react';
import { func, bool, object, number, string, array } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import Tools from './Tools';
import Controls from './Controls';
import SVGColorsPicker from './SVGColorsPicker';
import TextTools from './TextTools';

import { setActiveElementId, setEditingStatus } from '../../store/editor/actions';
import {
  setBG,
  addElement,
  modifyElement,
  setBgImage,
  deleteElement,
  undo,
  redo,
  setFilter,
  changeGradientColorStops,
} from '../../store/canvas/actions';
import { setPathColors } from '../../store/editor/actions';

import { selectActiveElement } from '../../store/editor/selectors';

const Editor = ({
  setBG,
  addElement,
  elements,
  modifyElement,
  activeElId,
  setActiveElementId,
  setBgImage,
  deleteElement,
  activeElement,
  setEditingStatus,
  isEditing,
  undo,
  redo,
  pastStatesExist,
  futureStatesExist,
  setFilter,
  activeFilter,
  setPathColors,
  pathColors,
  background,
  changeGradientColorStops,
}) => {
  useEffect(() => {
    (async () => {
      if (activeElement && activeElement.type === 'image') {
        const resp = await fetch(activeElement.url);
        const text = await resp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        const paths = doc.querySelectorAll('path');
        const colors = [];
        for (let i = 0; i < paths.length; i += 1) {
          colors.push(paths[i].getAttribute('fill'));
        }
        setPathColors(colors.filter((item) => Boolean(item)));
      } else if (pathColors.length && (!activeElement || (activeElement && activeElement.type !== 'image'))) {
        setPathColors([]);
      }
    })();
  }, [activeElId]);
  const onKeyPress = (e) => {
    if (e.keyCode === 46 && !isEditing && activeElId) {
      deleteElement(activeElId);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => document.removeEventListener('keydown', onKeyPress);
  }, [activeElId, isEditing]);
  const canvasRef = useRef(null);
  const createTextEl = useCallback(() => {
    addElement({
      id: String(Math.random()),
      type: 'text',
      text: `Numba # ${Math.floor(Math.random() * 100)}`,
      x: process.env.REACT_APP_CANVAS_HEIGHT / 2 - 40,
      y: process.env.REACT_APP_CANVAS_HEIGHT / 2 - 10,
      rotation: 0,
      fill: '#fff',
      fontSize: 30,
      fontFamily: 'Arial',
    });
  });
  const createRectangle = useCallback(() => {
    addElement({
      id: String(Math.random()),
      type: 'rect',
      width: 100,
      height: 100,
      x: process.env.REACT_APP_CANVAS_WIDTH / 2 - 50,
      y: process.env.REACT_APP_CANVAS_HEIGHT / 2 - 50,
      rotation: 0,
      stroke: '#000',
      strokeWidth: 2,
      fill: 'blue',
    });
  });
  const createSvg = useCallback(async () => {
    addElement({
      id: String(Math.random()),
      type: 'image',
      url: 'https://image.flaticon.com/icons/svg/1279/1279553.svg',
      x: process.env.REACT_APP_CANVAS_WIDTH / 2 - 100,
      y: process.env.REACT_APP_CANVAS_HEIGHT / 2 - 100,
      width: 200,
      height: 200,
    });
  });
  const deleteEl = useCallback(() => {
    if (activeElId && !isEditing) deleteElement(activeElId);
  });
  const exportImg = () => {
    const anchor = document.createElement('a');
    const src = canvasRef.current.getStage().toDataURL();
    anchor.setAttribute('href', src);
    anchor.setAttribute('download', 'imaaage.png');
    anchor.setAttribute('crossOrigin', 'anonymous');
    anchor.click();
  };
  return (
    <Container>
      <EditorBox>
        {activeElement && activeElement.type === 'image' && <SVGColorsPicker />}
        {activeElement && activeElement.type === 'text' && <TextTools />}
        <Controls
          deleteElement={deleteEl}
          activeElement={activeElement}
          undo={undo}
          redo={redo}
          pastStatesExist={pastStatesExist}
          futureStatesExist={futureStatesExist}
        />
        <Tools
          background={background}
          setBg={setBG}
          addText={createTextEl}
          addRect={createRectangle}
          setBgImage={setBgImage}
          setFilter={setFilter}
          activeFilter={activeFilter}
          addSvg={createSvg}
          changeGradientColorStops={changeGradientColorStops}
        />
        <Canvas
          background={background}
          canvasRef={canvasRef}
          elements={elements}
          selectShape={setActiveElementId}
          selectedId={activeElId}
          modifyElement={modifyElement}
          activeElement={activeElement}
          setEditingStatus={setEditingStatus}
          isEditing={isEditing}
          activeFilter={activeFilter}
        />
      </EditorBox>
      <button type="button" style={{ marginBottom: '100px', zIndex: 111 }} onClick={exportImg}>
        Generate png
      </button>
    </Container>
  );
};

Editor.propTypes = {
  setBG: func.isRequired,
  addElement: func.isRequired,
  modifyElement: func.isRequired,
  setBgImage: func.isRequired,
  deleteElement: func.isRequired,
  setEditingStatus: func.isRequired,
  setActiveElementId: func.isRequired,
  setPathColors: func.isRequired,
  changeGradientColorStops: func.isRequired,
  setFilter: func.isRequired,
  undo: func.isRequired,
  redo: func.isRequired,
  activeElId: string,
  elements: array.isRequired,
  background: object.isRequired,
  activeElement: object,
  isEditing: bool.isRequired,
  pastStatesExist: number.isRequired,
  futureStatesExist: number.isRequired,
  activeFilter: string,
  pathColors: array.isRequired,
};
Editor.defaultProps = {
  activeElId: null,
  activeElement: null,
  activeFilter: '',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const EditorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  justify-content: space-between;
`;

const mapStateToProps = (state) => ({
  background: state.canvas.present.background,
  elements: state.canvas.present.elements,
  activeElId: state.editor.activeElementId,
  activeElement: selectActiveElement(state),
  isEditing: state.editor.isEditing,
  pastStatesExist: state.canvas.past.length,
  futureStatesExist: state.canvas.future.length,
  activeFilter: state.canvas.present.filter,
  pathColors: state.editor.pathColors,
});

const mapDispatchToProps = {
  setBG,
  addElement,
  modifyElement,
  setActiveElementId,
  setBgImage,
  deleteElement,
  setEditingStatus,
  undo,
  redo,
  setFilter,
  setPathColors,
  changeGradientColorStops,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
