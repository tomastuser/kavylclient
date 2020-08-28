import React from 'react';
import { PropTypes } from 'prop-types';

const FotoCont = ({ name, alt }) => {
  return (
    <div className='fotoCont'>
      <div className='fotoContImg'>
        <img alt={alt} src={`https://lesnikavyl.cz/images/${name}`} />
      </div>
    </div>
  );
};

FotoCont.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FotoCont;
