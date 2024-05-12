import { REQUEST } from "./Request";

export const GET_APARTMENTS = async () => {
  const test = await REQUEST({
    method: "get",
    url: "apartments",
  });
  // console.log(test);
  return test;
};
export const GET_APARTMENTS_BY_ID = async (id) => {
  return await REQUEST({
    method: "get",
    url: "apartments/" + id,
  });
};
