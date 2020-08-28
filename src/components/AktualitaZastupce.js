import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const AktualitaZastupce = ({ aktualita, pozadi }) => {
  return (
    <div className={`aktualitaZastupce ${pozadi}`}>
      <Link to={`/aktuality/${aktualita.id}`}>
        <h4 className='aktualitaZastupceNadpis'>{aktualita.Nazev}</h4>
      </Link>
      <div className='aktualitaZastupceText'>
        <div
          className='aktualitaZastupceTeloTextu'
          dangerouslySetInnerHTML={{
            __html:
              aktualita.Text.substr(0, 500) +
              (aktualita.Text.length > 500 ? ' ...' : ''),
          }}
        />
      </div>
      <Link className='button' to={`/onas/aktualita/${aktualita.id}`}>
        Celý příspěvek
      </Link>
    </div>
  );
};

AktualitaZastupce.propTypes = {
  aktualita: PropTypes.shape({
    id: PropTypes.number,
    Text: PropTypes.string,
    Nazev: PropTypes.string,
  }).isRequired,
  pozadi: PropTypes.string.isRequired,
};

export default AktualitaZastupce;
