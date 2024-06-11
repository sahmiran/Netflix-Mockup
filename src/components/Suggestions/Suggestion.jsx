import styled from "styled-components";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = styled.div`
  padding: 1rem;
  width: 100vw;
`;

const Title = styled.h2`
  color: white;
  text-align: left;
`;

function Suggestion(props) {
  const [movies, setMovies] = useState([]);
  const { suggestion } = props;
  const { title, category } = suggestion;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movies-api14.p.rapidapi.com/" + category,
      headers: {
        "x-rapidapi-key": "2791715469msh36f3e190ed1db05p1f7008jsnb18346c5249c",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        const random = Math.floor(
          Math.random() * (response.data.movies.length - 6)
        );
        setMovies(response.data.movies.slice(random, random + 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <Card>
      <Title>{title}</Title>
      <Movies movies={movies} />
    </Card>
  );
}

export default Suggestion;
