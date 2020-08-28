import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Layout from '../../components/Layout';

const Aktualita = ({ match }) => {
  const [aktualita, setAktualita] = useState({});
  const [img, setImg] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://kavyl.herokuapp.com/aktuality/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAktualita(data);
        setImg(data.Image);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);
  return (
    <Layout title={aktualita.Nazev}>
      <div className='mainOstatni'>
        {isLoaded ? (
          <div className='aktualityContainer'>
            <div
              className={`aktualita aktualitaPozadi${Math.floor(
                Math.random() * 6 + 1
              )}`}
            >
              <h2 className='aktualitaNazev'>{aktualita.Nazev}</h2>
              <div className='aktualitaTelo'>
                <div className='aktualitaImg'>
                  <div className='aktualitaImgCont'>
                    {aktualita.Image && (
                      <Link to={`/onas/aktualita/${aktualita.id}/foto`}>
                        <div type='button'>
                          <img src={img.url} alt={aktualita.Nazev} />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: aktualita.Text }}
                  className='aktualitaText'
                />
              </div>
              <Link to='/onas/aktuality'>
                <div className='aktualitaButton button'>Zpět</div>
              </Link>
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

Aktualita.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

export default Aktualita;
