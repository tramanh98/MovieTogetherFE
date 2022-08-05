import { Card, Col, Row, Spin, Tabs } from "antd";
import { useState } from "react";
import "./tabs.scss";
const { TabPane } = Tabs;
const { Meta } = Card;
const defaultFamousLocations = [
  "Ho Chi Minh",
  "Da Nang",
  "Ha Noi",
  "Da Lat",
  "Vung Tau",
];
const LocationTabs: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Tabs className="fit-content" defaultActiveKey="1">
          {defaultFamousLocations.map((l, i) => (
            <TabPane tab={l} key={i + 1}></TabPane>
          ))}
        </Tabs>
      </div>
      <div>
        <Spin spinning={loading}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </Spin>
      </div>
    </div>
  );
};

const CardItem = () => {
  
}

export default LocationTabs;
