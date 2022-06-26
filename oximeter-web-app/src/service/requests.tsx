import axiosInstance from './axiosInstance'

export async function getLastTenMeasures() {
    try {
        const response = await axiosInstance.get('getLastTen/1');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};