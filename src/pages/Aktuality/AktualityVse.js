import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
import AktualitaZastupce from '../../components/AktualitaZastupce';
import Layout from '../../components/Layout';

const Aktuality = () => {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const aktualityZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout title='Aktuality'>
      <div className='mainOstatni'>
        {isLoaded ? (
          <div className='aktualityContainer'>
            <h1>Aktuality</h1>
            <br />
            <div className='aktuality'>
              {aktualityZde.map((aktualita, index) => (
                <AktualitaZastupce
                  key={aktualita.id}
                  aktualita={aktualita}
                  pozadi={`aktualitaPozadi${index + 1}`}
                />
              ))}
            </div>
            <br />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={aktuality.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div className='loading'>
            <h3>NAHRÁVÁM...</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Aktuality;
