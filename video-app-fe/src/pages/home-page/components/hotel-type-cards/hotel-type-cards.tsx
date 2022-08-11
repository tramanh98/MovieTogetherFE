import { Card, Col, Row, Spin, Tabs } from "antd";
import { useState } from "react";
const { TabPane } = Tabs;
const { Meta } = Card;
const HotelTypes = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <h2>Explore more travel vacation rentals</h2>
      <Spin spinning={loading}>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="	https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
                />
              }
            >
              <Meta title="Apartments" description="152,526 properties" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="	https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
                />
              }
            >
              <Meta title="Apartments" description="152,526 properties" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="	https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
                />
              }
            >
              <Meta title="Apartments" description="152,526 properties" />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="	https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
                />
              }
            >
              <Meta title="Apartments" description="152,526 properties" />
            </Card>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default HotelTypes;
