import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';

describe('Shopping Cart', () => {
    test('should show shopping cart page', () => {
        const {getByText} = render(<ShoppingCart/>);

        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    test('should show empty', () => {
        const {container} = render(<ShoppingCart/>);
        const thElement = container.getElementsByTagName('th');
        expect(thElement.length).toEqual(3);
        ['商品名', '单价', '数量'].forEach((txt, index) => {
            expect(thElement.item(index)).toHaveTextContent(txt);
        });
    });


});
