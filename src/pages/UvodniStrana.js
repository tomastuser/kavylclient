import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OdrazkyUvod from '../components/Uvod/OdrazkyUvod';
import Uvod from '../components/Uvod/Uvod';
import AktualitaZastupce from '../components/AktualitaZastupce';
import Layout from '../components/Layout';

function UvodniStrana() {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://kavyl.herokuapp.com/aktuality')
      .then((res) => res.json())
      .then((data) => {
        setAktuality(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a, b) => {
      return b.id - a.id;
    });
  };

  return (
    <Layout title='Úvodní strana'>
      <div className='Uvod'>
        <div className='pozadiFixed'>
          <img
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587637533/aezswjs5y9sb8bds5hyhHD_do5byd.jpg'
            alt=''
          />
        </div>
        <div className='uvodAktuality'>
          <Uvod />

          <h1>Co je u nás nového?</h1>
          {isLoaded ? (
            <>
              <div className='aktuality'>
                {serazeniOdNejvyssiho()
                  .slice(0, 3)
                  .map((aktualita, index) => (
                    <AktualitaZastupce
                      key={aktualita.id}
                      aktualita={aktualita}
                      pozadi={`aktualitaPozadi${index + 1}`}
                    />
                  ))}
              </div>
              <Link to='/onas/aktuality'>
                <button
                  type='button'
                  className='button'
                  style={{
                    width: '15%',
                    marginBottom: '0',
                    marginTop: '0',
                    minWidth: '260px',
                  }}
                >
                  Všechny příspěvky
                </button>
              </Link>
            </>
          ) : (
            <div className='loading'>
              <h3>NAHRÁVÁNÍ...</h3>
            </div>
          )}
        </div>
        <div className='pozadiPrazdneContainer'>
          <div className='pozadiPrazdne'>
            <OdrazkyUvod />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UvodniStrana;
