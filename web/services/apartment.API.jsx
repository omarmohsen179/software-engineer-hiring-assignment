import REQUEST from "./Request";

export const APARTMENT_EDIT = async (e) => {
  return await REQUEST({
    method: e.id > 0 ? "put" : "post",
    url: "apartments",
    data: e,
  });
};
export const APARTMENT_DELETE = async (id) => {
  return await REQUEST({
    method: "delete",
    url: "apartments/" + id,
  });
};
export const GET_APARTMENTS = async () => {
  return await REQUEST({
    method: "get",
    url: "apartments",
  });
};
export const GET_APARTMENTS_BY_ID = async (id) => {
  return await REQUEST({
    method: "get",
    url: "apartments/" + id,
  });
};
