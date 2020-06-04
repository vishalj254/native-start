import axios from 'axios';
// const BaseURL = 'http://10.0.2.2:3000';
const BaseURL = 'https://salty-ravine-40620.herokuapp.com';
const ClientURL = 'http://10.0.2.2:8081';

//https://drive.google.com/open?id=1olnVCQisV5KeEtVGqbS0TkusGvh27wvb

const postDataAxios = async (
  url: String,
  body: Object,
  config: Object = {'content-type': 'application/json;charset=utf-8'},
) => {
  try {
    var response = await axios.post(`${BaseURL}/${url}`, body, config);
    var result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getDataAxios = async (
  url: String,
  config: Object = {'content-type': 'application/json;charset:utf-8'},
) => {
  try {
    var response = await axios.get(`${BaseURL}/${url}`, config);
    var result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const postDataAndImage = async (
  url: String,
  formData: Object,
  config: Object = {headers: {'content-type': 'multipart/form-data'}},
) => {
  try {
    const response = await axios.post(`${BaseURL}/${url}`, formData, config);
    var result = response.data;
    return result;
  } catch (e) {
    return false;
  }
};

export {BaseURL, ClientURL, postDataAxios, getDataAxios, postDataAndImage};
