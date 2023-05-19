const url = "http://localhost:8080/api/users";
const token = JSON.parse(localStorage.getItem("token"));
const limit = 10;

export const getUsers = async (page = 0) => {
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
    throw new Error("No se pudo obtener la información.");
  }
};

export const getUsersWithoutStatus = async () => {
  try {
    const resp = await fetch(url + "/users-no-status", {
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
    throw new Error("No se pudo obtener la información.");
  }
};

export const getUserById = async (id) => {
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
    throw new Error("No se pudo obtener la información.");
  }
};

export const register = async (data) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const user = await resp.json();

    return user;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const editUserById = async (id, data) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
  
      const user = await resp.json();
      return user;
    } catch (e) {
      console.log(e);
      throw new Error("No se pudo obtener la información.");
    }
  };
  
  export const deleteUserById = async (id) => {
    try {
      const resp = await fetch(url + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-token": token,
        },
      });
  
      const user = await resp.json();
      return user;
    } catch (e) {
      console.log(e);
      throw new Error("No se pudo obtener la información.");
    }
  };