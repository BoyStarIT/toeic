import { ROUTES } from '@constants';
import Link from 'next/link';
import React from 'react';
import { HeaderWrap, Layout } from './index.style';
import { Menu } from 'antd';

const MainLayout: React.FC = (props) => {
  return (
    <Layout>
      <HeaderWrap>
        <div className="container heading-wrap">
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
          <span className="btn-login">
            <Link href={ROUTES.SIGNIN}>Login</Link>
          </span>
        </div>
      </HeaderWrap>
      <main>{props.children}</main>
    </Layout>
  );
};

export default MainLayout;
