import apiHelper from '../../utils/api/apiHelper';

export const getProducts = async () => {
    const data = await apiHelper.get('http://localhost:800');
    return data;
};