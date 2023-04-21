const url = "http://localhost:8080/api/menus";
const token = JSON.parse(localStorage.getItem("token"));
const limit = 1;

export const getMenus = async (from = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limit + "&desde=" + from, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se consiguió obtener la información solicitada.");
  }
};

export const getMenuById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se consiguió obtener la información solicitada.");
  }
};

export const createMenu = async (data) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se consiguió establecer la conexión con el backend."};
  }
};

export const editMenuById = async (id, data) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se consiguió establecer la conexión con el backend." };
  }
};

export const deleteMenuById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se consiguió establecer la conexión con el backendd" };
  }
};