import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const PraktickeInfoKlub = () => {
  return (
    <Layout title='Praktické informace'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Praktické informace klubu' />
          <FotoCont name='PODZ.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default PraktickeInfoKlub;
