import { Card } from 'react-bootstrap'
function OrderCard({ order }) {
    return (
        <Card bg={'light'} style={{ width: '50vh' }}>
            <Card.Body>
                {order.TotalPrice > 0 ? <Card.Title>Сумма заказа - {order.TotalPrice}</Card.Title> : <Card.Title>Заказ не оплачен</Card.Title>}
                <Card.Subtitle className="mb-2 text-muted">ID заказа - {order.Id}</Card.Subtitle>

                {!!order.DeliveryAddress.AddressLine1 ? <Card.Text>Адрес доставки - {order.DeliveryAddress.AddressLine1}</Card.Text> : <Card.Text>Адрес не указан</Card.Text>}
                {!!order.DeliveryAddress.AddressLine2 && <Card.Text>Второй адрес доставки - {order.DeliveryAddress.AddressLine2}</Card.Text>}
                {!!order.DeliveryAddress.City && <Card.Text>Город - {order.DeliveryAddress.City}</Card.Text>}
                {!!order.DeliveryAddress.Country && <Card.Text>Страна - {order.DeliveryAddress.Country}</Card.Text>}
                {!!order.DeliveryAddress.Description && <Card.Text>Доп. информация - {order.DeliveryAddress.Description}</Card.Text>}
                {!!order.DeliveryAddress.FullName && <Card.Text>Полное имя - {order.DeliveryAddress.FullName}</Card.Text>}
                {!!order.DeliveryAddress.Phone && <Card.Text>Телефон - {order.DeliveryAddress.Phone}</Card.Text>}
                {!!order.DeliveryAddress.ZipCode && <Card.Text>ZipCode - {order.DeliveryAddress.ZipCode}</Card.Text>}

            </Card.Body>
        </Card>
    )
}

export default OrderCard;