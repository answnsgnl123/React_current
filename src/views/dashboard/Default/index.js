import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
// import  from './';
// import  from './';
// import  from './';
// import  from './';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={13}>
                <Grid>
                    <PopularCard isLoading={isLoading} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
