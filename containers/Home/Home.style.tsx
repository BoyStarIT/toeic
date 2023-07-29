import { styled, theme } from '@styles/theme';

export const HomePageWrapper = styled.div``;
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
export const BannerWrap = styled.div`
  min-height: 750px;
  background-color: transparent;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 0 10px;
  .banner-img-wrap {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    inset: 0px;
    z-index: -1;
    .banner-img {
      position: absolute;
      inset: 0px;
      box-sizing: border-box;
      padding: 0px;
      border: none;
      margin: auto;
      display: block;
      width: 0px;
      height: 0px;
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center 0px;
    }
  }
  .banner-content-wrap {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 576px) {
    .banner-content-wrap {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  @media (min-width: 1170px) {
    .banner-content-wrap {
      max-width: 1170px;
    }
  }
  .app-info {
    display: flex;
    column-gap: 16px;
    align-items: flex-start;
    &.toeic {
      margin-top: 150px;
    }
  }
  .app-info-icon {
    width: 130px;
    height: 130px;
  }
  .app-info-title {
    font-size: 80px;
    .app-info-name {
      color: #34447c !important;
      font-weight: 700;
    }
    .app-info-name-postfix {
      color: #34447c !important;
      font-weight: 800;
      letter-spacing: 2px;
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: #34447c;
      margin-left: 16px;
    }
  }
  .app-info-subtitle {
    color: var(--titleColor) !important;
    font-size: 43px;
  }
  .app-platform {
    margin-top: 40px;
    width: 416px;
    .download-app {
      display: flex;
      column-gap: 16px;
      .icon-gg-app,
      .icon-app-store {
        cursor: pointer;
        &:hover {
          fill: var(--appHoverBackground);
        }
      }
    }
    .qr-app {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 18px;
      .qr-app-container {
        display: inline-flex;
        padding: 8px;
        background-color: #fff;
        border-radius: 10px;
        > img {
          height: 180px;
          width: 180px;
        }
      }
    }
  }
`;
