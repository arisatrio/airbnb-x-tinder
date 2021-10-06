import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';

const db = [
    {
        name: 'Hotel 1',
        alamat: 'Alun-Alun Indramayu'
    },
    {
        name: 'Hotel 2',
        alamat: 'Lembang, Bandung'
    },
    {
        name: 'Hotel 3',
        alamat: 'Malioboro, Yogyakarta'
    },
    {
        name: 'Hotel 4',
        alamat: 'Cirebon'
    },
    {
        name: 'Hotel 5',
        alamat: 'Kota lama, Semarang'
    }
]

export default function CardComponent() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <Box
            sx={{
                bgcolor: '#fafafa',
                alignItems: "center",
                padding: 1,
                marginBottom: 1
            }}
        >

            <div className='cardContainer'>
                {characters.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>

                        <div className='card'>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/user/erondu/1600x900"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {character.name}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" color="text.secondary">
                                            {character.alamat}
                                        </Typography>
                                        <Rating name="read-only" value={3} readOnly />
                                        <Typography variant="h4" display="block" sx={{
                                            color: 'red',
                                            fontWeight: 800,
                                        }}>
                                            Rp99.999
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom>
                                            per kamar per malam
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                    </TinderCard>
                )}
            </div>

        </Box>
    );
}