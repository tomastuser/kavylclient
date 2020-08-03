import React from 'react';
import Zaklad from '../otherComponents/Zaklad';

function Dokumenty() {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Dokumenty' />
        <ul>
          <li>
            <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/Kavyl aktuální stanovy 2015.doc'>
              Stanovy
            </a>
          </li>
          <li>
            <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/standardy_kvality.pdf'>
              Standardy kvality lesních MŠ
            </a>
          </li>
          <li>
            <h3>Výroční zprávy:</h3>
            <ul>
              <li>
                <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/KAVYL_VZ2015.pdf'>
                  2015
                </a>
              </li>
              <li>
                <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/KAVYL_VZ2016_web.pdf'>
                  2016
                </a>
              </li>
              <li>
                <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/KAVYL_VZ2017_150dpi.pdf'>
                  2017
                </a>
              </li>
              <li>
                <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/KAVYL_VZ2018_72dpi_reduced.pdf'>
                  2018
                </a>
              </li>
              <li>
                <a href='http://www.lesnikavyl.cz/Uploads/dokumenty/KAVYL_VZ2019_preview (1).pdf'>
                  2019
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dokumenty;
