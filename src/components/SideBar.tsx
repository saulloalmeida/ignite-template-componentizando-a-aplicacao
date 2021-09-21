import { useEffect, useState } from "react";
import { GenreResponseProps } from "../interfaces/genres";
import { api } from "../services/api";
import { Button } from "./Button";

interface SideBarProps {
    selectedGenreID: number;
    handleClickButton(id: number): void;
}

export function SideBar({ selectedGenreID, handleClickButton }: SideBarProps) {
    
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);
    return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
            {genres.map(genre => (
                <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => handleClickButton(genre.id)}
                    selected={selectedGenreID === genre.id}
                />
            ))}
        </div>
    </nav>
    )
}