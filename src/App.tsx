import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { api } from './services/api';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { MovieProps } from './interfaces/movies';
import { GenreResponseProps } from './interfaces/genres';
import { Content } from './components/Content';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar selectedGenreID={selectedGenreId} handleClickButton={handleClickButton} />
      <Content movies={movies} selectedGenre={selectedGenre}/>
    </div>
  )
}