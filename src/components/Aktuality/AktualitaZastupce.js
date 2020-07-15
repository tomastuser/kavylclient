import React from 'react';
import { Link } from 'react-router-dom';

const AktualitaZastupce = ({ aktualita }) => {
  return (
    <div className='aktualitaZastupce'>
      <Link
        className='aktualitaZastupceNadpis'
        to={`/aktuality/${aktualita.id}`}
      >
        <h4>{aktualita.Nadpis}</h4>
      </Link>
      <div
        className='aktualitaZastupceText'
        dangerouslySetInnerHTML={{
          __html:
            aktualita.Text.substr(0, 650) +
            (aktualita.Text.length > 650 ? ' ...' : ''),
        }}
      ></div>
      <Link className='button' to={`/onas/aktuality/${aktualita.id}`}>
        Celý příspěvek
      </Link>
    </div>
  );
};

export default AktualitaZastupce;
