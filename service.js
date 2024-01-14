const queryString = {
    app_id: import.meta.env.VITE_APP_ID,
    api_key: import.meta.env.VITE_API_KEY
}

export const fetchData = async (defaultQuery) => {
    const { app_id, api_key } = queryString;

    const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${api_key}`)
    const res = await data.json();
    return res.hits;
}

