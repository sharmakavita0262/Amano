import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useLazyGetWeatherHistoryQuery } from '../../API/Weather';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import "./style.css";

const columns = [
    {
        field: 'icon', headerName: '', width: 100,
        renderCell: (params) =>
            (<img src={params.row?.day?.condition?.icon} alt="" height="80%" />),
    },
    { field: 'date', headerName: 'Date', width: 100 },
    {
        field: 'avghumidity', headerName: 'Humidity', width: 130, valueGetter: (params) =>
            params.row.day.avghumidity || ''
    },
    {
        field: 'avgtemp_c', headerName: 'Temperature', width: 130, valueGetter: (params) =>
            params.row.day.avgtemp_c || '',
    },
    {
        field: 'maxwind_kph',
        headerName: 'Max Wind',
        valueGetter: (params) =>
            params.row.day.maxwind_kph || '',
    },
    {
        field: 'uv',
        headerName: 'UV',
        valueGetter: (params) =>
            params.row.day.uv || '',
    },
];

const History = () => {
    const [params] = useSearchParams();
    const [getWeatherHistory, { data: weatherHistoryData, isLoading }] = useLazyGetWeatherHistoryQuery()

    useEffect(() => {
        let lat = params.get('lat')
        let lon = params.get('lon')
        const currentDate = new Date();

        // Get date before 7 days
        const dateBeforeSevenDays = new Date(currentDate);

        const previousDay = new Date(currentDate);
        previousDay.setDate(currentDate.getDate() - 1);
        dateBeforeSevenDays.setDate(currentDate.getDate() - 7);

        // Format the dates
        const currentDateFormatted = previousDay.toISOString().split('T')[0];
        const dateBeforeSevenDaysFormatted = dateBeforeSevenDays.toISOString().split('T')[0];


        if (lat && lon) {
            getWeatherHistory({
                lat,
                lon,
                dt: dateBeforeSevenDaysFormatted,
                end_dt: currentDateFormatted,
            })
        }
    }, [getWeatherHistory, params])
    return (
        <div>
            <Box
                className="wather_table"
                sx={{
                    position: 'absolute',
                    padding: '0 20px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                }}
            >

                {isLoading ? <CircularProgress /> : <Grid item xs={12}>
                    <Typography className='wather_table_title' sx={{ mt: "50px" }}>Last 7 days Weather History</Typography>
                    <Box className="wather_top">
                        <Box className="wather_icon_temp">
                            <Typography className='cast_value'>{weatherHistoryData?.location?.localtime} |</Typography>
                            <Typography className='temp_c'>{`${weatherHistoryData?.location?.name}`}  | {weatherHistoryData?.location?.country}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <DataGrid
                            getRowId={(data) => data?.date}
                            rows={weatherHistoryData?.forecast?.forecastday || []}
                            columns={columns}
                            hideFooter
                        />
                    </Box>

                </Grid>}
            </Box>
        </div>
    )
}

export default History