import { Container, Row, Col, Card } from 'react-bootstrap'
import OrderCard from './OrderCard'
function OrdersList({ orders }) {
    return (
        <Container>
            <Row>
                {
                    !orders ? 'Loading...' : orders.map((order) =>
                        <Col key={order.CustomId} className='m-2'>
                            <OrderCard order={order} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default OrdersList;