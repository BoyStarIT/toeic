import { Col, Progress, Row } from 'antd';
import { ContentWrapper } from './Exam.style';
import { RightOutlined } from '@ant-design/icons';

const Exam = () => {
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
                <div className="jss27 question-palette-root">
                  <div className="current-topic-label question-palette-game-title">Test 1</div>
                  <div className="question-palette-main">
                    <div className="question-palette-header">
                      <div className="question-palette-title">Question Palette</div>
                    </div>
                    <div className="question-palette-body">
                      <div
                        className="questions-list questions-list-custom"
                        id="question-list-scroll"
                      >
                        <div
                          className="question-list-row"
                          style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}
                        >
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-incorrect css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671ad"
                          >
                            1<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-incorrect css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671ac"
                          >
                            2<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-correct css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671aa"
                          >
                            3<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-correct css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671ae"
                          >
                            4<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-incorrect css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671ab"
                          >
                            5<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium question-item question-palette-item-custom p-item-incorrect css-1yxmbwk"
                            tabIndex={0}
                            type="button"
                            id="pallete-item-614be68d65d71f3a51f671af"
                          >
                            6<span className="MuiTouchRipple-root css-w0pj6f" />
                          </button>
                        </div>
                      </div>
                      <div className="question-stat-progress">
                        <div className="jss28">
                          <div className="questions-stat-item">
                            <svg
                              width={10}
                              height={11}
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect y="0.5" width={10} height={10} rx={3} fill="#4caf50" />
                            </svg>
                            <span className="questions-stat-item-text">2/6 Correct</span>
                          </div>
                          <div className="questions-stat-item">
                            <svg
                              width={10}
                              height={11}
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect y="0.5" width={10} height={10} rx={3} fill="#FF5252" />
                            </svg>
                            <span className="questions-stat-item-text">4/6 Incorrect</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="question-palette-footer question-palette-footer-custom" />
                  </div>
                </div>
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
            <div className="study-layout-item study-layout-mid">
              <div id="game-view-container" className="game-view-container-main">
                <div id="main-game-view" className="">
                  <div id="main-game-scroll-panel" className="main-game-object">
                    <div className="module-game-overview-component">
                      <div className="main-game-overview-bgr">
                        <span className="bubble-top-left" />
                        <span className="small-bubble-left" />
                        <span className="ellipse-left" />
                        <span className="ellipse-right" />
                        <span className="bubble-right" />
                      </div>
                      <div className="main-game-overview-data">
                        <div className="main-progress">
                          <div className="main-progress-box" />
                          <div className="box-layer-2" />
                          <div className="box-layer-3">
                            <svg
                              className="CircularProgressbar progress-main"
                              viewBox="0 0 100 100"
                              data-test-id="CircularProgressbar"
                            >
                              <path
                                className="CircularProgressbar-trail"
                                d="
                                  M 50,50
                                  m 0,-47
                                  a 47,47 0 1 1 0,94
                                  a 47,47 0 1 1 0,-94
                                      "
                                strokeWidth={6}
                                fillOpacity={0}
                                style={{
                                  stroke: 'rgb(220, 226, 238)',
                                  strokeDasharray: '295.31px, 295.31px',
                                  strokeDashoffset: 0,
                                }}
                              />
                              <path
                                className="CircularProgressbar-path"
                                d="
                                M 50,50
                                m 0,-47
                                a 47,47 0 1 1 0,94
                                a 47,47 0 1 1 0,-94
                                    "
                                strokeWidth={6}
                                fillOpacity={0}
                                style={{
                                  stroke: 'rgb(108, 129, 254)',
                                  strokeDasharray: '295.31px, 295.31px',
                                  strokeDashoffset: '197.858px',
                                }}
                              />
                            </svg>
                          </div>
                          <span className="percent-text">33%</span>
                        </div>
                        <div className="main-statistics">
                          <div className="main-statistics-questions-stat">
                            <div className="main-stats-data-questions-stat-item item-total">
                              <div
                                className="questions-stat-item-value"
                                style={{ color: 'rgb(132, 155, 182)' }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={13}
                                  viewBox="0 0 12 13"
                                  fill="none"
                                >
                                  <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#849BB6" />
                                </svg>
                                6
                              </div>
                              <div className="questions-stat-item-label">Total</div>
                            </div>
                            <div className="main-stats-data-questions-stat-item item-correct">
                              <div
                                className="questions-stat-item-value"
                                style={{ color: 'rgb(130, 188, 36)' }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={13}
                                  viewBox="0 0 12 13"
                                  fill="none"
                                >
                                  <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#82BC24" />
                                </svg>
                                2
                              </div>
                              <div className="questions-stat-item-label">Correct</div>
                            </div>
                            <div className="main-stats-data-questions-stat-item item-incorrect">
                              <div
                                className="questions-stat-item-value"
                                style={{ color: 'rgb(255, 84, 84)' }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={13}
                                  viewBox="0 0 12 13"
                                  fill="none"
                                >
                                  <circle cx="6.28342" cy="6.48361" r="5.68967" fill="#FF5454" />
                                </svg>
                                4
                              </div>
                              <div className="questions-stat-item-label">Incorrect</div>
                            </div>
                          </div>
                          <div className="main-statistics-questions-button">
                            <button
                              className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-1bya90x"
                              tabIndex={0}
                              type="button"
                            >
                              REVIEW
                              <span className="MuiTouchRipple-root css-w0pj6f" />
                            </button>
                            <button
                              className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-lv9ort"
                              tabIndex={0}
                              type="button"
                            >
                              TRY AGAIN
                              <span className="MuiTouchRipple-root css-w0pj6f" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="main-game-overview-question-categories">
                        <div className="question-categories-title">
                          Press and Practice Your Category Again Below
                        </div>
                        <div className="question-categories-list">
                          <div className="MuiBox-root css-176iyts">
                            <div className="MuiBox-root css-tkw370">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1vacozs"
                                tabIndex={0}
                                type="button"
                              >
                                6<span className="MuiTouchRipple-root css-w0pj6f" />
                              </button>
                            </div>
                            <span className="MuiTypography-root MuiTypography-body1 css-gu1cw0">
                              Total
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={9}
                            viewBox="0 0 36 9"
                            fill="none"
                            className="divider-continue-box"
                            style={{ width: 36 }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                              fill="#214D45"
                            />
                          </svg>
                          <div className="MuiBox-root css-176iyts">
                            <div className="MuiBox-root css-tkw370">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-64idhc"
                                tabIndex={0}
                                type="button"
                              >
                                0<span className="MuiTouchRipple-root css-w0pj6f" />
                              </button>
                            </div>
                            <span className="MuiTypography-root MuiTypography-body1 css-ivwblt">
                              New
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={9}
                            viewBox="0 0 36 9"
                            fill="none"
                            className="divider-continue-box"
                            style={{ width: 36 }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                              fill="#214D45"
                            />
                          </svg>
                          <div className="MuiBox-root css-176iyts">
                            <div className="MuiBox-root css-tkw370">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-16yci69"
                                tabIndex={0}
                                type="button"
                              >
                                2<span className="MuiTouchRipple-root css-w0pj6f" />
                              </button>
                            </div>
                            <span className="MuiTypography-root MuiTypography-body1 css-6kw39w">
                              Correct
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={9}
                            viewBox="0 0 36 9"
                            fill="none"
                            className="divider-continue-box"
                            style={{ width: 36 }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.48249 8.09296C2.3116 8.09296 0.551758 6.3331 0.551758 4.1622C0.551758 1.99131 2.3116 0.231445 4.48249 0.231445C5.93799 0.231445 7.20873 1.02255 7.88817 2.19824L28.595 2.19824C29.2744 1.02255 30.545 0.231445 32.0005 0.231445C34.1712 0.231445 35.9309 1.99131 35.9309 4.1622C35.9309 6.3331 34.1712 8.09296 32.0005 8.09296C30.5462 8.09296 29.2764 7.30312 28.5966 6.129L7.88653 6.129C7.20669 7.30312 5.93683 8.09296 4.48249 8.09296Z"
                              fill="#214D45"
                            />
                          </svg>
                          <div className="MuiBox-root css-176iyts">
                            <div className="MuiBox-root css-tkw370">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1s5ncj6"
                                tabIndex={0}
                                type="button"
                              >
                                4<span className="MuiTouchRipple-root css-w0pj6f" />
                              </button>
                            </div>
                            <span className="MuiTypography-root MuiTypography-body1 css-js2k7p">
                              Incorrect
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-game-object-buttons" />
                </div>
                <div id="main-game-review-section" className="">
                  <div id="review-614be68d65d71f3a51f671ad">
                    <div className="question-index-title">Question 1: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671ad)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671ad"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671ad"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:28</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/5911589_1562638438001.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0.998291H10.8393C5.31513 0.998291 0.836914 5.4765 0.836914 11.0007V15.9959C0.836914 21.5201 5.31513 25.9983 10.8393 25.9983H15.8345C21.3587 25.9983 25.8369 21.5201 25.8369 15.9959V11.0007C25.8369 5.4765 21.3587 0.998291 15.8345 0.998291Z"
                                      fill="#FF5252"
                                    />
                                    <g filter="url(#filter0_d_263_983)">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.5659 9.92491C10.6872 9.97551 10.7972 10.0496 10.8896 10.1429L13.339 12.5836L15.7814 10.143C15.8738 10.0496 15.9839 9.97552 16.1052 9.92491C16.2266 9.87424 16.3569 9.84814 16.4884 9.84814C16.62 9.84814 16.7503 9.87424 16.8717 9.92491C16.993 9.97554 17.1031 10.0497 17.1956 10.1432C17.3822 10.3308 17.487 10.5846 17.487 10.8491C17.487 11.1138 17.3819 11.3679 17.1952 11.5555L14.7527 13.9962L17.1955 16.4441C17.3822 16.6317 17.487 16.8856 17.487 17.1502C17.487 17.4148 17.3816 17.6693 17.1949 17.8569C17.0072 18.0434 16.7532 18.1481 16.4884 18.1481C16.2237 18.1481 15.9693 18.043 15.7815 17.8564L13.339 15.4088L10.8891 17.8569C10.7014 18.0434 10.4474 18.1481 10.1826 18.1481C9.91791 18.1481 9.66393 18.0434 9.47618 17.8569L9.47471 17.8554C9.29029 17.6669 9.18701 17.4138 9.18701 17.1502C9.18701 16.8866 9.29029 16.6335 9.47471 16.445L9.47589 16.4438L11.9254 13.9962L9.47471 11.5543C9.29029 11.3659 9.18701 11.1127 9.18701 10.8491C9.18701 10.5855 9.29086 10.3318 9.47527 10.1433C9.56779 10.0498 9.67795 9.97558 9.79937 9.92491C9.92079 9.87424 10.0511 9.84814 10.1826 9.84814C10.3142 9.84814 10.4445 9.87424 10.5659 9.92491Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_263_983"
                                        x="6.18701"
                                        y="8.84814"
                                        width="14.2998"
                                        height="14.3"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                      >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy={2} />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.7375 0 0 0 0 0.277792 0 0 0 0 0.443287 0 0 0 0.1 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_263_983"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_263_983"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content incorrect">(A)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content">(B)</div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b> <br />
                                    (A) The man is using a screwdriver to screw a nail into the
                                    building frame. <br />
                                    <b>
                                      {' '}
                                      (B) The man is hammering something into a building frame.{' '}
                                    </b>
                                    <br />
                                    (C) The man is making the frame with his hand. <br />
                                    (D) The man is wearing protective glasses.
                                  </div>
                                </div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(D)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                  </div>
                  <div id="review-614be68d65d71f3a51f671ac">
                    <div className="question-index-title">Question 2: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671ac)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671ac"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671ac"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:25</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/3555841_1562638435196.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/3555841_1562638435196.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/3555841_1562638435196.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/3555841_1562638435196.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content">(A)</div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b> <br />
                                    <b> (A) The man is holding some seafood. </b>
                                    <br />
                                    (B) The woman is baking a crab. <br />
                                    (C) They are scared of the crab. <br />
                                    (D) The family is shopping for breakfast.
                                  </div>
                                </div>
                              </div>
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0.998291H10.8393C5.31513 0.998291 0.836914 5.4765 0.836914 11.0007V15.9959C0.836914 21.5201 5.31513 25.9983 10.8393 25.9983H15.8345C21.3587 25.9983 25.8369 21.5201 25.8369 15.9959V11.0007C25.8369 5.4765 21.3587 0.998291 15.8345 0.998291Z"
                                      fill="#FF5252"
                                    />
                                    <g filter="url(#filter0_d_263_983)">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.5659 9.92491C10.6872 9.97551 10.7972 10.0496 10.8896 10.1429L13.339 12.5836L15.7814 10.143C15.8738 10.0496 15.9839 9.97552 16.1052 9.92491C16.2266 9.87424 16.3569 9.84814 16.4884 9.84814C16.62 9.84814 16.7503 9.87424 16.8717 9.92491C16.993 9.97554 17.1031 10.0497 17.1956 10.1432C17.3822 10.3308 17.487 10.5846 17.487 10.8491C17.487 11.1138 17.3819 11.3679 17.1952 11.5555L14.7527 13.9962L17.1955 16.4441C17.3822 16.6317 17.487 16.8856 17.487 17.1502C17.487 17.4148 17.3816 17.6693 17.1949 17.8569C17.0072 18.0434 16.7532 18.1481 16.4884 18.1481C16.2237 18.1481 15.9693 18.043 15.7815 17.8564L13.339 15.4088L10.8891 17.8569C10.7014 18.0434 10.4474 18.1481 10.1826 18.1481C9.91791 18.1481 9.66393 18.0434 9.47618 17.8569L9.47471 17.8554C9.29029 17.6669 9.18701 17.4138 9.18701 17.1502C9.18701 16.8866 9.29029 16.6335 9.47471 16.445L9.47589 16.4438L11.9254 13.9962L9.47471 11.5543C9.29029 11.3659 9.18701 11.1127 9.18701 10.8491C9.18701 10.5855 9.29086 10.3318 9.47527 10.1433C9.56779 10.0498 9.67795 9.97558 9.79937 9.92491C9.92079 9.87424 10.0511 9.84814 10.1826 9.84814C10.3142 9.84814 10.4445 9.87424 10.5659 9.92491Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_263_983"
                                        x="6.18701"
                                        y="8.84814"
                                        width="14.2998"
                                        height="14.3"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                      >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy={2} />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.7375 0 0 0 0 0.277792 0 0 0 0 0.443287 0 0 0 0.1 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_263_983"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_263_983"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content incorrect">(B)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(D)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                  </div>
                  <div id="review-614be68d65d71f3a51f671aa">
                    <div className="question-index-title">Question 3: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671aa)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671aa"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671aa"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:18</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/5656089_1562638419203.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/5656089_1562638419203.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/5656089_1562638419203.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/5656089_1562638419203.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content correct">(A) </div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b> <br />
                                    <b> (A) The woman is talking on the phone. </b>
                                    <br />
                                    (B) The woman is using her cell phone. <br />
                                    (C) The woman is typing on the laptop. <br />
                                    (D) The woman is writing in her notebook..
                                  </div>
                                </div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(B)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(D)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                  </div>
                  <div id="review-614be68d65d71f3a51f671ae">
                    <div className="question-index-title">Question 4: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671ae)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671ae"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671ae"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:26</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/973355_1562638439675.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/973355_1562638439675.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/973355_1562638439675.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/973355_1562638439675.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content correct">(A)</div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b> <br />
                                    <b> (A) There are some tables and chairs outdoors. </b>
                                    <br />
                                    (B) There are some people sitting at the tables. <br />
                                    (C) There are plastic umbrellas on the tables. <br />
                                    (D) There are many flowers in the garden.
                                  </div>
                                </div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(B)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(D)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                  </div>
                  <div id="review-614be68d65d71f3a51f671ab">
                    <div className="question-index-title">Question 5: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671ab)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671ab"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671ab"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:24</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/3672944_1562638433179.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/3672944_1562638433179.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/3672944_1562638433179.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/3672944_1562638433179.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content">(A)</div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b> <br />
                                    <b> (A) The woman is cooking some bacon. </b>
                                    <br />
                                    (B) The woman is baking a cake. <br />
                                    (C) The woman is preparing for dinner. <br />
                                    (D) The woman is frying some fish.
                                  </div>
                                </div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(B)</div>
                              </div>
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0.998291H10.8393C5.31513 0.998291 0.836914 5.4765 0.836914 11.0007V15.9959C0.836914 21.5201 5.31513 25.9983 10.8393 25.9983H15.8345C21.3587 25.9983 25.8369 21.5201 25.8369 15.9959V11.0007C25.8369 5.4765 21.3587 0.998291 15.8345 0.998291Z"
                                      fill="#FF5252"
                                    />
                                    <g filter="url(#filter0_d_263_983)">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.5659 9.92491C10.6872 9.97551 10.7972 10.0496 10.8896 10.1429L13.339 12.5836L15.7814 10.143C15.8738 10.0496 15.9839 9.97552 16.1052 9.92491C16.2266 9.87424 16.3569 9.84814 16.4884 9.84814C16.62 9.84814 16.7503 9.87424 16.8717 9.92491C16.993 9.97554 17.1031 10.0497 17.1956 10.1432C17.3822 10.3308 17.487 10.5846 17.487 10.8491C17.487 11.1138 17.3819 11.3679 17.1952 11.5555L14.7527 13.9962L17.1955 16.4441C17.3822 16.6317 17.487 16.8856 17.487 17.1502C17.487 17.4148 17.3816 17.6693 17.1949 17.8569C17.0072 18.0434 16.7532 18.1481 16.4884 18.1481C16.2237 18.1481 15.9693 18.043 15.7815 17.8564L13.339 15.4088L10.8891 17.8569C10.7014 18.0434 10.4474 18.1481 10.1826 18.1481C9.91791 18.1481 9.66393 18.0434 9.47618 17.8569L9.47471 17.8554C9.29029 17.6669 9.18701 17.4138 9.18701 17.1502C9.18701 16.8866 9.29029 16.6335 9.47471 16.445L9.47589 16.4438L11.9254 13.9962L9.47471 11.5543C9.29029 11.3659 9.18701 11.1127 9.18701 10.8491C9.18701 10.5855 9.29086 10.3318 9.47527 10.1433C9.56779 10.0498 9.67795 9.97558 9.79937 9.92491C9.92079 9.87424 10.0511 9.84814 10.1826 9.84814C10.3142 9.84814 10.4445 9.87424 10.5659 9.92491Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_263_983"
                                        x="6.18701"
                                        y="8.84814"
                                        width="14.2998"
                                        height="14.3"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                      >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy={2} />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.7375 0 0 0 0 0.277792 0 0 0 0 0.443287 0 0 0 0.1 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_263_983"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_263_983"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content incorrect">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(D)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="MuiDivider-root MuiDivider-fullWidth css-39bbo6" />
                  </div>
                  <div id="review-614be68d65d71f3a51f671af">
                    <div className="question-index-title">Question 6: </div>
                    <div className="game-object-view-container">
                      <div className="game-object-menu game-object-view-menu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall feedback-report-item game-object-menu-item css-1j7qk7u"
                          tabIndex={0}
                          type="button"
                          aria-label="Feedback"
                        >
                          <svg
                            width={18}
                            height={19}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.26693 2.58873C2.55665 1.18257 4.19504 0.64707 5.59893 0.613771C7.50369 0.61268 8.91016 1.07394 10.0338 1.93423C12.6503 3.93758 12.6611 7.45572 10.0322 9.43942C8.29255 10.7517 6.34819 11.035 4.29018 10.553C4.031 10.4924 3.87158 10.5579 3.72142 10.767C3.32596 11.3161 2.9228 11.8593 2.52117 12.4035C2.3093 12.6906 2.30673 12.6895 2.18486 12.3642C1.56982 10.7178 0.951694 9.07259 0.342314 7.42406C-0.330833 5.60358 -0.00531673 3.97525 1.26693 2.58873ZM8.00148 6.36398C8.36763 6.36452 8.65509 6.05119 8.64686 5.66035C8.63915 5.28916 8.33986 4.9802 7.99788 4.99057C7.6374 5.00148 7.37308 5.29407 7.3741 5.68109C7.37513 6.06648 7.64768 6.36343 8.00148 6.36398ZM6.00158 6.36343C6.35796 6.36452 6.63308 6.07303 6.63616 5.69037C6.63925 5.3028 6.3415 4.98129 5.9877 4.99111C5.64418 5.00094 5.36238 5.31591 5.36495 5.6871C5.36752 6.06539 5.64675 6.36234 6.00158 6.36343ZM4.00631 6.36343C4.35034 6.36016 4.65426 6.03864 4.65118 5.68109C4.64809 5.30772 4.32823 4.9802 3.97803 4.99111C3.63194 5.00203 3.35065 5.32136 3.35888 5.69365C3.36659 6.07194 3.652 6.36671 4.00631 6.36343Z"
                              fill="url(#paint_linear_614be68d65d71f3a51f671af)"
                            />
                            <defs>
                              <linearGradient
                                id="paint_linear_614be68d65d71f3a51f671af"
                                x1={6}
                                y1="0.61377"
                                x2={6}
                                y2="12.6138"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#65AFFF" />
                                <stop offset={1} stopColor="#006FE9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f" />
                        </button>
                      </div>
                      <div className="normal-root-container">
                        <div
                          className="game-object-view game-object-quiz"
                          id="game-object-view-614be68d65d71f3a51f671af"
                        >
                          <div className="question-index-container">
                            <div className="question-index-wrap">
                              <div className="game-object-question quiz-game-object-question">
                                <div className="game-object-question-sound">
                                  <div className="custom-react-audio-player">
                                    <button
                                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__ css-1yxmbwk"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-testid="PlayArrowIcon"
                                      >
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                    <div className="current-time-audio-player">00:00 / 00:25</div>
                                    <div
                                      className="audio-progress-control"
                                      style={{
                                        marginRight: 30,
                                        transition: 'all 0.5s ease 0s',
                                      }}
                                    >
                                      <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-progress-control-slider css-exkjcx">
                                        <span className="audio-progress-control-slider-rail MuiSlider-rail css-b04pc9" />
                                        <span
                                          className="audio-progress-control-slider-track MuiSlider-track css-1t2bqnt"
                                          style={{ left: '0%', width: '0%' }}
                                        />
                                        <span
                                          data-index={0}
                                          className="audio-progress-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                          style={{ left: '0%' }}
                                        >
                                          <input
                                            data-index={0}
                                            aria-orientation="horizontal"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            type="range"
                                            min={0}
                                            max={100}
                                            step="0.01"
                                            defaultValue={0}
                                            style={{
                                              border: 0,
                                              clip: 'rect(0px, 0px, 0px, 0px)',
                                              height: '100%',
                                              margin: '-1px',
                                              overflow: 'hidden',
                                              padding: 0,
                                              position: 'absolute',
                                              whiteSpace: 'nowrap',
                                              width: '100%',
                                              direction: 'ltr',
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </div>
                                    <div className="audio-speed-control" style={{ zIndex: 1 }}>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1j7qk7u"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="Playback speed"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="SlowMotionVideoIcon"
                                        >
                                          <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <span className="audio-speed-control-label">1x</span>
                                    </div>
                                    <div className="icon-button-audio-player">
                                      <div className="wrapper-audio-player">
                                        <div className="audio-volume-control">
                                          <span className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root audio-volume-control-slider css-exkjcx">
                                            <span className="audio-volume-control-slider-rail MuiSlider-rail css-b04pc9" />
                                            <span
                                              className="audio-volume-control-slider-track MuiSlider-track css-1t2bqnt"
                                              style={{ left: '0%', width: '75%' }}
                                            />
                                            <span
                                              data-index={0}
                                              className="audio-volume-control-slider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp"
                                              style={{ left: '75%' }}
                                            >
                                              <input
                                                data-index={0}
                                                aria-orientation="horizontal"
                                                aria-valuemax={100}
                                                aria-valuemin={0}
                                                aria-valuenow={75}
                                                type="range"
                                                min={0}
                                                max={100}
                                                step="0.01"
                                                defaultValue={75}
                                                style={{
                                                  border: 0,
                                                  clip: 'rect(0px, 0px, 0px, 0px)',
                                                  height: '100%',
                                                  margin: '-1px',
                                                  overflow: 'hidden',
                                                  padding: 0,
                                                  position: 'absolute',
                                                  whiteSpace: 'nowrap',
                                                  width: '100%',
                                                  direction: 'ltr',
                                                }}
                                              />
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="volumeAudio">
                                        <button
                                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium iconButton__volume css-1yxmbwk"
                                          tabIndex={0}
                                          type="button"
                                        >
                                          <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            data-testid="VolumeUpIcon"
                                          >
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                          </svg>
                                          <span className="MuiTouchRipple-root css-w0pj6f" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="game-object-question-image">
                                  <div
                                    className="game-image-widget-container"
                                    style={{ width: 300 }}
                                  >
                                    <img
                                      src="https://storage.googleapis.com/kstoeic/images/6539040_1562638443130.png"
                                      alt="https://storage.googleapis.com/kstoeic/images/6539040_1562638443130.png"
                                      style={{ width: '100%' }}
                                    />
                                    <div className="game-image-widget">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-preview css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Preview"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="VisibilityIcon"
                                        >
                                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-in css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom In"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomInIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                          <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium game-image-widget-button game-image-widget-zoom-out css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                        title="Zoom Out"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="ZoomOutIcon"
                                        >
                                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="game-image-widget-backdrop-preview MuiBackdrop-root css-um19vb"
                                      style={{ opacity: 0, visibility: 'hidden' }}
                                    >
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium preview-close css-1yxmbwk"
                                        tabIndex={0}
                                        type="button"
                                      >
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                          focusable="false"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          data-testid="CloseIcon"
                                        >
                                          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        </svg>
                                        <span className="MuiTouchRipple-root css-w0pj6f" />
                                      </button>
                                      <img
                                        src="https://storage.googleapis.com/kstoeic/images/6539040_1562638443130.png"
                                        className="image-preview"
                                        alt="preview-https://storage.googleapis.com/kstoeic/images/6539040_1562638443130.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="game-object-quiz-playzone">
                            <div className="game-object-quiz-choices">
                              <div className="quiz-choice-item picking show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={26}
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0.998291H10.8393C5.31513 0.998291 0.836914 5.4765 0.836914 11.0007V15.9959C0.836914 21.5201 5.31513 25.9983 10.8393 25.9983H15.8345C21.3587 25.9983 25.8369 21.5201 25.8369 15.9959V11.0007C25.8369 5.4765 21.3587 0.998291 15.8345 0.998291Z"
                                      fill="#FF5252"
                                    />
                                    <g filter="url(#filter0_d_263_983)">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.5659 9.92491C10.6872 9.97551 10.7972 10.0496 10.8896 10.1429L13.339 12.5836L15.7814 10.143C15.8738 10.0496 15.9839 9.97552 16.1052 9.92491C16.2266 9.87424 16.3569 9.84814 16.4884 9.84814C16.62 9.84814 16.7503 9.87424 16.8717 9.92491C16.993 9.97554 17.1031 10.0497 17.1956 10.1432C17.3822 10.3308 17.487 10.5846 17.487 10.8491C17.487 11.1138 17.3819 11.3679 17.1952 11.5555L14.7527 13.9962L17.1955 16.4441C17.3822 16.6317 17.487 16.8856 17.487 17.1502C17.487 17.4148 17.3816 17.6693 17.1949 17.8569C17.0072 18.0434 16.7532 18.1481 16.4884 18.1481C16.2237 18.1481 15.9693 18.043 15.7815 17.8564L13.339 15.4088L10.8891 17.8569C10.7014 18.0434 10.4474 18.1481 10.1826 18.1481C9.91791 18.1481 9.66393 18.0434 9.47618 17.8569L9.47471 17.8554C9.29029 17.6669 9.18701 17.4138 9.18701 17.1502C9.18701 16.8866 9.29029 16.6335 9.47471 16.445L9.47589 16.4438L11.9254 13.9962L9.47471 11.5543C9.29029 11.3659 9.18701 11.1127 9.18701 10.8491C9.18701 10.5855 9.29086 10.3318 9.47527 10.1433C9.56779 10.0498 9.67795 9.97558 9.79937 9.92491C9.92079 9.87424 10.0511 9.84814 10.1826 9.84814C10.3142 9.84814 10.4445 9.87424 10.5659 9.92491Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d_263_983"
                                        x="6.18701"
                                        y="8.84814"
                                        width="14.2998"
                                        height="14.3"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                      >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy={2} />
                                        <feGaussianBlur stdDeviation="1.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0.7375 0 0 0 0 0.277792 0 0 0 0 0.443287 0 0 0 0.1 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_263_983"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropShadow_263_983"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content incorrect">(A)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(B)</div>
                              </div>
                              <div className="quiz-choice-item show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    className="quiz-choice-item-icon-svg"
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.8393 0.999268H15.8345C20.8064 0.999268 24.8369 5.02977 24.8369 10.0016V14.9969C24.8369 19.9688 20.8064 23.9993 15.8345 23.9993H10.8393C5.86741 23.9993 1.83691 19.9688 1.83691 14.9969V10.0016C1.83691 5.02976 5.86741 0.999268 10.8393 0.999268Z"
                                      fill="white"
                                      stroke="#D2D2D2"
                                      strokeWidth={2}
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content not-selected">(C)</div>
                              </div>
                              <div className="quiz-choice-item item-last show-result">
                                <div className="quiz-choice-item-icon show-result">
                                  <svg
                                    width={26}
                                    height={25}
                                    viewBox="0 0 26 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.8345 0H10.8393C5.31513 0 0.836914 4.47821 0.836914 10.0024V14.9976C0.836914 20.5218 5.31513 25 10.8393 25H15.8345C21.3587 25 25.8369 20.5218 25.8369 14.9976V10.0024C25.8369 4.47821 21.3587 0 15.8345 0Z"
                                      fill="#4CAF50"
                                    />
                                    <path
                                      d="M17.9387 8.80472C17.8296 8.70115 17.7018 8.62102 17.5627 8.56896C17.4236 8.5169 17.276 8.49392 17.1283 8.50137C16.9807 8.50881 16.8359 8.54653 16.7023 8.61234C16.5688 8.67814 16.449 8.77074 16.3501 8.88481C15.9747 9.28527 15.6251 9.71244 15.255 10.1236L12.2267 13.5729C11.5532 12.9055 10.926 12.2594 10.273 11.64C10.0537 11.425 9.76221 11.3075 9.46065 11.3125C9.15909 11.3175 8.87131 11.4446 8.65867 11.6667C8.55432 11.7785 8.47223 11.9106 8.41705 12.0554C8.36186 12.2002 8.33467 12.3548 8.33706 12.5105C8.33945 12.6662 8.37135 12.8199 8.43095 12.9628C8.49054 13.1057 8.57668 13.235 8.6844 13.3433C9.60984 14.3045 10.5524 15.246 11.5121 16.1679C11.6133 16.2732 11.7335 16.3567 11.8659 16.4137C11.9982 16.4707 12.1401 16.5 12.2833 16.5C12.4266 16.5 12.5684 16.4707 12.7007 16.4137C12.8331 16.3567 12.9533 16.2732 13.0545 16.1679L13.1213 16.0932C14.7768 14.2244 16.4203 12.3448 18.0518 10.4546C18.1506 10.339 18.2264 10.2043 18.275 10.0582C18.3236 9.91215 18.3439 9.75755 18.3348 9.60329C18.3257 9.44902 18.2874 9.29813 18.2221 9.15926C18.1568 9.0204 18.0657 8.89628 17.9541 8.79403L17.9387 8.80472Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <div className="quiz-choice-item-content">(D)</div>
                              </div>
                              <div className="game-object-explanation quiz-explanation">
                                <div className="quiz-explanation-button-wrap">
                                  <button
                                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root quiz-explanation-button default css-10dzm3y"
                                    tabIndex={0}
                                    type="button"
                                  >
                                    Hide Explanation
                                    <span className="MuiTouchRipple-root css-w0pj6f" />
                                  </button>
                                </div>
                                <div className="game-object-main-explanation">
                                  <div className="game-object-explanation-content">
                                    <b>Transcript:</b>
                                    <br /> (A) They are looking at each other. <br />
                                    (B) The woman is typing on her computer. <br />
                                    (C) The man is using the calculator. <br />
                                    <b> (D) The man is writing something onto the notepad. </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Exam;
