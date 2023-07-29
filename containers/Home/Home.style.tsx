import { styled, theme } from '@styles/theme';

export const HomePageWrapper = styled.div``;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e72b1;
  color: #9bc9ff;
  font-size: 16px;
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
export const BannerWrap = styled.div``;
