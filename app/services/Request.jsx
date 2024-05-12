import axios from "axios";
import { ApiBaseUrl } from "./config";
import { ClearData } from "./LocalStorage/LocalStorage";
let REQUEST = async (config) => {
  config.url = `${ApiBaseUrl}/api/${config.url}`;
  console.log(config.url);
  try {
    let data = await axios(config).then((response) => {
      return JSON.stringify(response.data);
    });

    data = JSON.parse(data);
    return data;
  } catch (error) {
    const err = error;
    console.log(error);
    console.log(err.response?.status);
    if (err.response?.status === 401) {
      ClearData();
      throw err;
    }
    if (err.response?.status === 500) {
      throw err;
    }

    throw err?.response?.data;
  }
};

export { REQUEST };
