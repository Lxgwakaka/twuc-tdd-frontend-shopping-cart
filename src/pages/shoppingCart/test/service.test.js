import apiHelper from '../../../utils/api/apiHelper';
import {getProducts} from '../service';

jest.mock('../../../utils/api/apiHelper');

describe('getProduct', () => {
    test('should return products when invoke apiHelper', async () => {
        const product = {data: 123};
        apiHelper.get.mockResolvedValue(product);
        const response = await getProducts();
        expect(response).toEqual(product);
    });
});