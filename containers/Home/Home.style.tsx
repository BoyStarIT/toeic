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
  .ant-menu-submenu-horizontal > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .ant-menu-submenu-horizontal > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-horizontal > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(0, 0, 0, 0.85)),
      to(rgba(0, 0, 0, 0.85))
    );
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
    border-radius: 2px;
    -webkit-transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
  }

  .ant-menu-submenu-horizontal > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {
    -webkit-transform: rotate(45deg) translateY(-2px);
    transform: rotate(45deg) translateY(-2px);
  }

  .ant-menu-submenu-horizontal > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after,
  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {
    -webkit-transform: rotate(-45deg) translateY(2px);
    transform: rotate(-45deg) translateY(2px);
  }
`;
export const BannerWrap = styled.div``;
