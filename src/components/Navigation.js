import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';

import Undo from './Undo';
import Favorite from './Favorite';

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                bgcolor: '#fafafa'
            }}
        >

            <Box
                sx={{
                    bgcolor: '#fafafa',
                    alignItems: "center",
                    padding: 1,
                    borderRadius: 2,
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowColor: '#212121',
                    shadowOffset: { height: 0, width: 0 }
                }}
            >

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Undo"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction label="Favorites"
                        icon={<FavoriteIcon />}
                    />
                </BottomNavigation>
            </Box>

            <Divider variant="middle"></Divider>

            <Box
                sx={{
                    bgcolor: '#fafafa',
                    alignItems: "center",
                    padding: 1,
                    borderRadius: 2,
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowColor: '#212121',
                    shadowOffset: { height: 0, width: 0 }
                }}
            >
                {value === 0 && <Undo />}
                {value === 1 && <Favorite />}

            </Box>
        </Box>
    );
}
