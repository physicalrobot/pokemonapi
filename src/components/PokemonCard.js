import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography,Grid } from "@material-ui/core";
import { useEffect } from "react";

const PokemonCard = ({ pokemon, index }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [thetype, setThetype] = useState([null]);

  const {id, type} = pokemon
//   const [pkmnData, setPkmndata] = useState(null);
const handleTypeData = async () => {
    const resolvedType = await type;
    // You can use the resolved type data here
    setThetype(resolvedType)
  };
handleTypeData();
console.log(thetype)
  return (
    <Card>
            <Grid container justify="center" alignItems="center">

      <CardMedia
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`}
        title={pokemon.name}
        style={{
          width: "40%",
          height: "150px",
          float: "left",
        }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {pokemon.name}
        </Typography>
        <Typography>
          {thetype[0]}
        </Typography>
      </CardContent>
      </Grid>
    </Card>
  );
};

export default PokemonCard;