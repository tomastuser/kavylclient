import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './slick-theme.css';
import './slick.css';

import Uvod from './components/Uvod';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

import KdoJsme from './components/ONas/KdoJsme';
import Aktualita from './components/Aktuality/Aktualita';
import AktualityVse from './components/Aktuality/AktualityVse';
import NasiLide from './components/ONas/NasiLide';
import Ohlasy from './components/ONas/Ohlasy';
import Projekty from './components/ONas/Projekty';
import Sponzori from './components/ONas/Sponzori';
import Dokumenty from './components/ONas/Dokumenty';

import LesniSkolky from './components/LesniSkolky/LesniSkolky';
import Tabory from './components/Tabory/Tabory';

import Nabidka from './components/Enviroprogramy/Nabidka';
import Informace from './components/Enviroprogramy/Informace';

import Jurta from './components/DalsiAktivity/Jurta';
import Akce from './components/DalsiAktivity/Akce';
import Volnocas from './components/DalsiAktivity/Volnocas';
import Prednasky from './components/DalsiAktivity/Prednasky';

import Kontakt from './components/Kontakt';

import Foto from './components/Aktuality/Foto';
import ScrollToTop from './components/otherComponents/ScrollToTop';
import PageNotFound from './components/otherComponents/PageNotFound';

const App = () => {
  const navLinks = [
    {
      name: 'O nás',
      path: '/onas',
      id: '1',
      subNavLinks: [
        {
          name: 'Kdo jsme',
          path: '/onas/kdojsme',
        },
        {
          name: 'Aktuality',
          path: '/onas/aktuality',
        },
        {
          name: 'Náši lidé',
          path: '/onas/nasilide',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Ohlasy',
          path: '/onas/ohlasy',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
      ],
    },
    {
      name: 'Lesní školky',
      path: '/lesniskolky',
      id: '2',
      subNavLinks: [],
    },
    {
      name: 'Tábory',
      path: '/tabory',
      id: '3',
      subNavLinks: [],
    },
    {
      name: 'Enviroprogramy',
      path: '/enviroprogramy',
      id: '4',
      subNavLinks: [
        {
          name: 'Aktuální nabídka',
          path: '/enviroprogramy/nabidka',
        },
        {
          name: 'Praktické informace',
          path: '/enviroprogramy/informace',
        },
      ],
    },
    {
      name: 'Další aktivity',
      path: '/dalsiaktivity',
      id: '5',
      subNavLinks: [
        {
          name: 'Přednášky a semináře',
          path: '/dalsiaktivity/prednasky',
        },
        {
          name: 'Akce pro veřejnost',
          path: '/dalsiaktivity/akce',
        },
        {
          name: 'Volnočasové aktivity',
          path: '/dalsiaktivity/volnocas',
        },
        {
          name: 'Pronájem jurty',
          path: '/dalsiaktivity/jurta',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      id: '6',
      subNavLinks: [],
    },
  ];
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Nav navLinks={navLinks} />
        <div className='navSpacerAtTheTop' />
        <main>
          <Switch>
            <Route path='/' exact component={Uvod} />
            <Route path='/onas' exact component={KdoJsme} />
            <Route path='/onas/KdoJsme' exact component={KdoJsme} />
            <Route path='/onas/aktuality' exact component={AktualityVse} />
            <Route exact path='/onas/aktuality/:id' component={Aktualita} />
            <Route
              exact
              path='/onas/aktuality/strana/:id'
              component={AktualityVse}
            />
            <Route path='/onas/nasilide' exact component={NasiLide} />
            <Route path='/onas/projekty' exact component={Projekty} />
            <Route path='/onas/ohlasy' exact component={Ohlasy} />
            <Route path='/onas/dokumenty' exact component={Dokumenty} />
            <Route path='/onas/sponzori' exact component={Sponzori} />

            <Route exact path='/lesniskolky' component={LesniSkolky} />
            <Route exact path='/tabory' component={Tabory} />

            <Route exact path='/enviroprogramy/' component={Nabidka} />
            <Route exact path='/enviroprogramy/nabidka' component={Nabidka} />
            <Route
              exact
              path='/enviroprogramy/informace'
              component={Informace}
            />

            <Route exact path='/dalsiaktivity/' component={Prednasky} />
            <Route
              exact
              path='/dalsiaktivity/prednasky'
              component={Prednasky}
            />
            <Route exact path='/dalsiaktivity/akce' component={Akce} />
            <Route exact path='/dalsiaktivity/volnocas' component={Volnocas} />
            <Route exact path='/dalsiaktivity/jurta' component={Jurta} />

            <Route path='/kontakt' exact component={Kontakt} />

            <Route exact path='/images/:id' component={Foto} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
        <Footer2 />
      </div>
    </Router>
  );
};

export default App;
