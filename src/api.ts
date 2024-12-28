
export const baseUrl  = "http://localhost:8080";
enum Method {
    Put = "PUT",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Delete = "DELETE"
}
interface DataAndParams {
    data?: object,
    params?: URLSearchParams
}

export const sendRequest = async (url: string, method: Method, DataAndParams?: DataAndParams ) => {

    let input = `${baseUrl}${url}`;
    if (DataAndParams?.params)
        input += `?${DataAndParams.params}`
    const init: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors"
    };
    if (DataAndParams?.data)
        init.body = JSON.stringify(DataAndParams.data)
    try {
        return await fetch(input, init);
    } catch {
        return Response.error()
    }
}

export const get = async (url: string, params?: URLSearchParams ) => await sendRequest(url, Method.Get, {params})
export const post = async (url: string, data: object, params?: URLSearchParams) => await sendRequest(url, Method.Post, {data, params})
export const put = async (url: string, data: object, params?: URLSearchParams) => await sendRequest(url, Method.Put, {data, params})
export const patch = async (url: string, data: object, params?: URLSearchParams) => await sendRequest(url, Method.Patch, {data, params})
export const del = async (url: string, params?: URLSearchParams) => await sendRequest(url, Method.Delete, {params})
