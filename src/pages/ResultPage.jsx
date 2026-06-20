import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ResultPage() {
  const score = useSelector((state) => state.exam.score);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Congratulations!</h2>
      <p>Your score: {score}</p>
      <p>Great job — please head to the dashboard for more tests.</p>
      <Button variant="contained" onClick={() => navigate('/dashboard')}>
        Dashboard
      </Button>
    </div>
  );
}