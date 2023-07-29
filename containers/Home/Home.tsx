import { ROUTES } from '@constants';
import Config from '@root/config';
import { reactLocalStorage } from '@utils';
import { Menu } from 'antd';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { BannerWrap, HeaderWrap, HomePageWrapper } from './Home.style';
import { DownOutlined } from '@ant-design/icons';

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

  const [wallet, setWallet] = useState({ hic: 0, usd: 0, hpoint: 0 });
  useEffect(() => {
    // try {
    //   const resp: any = getWallet();
    //   const error = resp.data?.error;
    //   const respData = resp.data?.data;
    //   if (error) {
    //     stop();
    //     Message.error(error?.message ?? 'Something error!');
    //   } else {
    //     if (respData != null) {
    //       setWallet(respData);
    //     }
    //   }
    // } catch (err) {
    //   stop();
    //   console.log('onSubmit-error :>> ', err.toString());
    // } finally {
    // }
    // const cookies = new Cookies();
    // const token = cookies.get(Config.AUTH_TOKEN_KEY);
    // if (!token) {
    //   router.push(ROUTES.SIGNIN);
    // } else {
    //   const data = reactLocalStorage.getObject(Config.WALLET_KEY, null);
    //   if (data) {
    //     setWallet(data);
    //   }
    // }
  }, []);

  return (
    <HomePageWrapper>
      <HeaderWrap>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.SubMenu key="practice-lr" title={<>Practice L&R</>}>
            <Menu.Item key="part-1">Part 1: Photos</Menu.Item>
            <Menu.Item key="part-2">Part 2: Question - Response</Menu.Item>
            <Menu.Item key="part-3">Part 3: Conversations</Menu.Item>
            <Menu.Item key="part-4">Part 4: Short Talks</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="practice-sw">Practice S&W</Menu.Item>
          <Menu.SubMenu key="test" title="Test">
            <Menu.Item key="test-1">Simulation Test</Menu.Item>
            <Menu.Item key="test-2">Full Test</Menu.Item>
            <Menu.Item key="test-3">Mini Test</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="grammar">Grammar</Menu.Item>
          <Menu.Item key="vocabulary">Vocabulary</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.SubMenu key="toeic-tips" title="TOEIC Tips">
            <Menu.Item key="test-2">TOEIC Listening Tips</Menu.Item>
            <Menu.Item key="test-3">TOEIC Reading Tips</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <span className="btn-login">Login</span>
      </HeaderWrap>
      <BannerWrap>
        <div>
          <div>
            <div>
              <img src={'/static/images/app-icon.png'} />
            </div>
            <div>
              <div>TOEIC Test Pro</div>
              <div>An amazing</div>
            </div>
          </div>
          <div>
            <img src={'/static/images/app-icon.png'} />
            <img src={'/static/images/app-icon.png'} />
          </div>
          <div>
            <img src={'/static/images/QR.png'} />
          </div>
        </div>
      </BannerWrap>
    </HomePageWrapper>
  );
};

export default Home;
