const url = "http://localhost:8080/api/search";

export const searchData = async (collection, term) => {
  try {
    const resp = await fetch(url + "/" + collection + "/" + term);
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se consiguió obtener la información solicitada.");
  }
};