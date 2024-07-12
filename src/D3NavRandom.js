import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GridGifs from './GridGifs';
import { CircularProgress, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function DriveLLaVA() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'D³Nav: Random Videos';
  }, []);

  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    // Display the toast message when the component mounts
    toast.info("Refresh to show more random videos");
  }, []);

  return (
    <div>
      <ToastContainer></ToastContainer>
      <IconButton
        onClick={() => navigate('/D3Nav')}
        style={{ position: 'absolute', top: '10px', left: '10px', color: 'white' }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onClick={() => window.location.reload()}
        style={{ position: 'absolute', top: '10px', left: '50px', color: 'white' }}
      >
        <RefreshIcon />
      </IconButton>
      <Grid container spacing={0} style={{ overflow: 'hidden', maxHeight: '100vh', background: '#000000' }}>
        {GridGifs.map((gif, index) => {
          return (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index} style={{ padding: '1', backgroundColor: hasError ? 'black' : 'transparent' }}>
              {isLoading && <CircularProgress />}
              <img
                src={require(`${gif}`)}
                alt={`gif-${index}`}
                style={{ width: '100%', height: 'auto', display: isLoading ? 'none' : 'block' }}
                onLoad={() => setIsLoading(false)}
                onError={() => { setIsLoading(false); setHasError(true); }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default DriveLLaVA;
