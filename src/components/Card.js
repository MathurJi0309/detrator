import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
  let title=props.post.title
  title=title.substring(0, 20) + "..."
  return (
    <Card sx={{ minWidth: 275 }} className="cards">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          UserId-{props.post.userId}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           💓{props.post.reactions}
        </Typography>
        <Typography variant="body2">
          {props.post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ranking {props.post.id}</Button>
      </CardActions>
    </Card>
  );
}