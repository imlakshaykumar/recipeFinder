import './App.css'

import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { NavBar } from './components/navbar'
import { RecipeCard } from './components/recipeCard'
import { fetchData } from './service'


function App() {

  let [data, setData] = useState([])
  let [query, setQuery] = useState(null);
  let [searchInput, setsearchInput] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        let result;
        if (query) {
          result = await fetchData(query.trim());
        } else {
          result = await fetchData('pasta');
        }
        setData(result);

        // if (query) {
        //   console.log(result);
        // } else {
        //   console.log(result);
        // }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi(query);
  }, [query]);

  const handleSearch = () => {
    if (searchInput.trim().length !== 0) {
      setQuery(searchInput)
    }
  }

  return (
    <>
      <Header
        setQuery={ setQuery }
        setData={ setData }
        handleSearch={ handleSearch }
        searchInput={ searchInput }
        setsearchInput={ setsearchInput }
      />
      <NavBar setQuery={ setQuery } />
      <RecipeCard data={ data } />
    </>
  )
}

export default App
