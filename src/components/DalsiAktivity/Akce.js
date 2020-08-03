import React from 'react';
import Zaklad from '../otherComponents/Zaklad';

const Akce = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Akce pro veřejnost' />
        <h3>
          <strong>Rodinné divadelní odpoledne</strong>&nbsp;
        </h3>
        <p>Oblíbená akce pro veřejnost v pozořické hájovně</p>
        <h3>
          <strong>Den lesních mateřských škol</strong>&nbsp;
        </h3>
        <p>
          Každoročně se účastníme celorepublikové akce 22. června a otvíráme své
          branky a vrátka pro veřejnost
        </p>
        <h3>
          <strong>Slavnosti</strong>&nbsp;
        </h3>
        <p>Pravidelně pořádáme masopustní reje a další oslavy tradic</p>
        <h3>
          <strong>Jarní úklid lesa</strong>&nbsp;
        </h3>
        <p>Každoročně čistíme náš blízký les</p>
      </div>
    </div>
  );
};

export default Akce;
