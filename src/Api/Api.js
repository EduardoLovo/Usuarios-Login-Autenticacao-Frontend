export const Api = {
    baseUrl: "http://localhost:3000",

    // Rota Login
    loginUrl: () => Api.baseUrl + "/login/",

    // Rotas Usuarios
    readAllUsuariosUrl: () => Api.baseUrl + "/usuarios",
    createUsuariosUrl: () => Api.baseUrl + "/auth/register",

    // GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),

    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
        fetch(url, {
            method: "DELETE",
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),
}