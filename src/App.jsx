import './App.css'
import { useState, useEffect } from 'react'
import { Header } from './components/header'
import { NavBar } from './components/navbar'
import { RecipeCard } from './components/recipeCard'
import { fetchData } from './service'


function App() {

  let [data, setData] = useState([])
  let [query, setQuery] = useState('pasta');
  let [searchInput, setsearchInput] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {

        const result = await fetchData(query.trim());
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

    fetchDataFromApi();
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
