const API_URL = "http://wsc.test/module-c/backend/public/";

export async function vueFetch(url: string, method: 'GET'|'POST'|'PUT'|'DELETE' = 'GET', body: any = null) {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include' // Include cookies in requests
    };

    if (method !== 'GET' && body !== null) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(API_URL + 'olympics/' + url, options);
    return response.json();
}