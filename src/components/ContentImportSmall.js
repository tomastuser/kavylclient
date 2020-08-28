import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const ContentImportSmall = ({ nazev }) => {
  const [stranky, setStranky] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://kavyl.herokuapp.com/stranky')
      .then((res) => res.json())
      .then((data) => {
        setStranky(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoaded ? (
        stranky.map((stranka) =>
          stranka.Nazev === nazev ? (
            <div
              dangerouslySetInnerHTML={{ __html: stranka.Text }}
              key={stranka.Nazev}
            />
          ) : null
        )
      ) : (
        <div className='mainOstatni'>
          <div className='loading'>
            <h3>NAHRÁVÁNÍ...</h3>
          </div>
        </div>
      )}
    </>
  );
};

ContentImportSmall.propTypes = { nazev: PropTypes.string.isRequired };

export default ContentImportSmall;
