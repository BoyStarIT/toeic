import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { LeftContentWrap } from './index.style';
import Link from 'next/link';
import { ROUTES } from '@constants';
import { useRouter } from 'next/router';

const LeftContent: React.FC = () => {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  useEffect(() => {
    const key = router.pathname.split('/')?.[2];
    if (!key) {
      router.push(ROUTES.ADMIN_USER);
    }
    setSelectedKeys([key]);
  }, [router]);
  return (
    <LeftContentWrap>
      <Menu selectedKeys={selectedKeys} mode="inline" theme="dark" className="heading-menu">
        <Menu.Item key="user">
          <Link href={ROUTES.ADMIN_USER}>User</Link>
        </Menu.Item>
        <Menu.Item key="skill">
          <Link href={ROUTES.ADMIN_SKILL}>Skill</Link>
        </Menu.Item>
        <Menu.Item key="topic">
          <Link href={ROUTES.ADMIN_TOPIC}>Topic</Link>
        </Menu.Item>
        <Menu.Item key="exam">
          <Link href={ROUTES.ADMIN_EXAM}>Exam</Link>
        </Menu.Item>
        {/* <Menu.Item key="Card">Card</Menu.Item>
        <Menu.Item key="System-Setting">System Setting</Menu.Item> */}
      </Menu>
    </LeftContentWrap>
  );
};

export default LeftContent;
