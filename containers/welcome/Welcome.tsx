import { ROUTES } from '@constants';
import Link from 'next/link';
import { BannerWrap, WelcomePageWrapper } from './Welcome.style';
import { IconAppStore, IconGoogleApp } from '@ui/Svgs';

const Welcome = () => {
  return (
    <WelcomePageWrapper>
      <div className="welcome-content">
        <BannerWrap>
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
              <div className="welcome-join-now">
                <Link href={ROUTES.SIGNIN}>
                  <div className="btn-join-now">Join now</div>
                </Link>
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
      </div>
    </WelcomePageWrapper>
  );
};

export default Welcome;
