import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const TimeOut = 1000 * 60 * 1440;
const TimeOutLocalStorage = async (time: any, data: any) => {
  if (data === null) return null;
  var isPast =
    new Date().getTime() - new Date(data?.ExpiresOn).getTime() < time
      ? false
      : true;
  if (isPast) {
    ClearData();
  }
  return isPast;
};
export const RetrieveUserData = async () => {
  try {
    const data = await AsyncStorage.getItem("UserInfo");
    axios.defaults.headers.Authorization = `bearer ${JSON.parse(data)?.Token}`;
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};
export const StoreUserData = async (indata: any) => {
  //data.EnterData = new Date();
  // const maindata = await EncryptAES256(data);
  axios.defaults.headers.Authorization = `bearer ${indata?.Token}`;
  return await AsyncStorage.setItem("UserInfo", JSON.stringify(indata));
};
export const ClearData = async () => {
  try {
    axios.defaults.headers.Authorization = ``;
    await AsyncStorage.removeItem("UserInfo");
  } catch (error) {}
};
export const StoreLangueData = async (indata: any) => {
  return await AsyncStorage.setItem("AppLangue", indata);
};
export const RetrieveLangueData = async () => {
  try {
    const data = await AsyncStorage.getItem("AppLangue");
    return data ? data : "en";
  } catch (error) {
    return null;
  }
};

export const ClearDataCash = async () => {
  try {
    axios.defaults.headers.Authorization = ``;
    await AsyncStorage.removeItem("RequestCount");
  } catch (error) {}
};
export const RequestCountLogin = async () => {
  try {
    var x = await AsyncStorage.getItem("RequestCountLogin");
    var data = JSON.parse(x);
    var isPast =
      new Date().getTime() - new Date(data?.date).getTime() < 1000 * 60 * 10;
    if (isPast) {
      const input = {
        date: new Date(data?.date),
        count: parseInt(data?.count ? data?.count : 0) + 1,
      };
      await AsyncStorage.setItem("RequestCountLogin", JSON.stringify(input));
    }
  } catch (error) {}
};
