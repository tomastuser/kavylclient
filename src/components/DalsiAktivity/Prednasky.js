import React from 'react';
import Zaklad from '../otherComponents/Zaklad';

const Prednasky = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Přednášky' />
        <p>
          Spolek Kavyl, zřizovatel školky pořádá v Líšni také přednášky pro
          rodiče i širokou veřejnost o vzdělávání a výchově.
        </p>
      </div>
    </div>
  );
};

export default Prednasky;
