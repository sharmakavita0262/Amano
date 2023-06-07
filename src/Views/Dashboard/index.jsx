import { Box, Button, FormHelperText, } from '@mui/material';
import dashboardImage from '../../Assets/Images/dashboard.jpg';
import Autocomplete from '../../Components/Autocomplete';
import { FaSearchLocation } from 'react-icons/fa';
import { useGetLocationSuggestionsQuery } from '../../API/Location';
import { useRef, useState } from 'react';
import useDebounce from '../../Hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const [location, setLocation] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errText, setErrText] = useState('');
  const debouncedLocation = useDebounce(inputValue, 400);

  const {
    data: suggestions,
    isLoading,
  } = useGetLocationSuggestionsQuery(debouncedLocation);

  const autoCompleteRef = useRef('');

  const handleInputChange = (userInput) => {
    setInputValue(userInput);
  };
  const handleChange = (event, newValue) => {
    setLocation(newValue);
    setErrText(null)
  };

  const weatherHandle = () => {
    location?.lat && location?.lon ? navigate(`/weather?lat=${location?.lat}&lon=${location?.lon}`) : setErrText("Please Select A Location!")
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflowY: 'hidden',
      }}
    >
      <img
        src={dashboardImage}
        alt='dashboardImage'
        height='100%'
        width='100%'
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Box sx={{ width: '30%' }}>
          <Autocomplete
            options={suggestions || []}
            ref={autoCompleteRef}
            value={location}
            placeholder='Search....'
            onChange={handleChange}
            getOptionLabel={(option) => option.display_name}
            onInputChange={handleInputChange}
            inputValue={inputValue}
            open={!isLoading && suggestions.length > 0}
          />
          {errText && <FormHelperText error>{errText}</FormHelperText>}
        </Box>
        <Button variant='contained' sx={{ display: 'flex', gap: '20px',height:"57px" }} onClick={weatherHandle}>
          <FaSearchLocation size='20' />
          Find Weather
        </Button>
      </Box>

    </Box>
  );
};

export default Dashboard;
