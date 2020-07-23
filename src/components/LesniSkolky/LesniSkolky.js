import React from 'react';
import Zaklad from '../otherComponents/Zaklad';

const LesniSkolky = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Lesní kluby a lesní mateřské školy' />
        <p>
          Nabízíme pravidelné celoroční předškolní vzdělávání pro děti ve věku
          od 3 – 7 let ve skupinkách po 15-17 dětech pod vedením dvou pedagogů.
          Pedagogická koncepce je založena na myšlence "s dětmi venku za každého
          počasí bez zdí a plotů“, a je zaměřena na plnohodnotný rozvoj
          kompetencí dětí a na využití rozmanitého prostředí lesa. Zdravé
          sebevědomí, soucit a úcta k ostatním lidem, pokorný vztah k přírodě,
          to jsou nejvzácnější dary, které bychom chtěli dát našim dětem na
          cestu životem. Vycházíme z konceptu Respektovat a být respektován,
          využíváme prvky alternativních pedagogických směrů. Máme vypracovaný
          školní vzdělávací program, který naplňuje Rámcový vzdělávací program
          pro předškolní vzdělávání (RVP PV) vydaný MŠMT. Naše děti bez problémů
          zvládají přechod do základní školy. Obě školky prošly procesem
          certifikace Asociace lesních mateřských škol a splňují Standardy
          kvality lesní školky.
          <br />
          Více informací o tomto typu vzdělávání najdete na webu{' '}
          <a href='http://www.lesnims.cz/'>Asociace lesních mateřských škol.</a>
        </p>
        <h1>Lesní mateřská škola Mariánka</h1>
        <p>
          Lesní školka v Brně-Líšni, která od školního roku 2017/18 vstoupila do
          rejstříku škol a školských zařízení MŠMT. Může tak poskytovat povinný
          rok předškolní výchovy pro pětileté děti.
          <br />
          Kontakt: <a href='www.lesnimarianka.cz'>www.lesnimarianka.cz</a>,{' '}
          <a href='https://www.facebook.com/D%C4%9Btsk%C3%BD-lesn%C3%AD-klub-Mari%C3%A1nka-443991749006997/'>
            FB Dětský lesní klub Mariánka
          </a>
        </p>
        <h1>Dětský lesní klub Stromík</h1>
        <p>
          Lesní školka v Pozořicích s nejdelší tradicí (od roku 2010).
          <br />
          Kontakt: <a href='www.stromik.cz'>www.stromik.cz</a> ,{' '}
          <a href='https://www.facebook.com/Stromik/'>
            FB Lesní školka Stromík
          </a>
        </p>
      </div>
    </div>
  );
};

export default LesniSkolky;
