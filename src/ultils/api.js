import axios from 'axios'; 

const apiUrl = 'http://localhost:3000'; 

export const getVideos = async () => {
  try {
    const response = await axios.get(`${apiUrl}/videos`);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição GET:', error);
  }
};

export const createVideo = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/videos`, data);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição POST:', error);
  }
};

export const updateVideo = async (id, data) => {
  try {
    const response = await axios.put(`${apiUrl}/videos/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição PUT:', error);
  }
};

export const deleteVideo = async (id) => {
  try {
    await axios.delete(`${apiUrl}/videos/${id}`);
  } catch (error) {
    console.error('Erro na requisição DELETE:', error);
  }
};