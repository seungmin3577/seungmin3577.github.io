import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import basicImg from "../public/logo512.png";

const useStyles = makeStyles({
  card: {
    flex: 1
  },
  media: {
    padding: 50,
    objectFit: "contain"
  }
});

interface Props {
  img?: any;
  title?: string;
  contents?: string;
  onClick?: any;
}

const CustomCard: React.SFC<Props> = ({
  img = basicImg,
  title = "제목을 적어주세요.",
  contents = "내용을 적어주세요.",
  onClick
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="ProjectCard"
          height="140"
          src={img}
          // title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {contents.split("\n").map((content, index) => {
            return (
              <Typography
                key={index}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {content}
              </Typography>
            );
          })}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CustomCard;
