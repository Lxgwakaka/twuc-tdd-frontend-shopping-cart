import React from 'react';
import './index.css';


class ShoppingCart extends React.Component {
    render() {
        return (
            <div  className="wrapper">
                <div className="title">Shopping Cart</div>
                <table className="table table-cell">
                    <thead>
                        <tr>
                            <th className="align-left table-header">商品名</th>
                            <th>单价</th>
                            <th className="align-right">数量</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default ShoppingCart;
