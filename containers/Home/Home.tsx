import { ROUTES } from '@constants';
import Config from '@root/config';
import { reactLocalStorage } from '@utils';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { BannerWrap, HomePageWrapper } from './Home.style';
import { IconAppStore, IconGoogleApp } from './svgs';

const Home = () => {
  const onLogoutClick = () => {
    // try {
    //   const resp: any = doLogout();
    //   const error = resp.data?.error;
    //   const respData = resp.data?.data;
    //   if (error) {
    //     Message.error(error?.message ?? 'Something error!');
    //   } else {
    //     onLogoutSuccess();
    //   }
    // } catch (err) {
    //   console.log('logout-error :>> ', err.toString());
    // } finally {
    // }
    onLogoutSuccess();
  };

  const onLogoutSuccess = () => {
    reactLocalStorage.clear();
    const cookies = new Cookies();
    const accessToken = null;
    // cookies.set(Config.AUTH_TOKEN_KEY, accessToken, {
    //   expires: moment().add(60, 'day').toDate(),
    //   path: '/',
    // });

    cookies.remove(Config.AUTH_TOKEN_KEY);
    router.push(ROUTES.WELCOME);
  };

  return (
    <HomePageWrapper>
      <BannerWrap>
        <span className="banner-img-wrap">
          <img src="/static/images/bg-hero-section.webp" alt="toeic-test" className="banner-img" />
        </span>
        <div className="container">
          <div className="banner-content-wrap">
            <div className="app-info toeic">
              <img className="app-info-icon" src={'/static/images/app-icon.png'} />
              <div className="app-info-text">
                <div className="app-info-title">
                  <span className="app-info-name">TOEIC</span>
                  <span className="app-info-name-postfix">Test Pro</span>
                </div>
                <div className="app-info-subtitle">An amazing app for TOEIC test-takers</div>
              </div>
            </div>
            <div className="app-platform">
              <div className="download-app">
                <IconGoogleApp />
                <IconAppStore />
              </div>
              <div className="qr-app">
                <div className="qr-app-container">
                  <img src={'/static/images/QR.png'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerWrap>
    </HomePageWrapper>
  );
};

export default Home;
