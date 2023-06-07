import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useLazyGetWeatherQuery } from '../../API/Weather';
import { useEffect, } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './style.css'

const Weather = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [getWeather, { data: weatherData, isLoading }] = useLazyGetWeatherQuery()

  const { current, location, forecast } = weatherData || {}

  const { temp_c, condition, humidity, wind_kph, pressure_mb, is_day, uv } = current || {}
  const { name, localtime } = location || {}
  const { forecastday } = forecast || {}

  useEffect(() => {
    let lat = params.get('lat')
    let lon = params.get('lon')

    if (lat && lon) {
      getWeather({
        lat,
        lon,
      })
    }
  }, [getWeather, params])

  return (
    <Box>
      <Box
        className="weather_cast"
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
        {isLoading ? <CircularProgress /> : <Grid container className='wather_wrp' spacing={2}>
          <Box className="top_btn_box">
            <Button className='weather_history_btn' onClick={() => navigate(`/history?lat=${params.get('lat')}&lon=${params.get('lon')}`)}>Weather History</Button>
          </Box>
          <Grid item xs={12}>
            <Box className="wather_top">
              <Box className="wather_icon_temp">
                <Box className="wather_icon">
                  <img src={condition?.icon} alt="icon" />
                </Box>
                <Typography className='temp_c'>{temp_c}<sup>°C</sup></Typography>
                <Typography className='cast_value'>{is_day ? "Morning" : "Night"}</Typography>
                <Typography className='cast_value'>{`in ${name}`} | {localtime}</Typography>
              </Box>
              <Box className="wather_details">
                <Box className="wather_cast">
                  <Typography className='cast_title'>Wind kph</Typography>
                  <Typography className='cast_value'>{wind_kph}</Typography>
                </Box>
                <Box className="wather_cast">
                  <Typography className='cast_title'>Pressure mb</Typography>
                  <Typography className='cast_value'>{pressure_mb}</Typography>
                </Box>
                <Box className="wather_cast">
                  <Typography className='cast_title'>humidity</Typography>
                  <Typography className='cast_value'>{humidity}</Typography>
                </Box>
                <Box className="wather_cast">
                  <Typography className='cast_title'>uv</Typography>
                  <Typography className='cast_value'>{uv}</Typography>
                </Box>

              </Box>
            </Box>
            <Box className="wather_bottom">
              <Box className="wather_day_wrp">
                {forecastday?.map((item, i) => {
                  return <Box className="wather_day_box" key={i}>
                    <Box className="wather_bottom_card">
                      <Typography className='cast_value'>{item?.date}</Typography>
                    </Box>
                    <Box className="wather_day_icon">
                      <img src={item?.day?.condition?.icon} alt="icon" />
                    </Box>
                    <Box className="wather_bottom_wrp">
                      <Box className="wather_bottom_card">
                        <Typography className='cast_title'>Average Temp</Typography>
                        <Typography className='cast_value'>{item?.day?.avgtemp_c}°C</Typography>
                      </Box>
                      <Box className="wather_bottom_card">
                        <Typography className='cast_title'>Maxwind</Typography>
                        <Typography className='cast_value'>{item?.day?.maxwind_kph}kph</Typography>
                      </Box>
                      <Box className="wather_bottom_card">
                        <Typography className='cast_title'>Humidity</Typography>
                        <Typography className='cast_value'>{item?.day?.avghumidity}</Typography>
                      </Box>
                      <Box className="wather_bottom_card">
                        <Typography className='cast_title'>Uv</Typography>
                        <Typography className='cast_value'>{item?.day?.uv}</Typography>
                      </Box>
                    </Box>
                  </Box>
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>}
      </Box>
    </Box>
  );
};

export default Weather;
