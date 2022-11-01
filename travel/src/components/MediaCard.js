import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaMapMarkerAlt } from "react-icons/fa";

import data from "../data";

export default function MediaCard() {
  return data.map((place) => (
    <Card className="flex-50 card">
      <CardMedia
        component="img"
        height="140"
        image={place.imageUrl}
        alt={place.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FaMapMarkerAlt /> {place.location}</Button>
        <Button size="small"> <a href={place.googleMapsUrl}>Visit </a></Button>
      </CardActions>
      <br/>
    </Card>
  ));
}
