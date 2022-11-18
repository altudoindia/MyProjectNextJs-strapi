export async function fetcher(url, option = {}) {
    let response,
        defaultoption = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            },
        },
        fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}`
    if (!option) {
        response = await fetch(fetcherUrl);
    } else {
        response = await fetch(fetcherUrl, defaultoption);
    }
    const data = await response.json();
    return data;
}