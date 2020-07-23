import React from 'react';
import Zaklad from './otherComponents/Zaklad';

function Kontakt() {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Kontakt' />
        <div className='kontaktContD'>
          <div className='kontaktA'>
            <h3>Klára Krchňavá</h3>{' '}
            <ul>
              <li>tel.: 604 536 796</li>
              <li>e-mail: klara.krchnava@lesnikavyl.cz</li>
            </ul>
            <h3>Obecné informace:</h3> <p>e-mail: info@lesnikavyl.cz</p>
            <h3>Enviroprogramy:</h3>
            <p>e-mail: evvo@lesnikavyl.cz</p>
            <h3>dotace, finance:</h3>
            <p>e-mail: finance@lesnikavyl.cz</p>
            <h3>média:</h3>
            <p>e-mail: pr@lesnikavyl.cz</p>
          </div>
          <div className='kontaktB'>
            <h3>Kavyl z.s.</h3>
            <ul>
              <li>Sídlo:</li>
              <li>Viničné Šumice č. p. 137, 664 06 </li>
              <br />
              <li>IČ: 229 09 320</li>
              <br />
              <li>Číslo účtu: 2601593939/2010</li>
              <br />
              <li>Datová schránka: itb74qd</li>
            </ul>
          </div>
        </div>

        <div className='kontaktContM'>
          <div className='kontaktA'>
            <h3>Klára Krchňavá</h3>{' '}
            <ul>
              <li>tel.: 604 536 796</li>
              <li>e-mail: klara.krchnava@lesnikavyl.cz</li>
            </ul>
            <h3>Obecné informace:</h3> <p>e-mail: info@lesnikavyl.cz</p>
            <h3>Enviroprogramy:</h3>
            <p>e-mail: evvo@lesnikavyl.cz</p>
            <h3>dotace, finance:</h3>
            <p>e-mail: finance@lesnikavyl.cz</p>
            <h3>média:</h3>
            <p>e-mail: pr@lesnikavyl.cz</p>
          </div>
          <div className='kontaktB'>
            <h3>Kavyl z.s.</h3>
            <p>
              Sídlo:
              <br />
              Viničné Šumice č. p. 137, 664 06
              <br />
              IČ: 229 09 320
              <br />
              Číslo účtu: 2601593939/2010
              <br />
              Datová schránka: itb74qd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
