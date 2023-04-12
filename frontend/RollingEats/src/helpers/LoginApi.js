const url = "http://localhost:8080/api/auth/login";

export const login = async (data) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se consiguió establecer la conexión con el backend." };
  }
};