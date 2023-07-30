import { Col, Progress, Row } from 'antd';
import { ContentWrapper } from './Exam.style';
import QuestionPaletteRoot from './QuestionPaletteRoot';

type ExamLayoutProps = {
  children: React.ReactNode;
  listQuestion?: any[];
};
const ExamLayout: React.FC<ExamLayoutProps> = (props: ExamLayoutProps) => {
  return (
    <ContentWrapper>
      <div id="main-study-view" className="main-study-view">
        <div className="main-study-view-container container-wide">
          <div className="main-study-layout">
            <div className="study-layout-item study-layout-left">
              <div className="study-layout-left-wrap expand">
                <h2 className="MuiTypography-root MuiTypography-body1 root-topic-name css-100vuwi">
                  PART 1: PHOTOS
                </h2>
                <QuestionPaletteRoot listQuestion={props.listQuestion} />
                <div className="current-level-list-label">Lessons</div>
                <div
                  id="current-topic-lesson-list"
                  className="current-topic-list"
                  style={{ height: 130 }}
                >
                  <div className="topic-level-item item-lesson">
                    <div className="MuiBox-root css-nb2z2f">
                      <span className="level-wrap level-wrap-lesson">
                        <span className="level-name level-lesson-name dot-1">
                          Lesson 1: Predict what you will hear
                        </span>
                      </span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-selgsf"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        data-testid="CheckOutlinedIcon"
                      >
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <div
                      className="level-progress"
                      style={{
                        background: 'rgb(255, 255, 255)',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    />
                  </div>
                  <div className="topic-level-item item-lesson">
                    <div className="MuiBox-root css-nb2z2f">
                      <span className="level-wrap level-wrap-lesson">
                        <span className="level-name level-lesson-name dot-1">
                          Lesson 2: Listen for correct verb
                        </span>
                      </span>
                    </div>
                    <div
                      className="level-progress"
                      style={{
                        background: 'rgb(255, 255, 255)',
                        width: '0%',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                  </div>
                  <div className="topic-level-item item-lesson">
                    <div className="MuiBox-root css-nb2z2f">
                      <span className="level-wrap level-wrap-lesson">
                        <span className="level-name level-lesson-name dot-1">
                          Lesson 3: Listen for details{' '}
                        </span>
                      </span>
                    </div>
                    <div
                      className="level-progress"
                      style={{
                        background: 'rgb(255, 255, 255)',
                        width: '0%',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                  </div>
                  <div className="topic-level-item item-lesson">
                    <div className="MuiBox-root css-nb2z2f">
                      <span className="level-wrap level-wrap-lesson">
                        <span className="level-name level-lesson-name dot-1">
                          Lesson 4: Listen for prepositions and similar sounds{' '}
                        </span>
                      </span>
                    </div>
                    <div
                      className="level-progress"
                      style={{
                        background: 'rgb(255, 255, 255)',
                        width: '0%',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                  </div>
                </div>
                <div className="current-level-list-label">Practices</div>
                <div id="current-topic-list" className="current-topic-list" style={{ height: 130 }}>
                  <Row gutter={[8, 8]} className="mb-2">
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="614be60365d71f3a51f67196"
                          className="topic-level-item current-level after-connector"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 1</span>
                          </span>
                          <div
                            className="level-progress current-level"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '33%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="614be60765d71f3a51f67197"
                          className="topic-level-item after-connector no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 2</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div id="614be60d65d71f3a51f67198" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 3 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2 css-8o4imz">
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="614be61765d71f3a51f67199"
                          className="topic-level-item after-connector-reversed before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 4</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="614be61f65d71f3a51f6719a"
                          className="topic-level-item after-connector-reversed no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 5 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div id="614be62465d71f3a51f6719b" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 6</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2">
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="614be62965d71f3a51f6719c"
                          className="topic-level-item after-connector before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 7</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div
                          id="62e9f9865948b5402da82368"
                          className="topic-level-item after-connector no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 8 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="css-yp9ue7">
                        <div id="614be63565d71f3a51f6719e" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 9</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2 css-8o4imz">
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="614be64865d71f3a51f671a1"
                          className="topic-level-item after-connector-reversed before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 10 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea37995948b5402da824ef"
                          className="topic-level-item after-connector-reversed no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 11 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div id="62ea37b85948b5402da824f1" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 12 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2">
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea37c15948b5402da824f3"
                          className="topic-level-item after-connector before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 13 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea37d55948b5402da824f5"
                          className="topic-level-item after-connector no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 14</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div id="62ea4c145948b5402da8250f" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 15 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2 css-8o4imz">
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea4c1c5948b5402da82511"
                          className="topic-level-item after-connector-reversed before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 16 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea4c235948b5402da82513"
                          className="topic-level-item after-connector-reversed no-progress after-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 17 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div id="62ea4c295948b5402da82515" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 18 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[8, 8]} className="mb-2">
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div
                          id="62ea4c305948b5402da82517"
                          className="topic-level-item after-connector before-connector no-progress after-connector-2 before-connector-2"
                        >
                          <span className="level-wrap">
                            <span className="level-name">Test 19 </span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-yp9ue7">
                        <div id="62ea4c375948b5402da82519" className="topic-level-item no-progress">
                          <span className="level-wrap">
                            <span className="level-name">Test 20</span>
                          </span>
                          <div
                            className="level-progress"
                            style={{
                              background: 'rgb(255, 255, 255)',
                              width: '0%',
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="sub-list-container">
                  <div id="sub-topic-list" className="">
                    <div id="614be5e065d71f3a51f67194" className="sub-topic-item sub-active">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 1: PHOTOS</div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={6} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="614be5ef65d71f3a51f67195" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 2: QUESTION- RESPONSE</div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={8} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="61123a8c1e6e0c7cbe1059c4" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 3: CONVERSATIONS</div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={4} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="6135c39d08e2737191f34a96" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 4: SHORT TALKS </div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={0} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="613ffc9d65d71f3a51f6282e" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">
                          PART 5: INCOMPLETE SENTENCES
                        </div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={66} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="6140000a65d71f3a51f62a91" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 6: TEXT COMPLETION </div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={0} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="6140116b65d71f3a51f62c40" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 7: SINGLE PASSAGES</div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={0} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="6140117865d71f3a51f62c41" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 7: DOUBLE PASSAGES </div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={0} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                    <div id="6140118465d71f3a51f62c42" className="sub-topic-item">
                      <div className="sub-topic-item-header">
                        <div className="sub-topic-item-name dot-1">PART 7: TRIPLE PASSAGES </div>
                      </div>
                      <div className="sub-topic-progress">
                        <Progress percent={0} strokeColor={'#4CAF50'} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-banner-ads" />
              </div>
            </div>
            <div className="study-layout-item study-layout-mid">{props.children}</div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ExamLayout;
