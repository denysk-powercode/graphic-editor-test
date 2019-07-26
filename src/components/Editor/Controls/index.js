import React from 'react';
import { func, object, number } from 'prop-types';
import styled from 'styled-components';

const Controls = ({ deleteElement, activeElement, undo, redo, pastStatesExist, futureStatesExist }) => {
  return (
    <Container>
      <StyledButton disabled={!activeElement} onClick={deleteElement}>
        Remove
      </StyledButton>
      <StyledButton disabled={!pastStatesExist} onClick={() => undo()}>
        Undo
      </StyledButton>
      <StyledButton disabled={!futureStatesExist} onClick={() => redo()}>
        Redo
      </StyledButton>
    </Container>
  );
};

Controls.propTypes = {
  deleteElement: func.isRequired,
  undo: func.isRequired,
  redo: func.isRequired,
  pastStatesExist: number.isRequired,
  futureStatesExist: number.isRequired,
  activeElement: object,
};

Controls.defaultProps = {
  activeElement: null,
};

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  width: 100%;
`;

const StyledButton = styled.button`
  margin-right: 10px;
`;

export default Controls;
