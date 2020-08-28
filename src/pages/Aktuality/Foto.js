import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../../components/Layout';

const Foto = ({ match, history }) => {
  const [aktualita, setAktualita] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://kavyl.herokuapp.com/aktuality/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAktualita(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  return (
    <Layout title={`Foto č. ${aktualita.id}`}>
      <div className='mainOstatni'>
        {isLoaded ? (
          <div className='fotoContainer'>
            <div className='foto'>
              {aktualita.Image ? (
                <div className='fotoImgCont'>
                  <img
                    src={aktualita.Image.url}
                    alt={aktualita.Nazev}
                    onClick={history.goBack}
                    onKeyDown={history.goBack}
                    role='presentation'
                  />
                </div>
              ) : (
                <h1>Foto neexistuje</h1>
              )}
              <div
                className='button'
                style={{
                  width: '35%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                onClick={history.goBack}
                onKeyDown={history.goBack}
                role='button'
                tabIndex={0}
              >
                Zpět
              </div>
            </div>
          </div>
        ) : (
          <div className='loading'>
            <h3>NAHRÁVÁNÍ...</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};

Foto.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
  history: PropTypes.shape({ goBack: PropTypes.shape() }).isRequired,
};

export default Foto;
