import { ROUTES } from '@constants';
import Link from 'next/link';
import { WelcomePageWrapper } from './Welcome.style';

const Welcome = () => {
  return (
    <WelcomePageWrapper>
      <div className="welcome-content">
        <div className="welcome-logo">
          <img src={'/static/images/Logo.png'} />
        </div>
        <div className="welcome-phone">
          <img src={'/static/images/welcome-sub-phone.png'} />
        </div>
        <div className="welcome-join-now">
          <Link href={ROUTES.SIGNIN}>
            <div className="btn-join-now">Join now</div>
          </Link>
        </div>
      </div>
    </WelcomePageWrapper>
  );
};

export default Welcome;
