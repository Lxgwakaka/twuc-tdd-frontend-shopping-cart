import axios from './apiHelper';

jest.mock('./apiHelper');

describe('api helper', () => {
    test('should return correct value when invoke get method', async () => {
        axios.get.mockResolvedValue('success');
        const returnedValue = await axios.get('http://localhost');
        expect(returnedValue).toBe('success');
    });
});