import { IconAppStore, IconGoogleApp } from '@ui/Svgs';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { BannerWrap, HomeContentWrap, HomePageWrapper } from './Home.style';

const Home = () => {
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
      <HomeContentWrap className="container mb-5">
        <div className="toeic-subjects-tab-pane-wrap">
          <div className="toeic-subjects-tab-pane-item">
            <div className="toeic-subject-item mb-3">
              <h3 className="toeic-subject-item-title">Listening</h3>
              <div>
                <Row gutter={[16, 16]}>
                  <Col span={6} className="cursor-pointer">
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="toeic-subject-item mb-3">
              <h3 className="toeic-subject-item-title">Reading</h3>
              <div>
                <Row gutter={[16, 16]}>
                  <Col span={6} className="cursor-pointer">
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col span={6}>
                    <Link href={'#'}>
                      <div
                        className="part-item-data"
                        title="Part 1 - Photos: Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph."
                      >
                        <div className="part-item-data-avatar-wrap">
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              inset: 0,
                            }}
                          >
                            <img
                              alt="Part 1"
                              src="/static/images/home-part-1.webp"
                              decoding="async"
                              data-nimg="fill"
                              className="part-item-data-avatar"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                              }}
                              sizes="75vw"
                            />
                          </span>
                        </div>
                        <div className="part-item-data-content">
                          <div className="part-item-data-short-name dot-1">Part 1</div>
                          <div className="part-item-data-name dot-2">Photos</div>
                          <div className="part-item-data-desc dot-6">
                            Four short statements regarding a photograph will be spoken only one
                            time. Of these four statements, select the one. that best describes the
                            photograph.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </HomeContentWrap>
    </HomePageWrapper>
  );
};

export default Home;
