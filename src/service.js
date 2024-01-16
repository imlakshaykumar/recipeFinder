export const fetchData = async (defaultQuery) => {
    // const app_id = import.meta.env.VITE_VERCEL_MY_APP_ID
    // const api_key = import.meta.env.VITE_VERCEL_MY_API_KEY

    // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${api_key}`;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=c8e6f950&app_key=d83a9ff463717a82fe04f92a2dee33e3`;
    // console.log(url);

    const data = await fetch(url);

    const res = await data.json();
    return res.hits;

}

