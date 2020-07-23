import React from 'react';
import Zaklad from '../otherComponents/Zaklad';

const Informace = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Aktivity Kavylu' />
        <p>
          {' '}
          V zázemí LMŠ Mariánka pořádá spolek Kavyl, její zřizovatel,
          volnočasové kroužky a letní příměstské tábory, v Líšni pak přednášky.
        </p>
      </div>
    </div>
  );
};

export default Informace;
