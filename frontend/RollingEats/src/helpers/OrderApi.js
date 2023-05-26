const url = "http://localhost:8080/api/orders";
const token = JSON.parse(localStorage.getItem("token"));
const limit = 15;

export const getOrders = async (limit = 15, page = 0) => {
  try {
    const resp = await fetch(url, {
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
    throw new Error("No se pudo establecer la conexión con el backend.");
  }
};

export const getOrdersByUser = async(user) => {
  try {
    const resp = await fetch(url + "/users/" + user, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    })
    const data = resp.json();
    return data;
  } catch (e) {
    console.log(e)
    throw new Error("No se pudo establecer la conexión con el backend.");    
  }
}

export const getOrderById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
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
    throw new Error("No se pudo establecer la conexión con el backend.");
  }
};

export const createOrder = async (orderData) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { msg: "No se pudo establecer la conexión con el backend." };
  }
};

export const editOrderById = async (id, orderData) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(orderData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    return { msg: "No se pudo establecer la conexión con el backend." };
  }
};

export const deleteOrderById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se pudo establecer la conexión con el backend." };
  }
};