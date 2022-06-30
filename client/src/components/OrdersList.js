import { useEffect, useState } from "react";

function OrdersList() {
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        fetch('/orders')
            .then((res) => res.json())
            .then((res) => setOrders(res.message))
    }, []);

    return (
        <div>
            {
                !orders ? 'Loading...' : orders
            }
        </div>
    );
}

export default OrdersList;