import { EnvironmentOutlined } from "@ant-design/icons";
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
      <h2>Featured homes recommended for you</h2>
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
              <CardItem />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem />
            </Col>
          </Row>
        </Spin>
      </div>
    </div>
  );
};

const CardItem = () => {
  return (
    <div>
      <div>
        <img
          alt="example"
          src="	https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
        />
      </div>
      <div>
        <h6>Cozrum Homes Premier Residences</h6>
      </div>
      <div>
        <span>
          <EnvironmentOutlined />
        </span>
        <span>District 2, HCM</span>
      </div>
      <div>
        <span>VND</span>
        <span>600,000</span>
      </div>
    </div>
  );
};

export default LocationTabs;
