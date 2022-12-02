import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
// import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h2">단어 랭킹</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2">단어뜻</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2">조회수</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                {/* <BajajAreaChartCard /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Divider sx={{ my: 0.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            100.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.orange.light,
                                                                color: theme.palette.orange.dark,
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Reliance
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $200.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success.light,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $189.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.orange.light,
                                                                color: theme.palette.orange.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Stolon
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $189.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.orange.light,
                                                                color: theme.palette.orange.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
