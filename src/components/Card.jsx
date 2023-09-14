import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonAppBar from './Navbar';
import {useNavigate} from 'react-router-dom'

export default function ActionAreaCard() {

  const navigate = useNavigate()

  return (
    <>
      <ButtonAppBar />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Card sx={{ maxWidth: 170, padding: 0.5, boxShadow: 1, margin: 10, }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://technographx.com/wp-content/uploads/2018/11/what-is-front-end-development-1.jpg"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5> AIGS Frontend Development Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined" color="primary" sx={{
                backgroundColor: 'blue',
                color: 'white',
                border: '3px solid yellow', '&:hover':
                  { backgroundColor: 'black', },
              }}
              onClick={() => navigate('/item_detail')}>
                Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 170, padding: 0.5, boxShadow: 1, margin: 10, }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://ddi-dev.com/uploads/media/news/0001/01/f2da1c598e2ff9bc29b229773a189d33d38e0252.jpeg"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5>AIGS Backend Development Team  </h5>
              </Typography>
            </CardContent>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined" color="primary" sx={{
                backgroundColor: 'blue',
                color: 'white',
                border: '3px solid yellow', '&:hover':
                  { backgroundColor: 'black', },
              }}
              onClick={() => navigate('/item_detail')}>
                Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 170, padding: 0.5, boxShadow: 1, margin: 10, }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://thumbs.dreamstime.com/b/software-testing-internet-business-technology-concept-143071525.jpg"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5>AIGS Testing Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined" color="primary" sx={{
                backgroundColor: 'blue',
                color: 'white',
                border: '3px solid yellow', '&:hover':
                  { backgroundColor: 'black', },
              }}
              onClick={() => navigate('/item_detail')}>
                Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 170, padding: 0.5, boxShadow: 1, margin: 10, }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="200"
              image="https://www.techreviewscorner.com/wp-content/uploads/2021/02/AI-and-ML.jpg"
              sx={{
                objectFit: 'cover',
                height: '100%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5> AIGS AI&ML Team  </h5>
              </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                backgroundColor: 'blue',
                color: 'white',
                border: '3px solid yellow', '&:hover':
                  { backgroundColor: 'black', },
                }}
                onClick={() => navigate('/item_detail')}>
                Learn More
              </Button>
            </div>
          </CardActionArea>
        </Card>


      </div>
    </>
  );
}