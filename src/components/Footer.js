import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import girlanda from '../public/girl2.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='girlanda'>
        <img src={girlanda} alt='girlanda' />
      </div>
      <div className='FooterD'>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img src='https://www.lesnikavyl.cz/images/loga/alms.gif' alt='' />
          </a>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://www.lesnikavyl.cz/images/loga/certifskolka.png'
              alt=''
            />
          </a>
        </div>
        <div className='footerInfo'>
          <ul>
            <li>
              <h4>
                <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
                &nbsp; info@lesnikavyl.cz
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />
                &nbsp; Hostěnická 626,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pozořice
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth />
                &nbsp;777 145 343
              </h4>
            </li>
            <li>
              <h4>
                <a href='https://www.facebook.com/spolekKavyl/'>
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />
                  &nbsp; spolekKavyl
                </a>
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img src='https://www.lesnikavyl.cz/images/loga/givt.jpg' alt='' />
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='https://www.lesnikavyl.cz/images/loga/darujme.png'
              alt=''
            />
          </a>
        </div>
      </div>
      <div className='FooterM'>
        <div className='footerInfo'>
          <ul>
            <li>
              <h4>
                <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
                &nbsp; info@lesnikavyl.cz
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />
                &nbsp; Hostěnická 626, Pozořice
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth />
                &nbsp;777 145 343
              </h4>
            </li>
            <li>
              <h4>
                <a href='https://www.facebook.com/spolekKavyl/'>
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />
                  &nbsp; spolekKavyl
                </a>
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://www.lesnikavyl.cz/images/loga/certifskolka.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img src='https://www.lesnikavyl.cz/images/loga/alms.gif' alt='' />
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='https://www.lesnikavyl.cz/images/loga/darujme.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img src='https://www.lesnikavyl.cz/images/loga/givt.jpg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
