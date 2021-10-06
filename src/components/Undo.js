import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

export default function Undo() {
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/user/erondu/1600x900"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        Hotel tidak disukai
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        Alamat
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
    );
}