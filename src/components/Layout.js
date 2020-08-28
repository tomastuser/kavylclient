import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

import Nav from './Nav';
import Footer from './Footer';
import Footer2 from './Footer2';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children, title = 'Kavyl z.s.' }) {
  return (
    <>
      <Helmet>
        <title>{`Kavyl z.s. | Lesní školky a další aktivity v Brně a Pozořicích - ${title}`}</title>
      </Helmet>
      <header>
        <ScrollToTop />
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
        <Footer2 />
      </footer>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
