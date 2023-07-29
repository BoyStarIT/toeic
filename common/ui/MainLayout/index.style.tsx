import { styled } from '@styles/theme';

export const Layout = styled.div``;
export const HeaderWrap = styled.div`
  background-color: #2e72b1;
  display: flex;
  justify-content: center;
  .heading-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  color: #9bc9ff;
  font-size: 16px;
  height: 60px;
  padding-bottom: 3px;
  .ant-menu.ant-menu-root {
    background-color: transparent;
    color: #9bc9ff;
    border: none;
    font-size: 16px;
    & > .ant-menu-item::after,
    & > .ant-menu-submenu::after {
      content: none;
    }
    .ant-menu-item-selected,
    .ant-menu-item-active,
    .ant-menu-submenu-selected,
    .ant-menu-submenu-active,
    .ant-menu-submenu:hover,
    .ant-menu-item:hover,
    .ant-menu-item:hover,
    .ant-menu-item-active,
    .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
    .ant-menu-submenu-active,
    .ant-menu-submenu-title:hover {
      color: #ffffff;
    }
  }
`;
