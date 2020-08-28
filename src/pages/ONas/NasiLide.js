import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import ClenTymu from '../../components/Tym/ClenTymu';

const NasiLide = () => {
  const [clenove, setClenove] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://kavyl.herokuapp.com/lide')
      .then((res) => res.json())
      .then((data) => {
        setClenove(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort((a, b) => {
      return b.id - a.id;
    });
  };
  return (
    <Layout title='Naši lidé'>
      <div className='mainOstatni'>
        {isLoaded ? (
          <div className='nasTym'>
            <h1>Naši lidé</h1>
            <div className='tymContainer'>
              <div className='tym'>
                {serazeniOdNejvyssiho()
                  .reverse()
                  .map((clen) => (
                    <ClenTymu key={clen.id} clen={clen} />
                  ))}
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

export default NasiLide;
