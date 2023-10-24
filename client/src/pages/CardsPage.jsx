import { useState, useEffect } from "react"
import axios from "axios"
import { CardApi } from "../components/CardApi"
import Card from 'react-bootstrap/Card';

export const CardsPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character/');
                setCharacters(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getCharacters()
    }, [])
  return (
    <div className="container d-flex justify-content-center coustum-card">
        {characters.map(el => (
            <Card key={el.id} style={{ width: '18rem' }}>
                <CardApi imag={el.image} name={el.name} species={el.species} status={el.status} location={el.location.name} origin={el.origin.name} />
            </Card>
        ))}
    </div>
  )
}
