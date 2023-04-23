const url = "http://localhost:8080/api/search";
const token = JSON.parse(localStorage.getItem("token"));

export const searchData = async (collection, term) => {
  try {
    const resp = await fetch(url + "/" + collection + "/" + term, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se consiguió establecer la conexión con el backend." };
  }
};