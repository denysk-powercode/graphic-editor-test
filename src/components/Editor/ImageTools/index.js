import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

const ImageTools = ({ onCropBtnClick }) => {
  return (
    <Container>
      <button type="button" onClick={onCropBtnClick}>
        Crop
      </button>
    </Container>
  );
};

ImageTools.propTypes = {
  onCropBtnClick: func.isRequired,
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export default ImageTools;
