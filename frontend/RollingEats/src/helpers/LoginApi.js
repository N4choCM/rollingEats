const url = "https://rollingeatsbackend-production.up.railway.app/api/auth/login";

export const login = async (loginData) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    return { message: "No se consiguió establecer la conexión con el backend." };
  }
};