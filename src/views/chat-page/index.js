// material-ui
import { Typography, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const ChatPage = () => (
    <Grid container spacing={{ xs : 2, md: 5}} >
        <Grid item xs= {8} >
            <MainCard title="채팅" alignItems="stretch">
                <Typography variant="body2">
                    
                </Typography>
            </MainCard>
        </Grid>
        <Grid item xs = {4}>
            <MainCard title="접속유저">
                    <Typography variant="body2">
                        
                    </Typography>
            </MainCard>
        </Grid>
    </Grid>
);

export default ChatPage;
