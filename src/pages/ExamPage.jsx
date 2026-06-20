import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams } from '../features/exam/examData';
import { Button, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setScore } from '../features/exam/examSlice';

export default function ExamPage() {
  const { subject } = useParams();
  const qs = exams[subject] || [];
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = () => {
    if (qs.some(q => !answers[q.id])) {
      setError('Please answer all 5 questions before submitting.');
      return;
    }

    const correct = qs.reduce(
      (sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0),
      0
    );

    dispatch(setScore(correct * 4));
    navigate('/result');
  };

  return (
    <div>
      <h2>{subject} Exam</h2>
      <p>5 questions, total 20 marks</p>
      {error && <Alert severity="error">{error}</Alert>}

      {qs.map(q => (
        <div key={q.id}>
          <h3>{q.q}</h3>
          <RadioGroup
            value={answers[q.id] || ''}
            onChange={e =>
              setAnswers({ ...answers, [q.id]: e.target.value })
            }
          >
            {q.options.map(o => (
              <FormControlLabel
                key={o}
                value={o}
                control={<Radio />}
                label={o}
              />
            ))}
          </RadioGroup>
        </div>
      ))}

      <Button variant="contained" onClick={submit}>
        Submit
      </Button>
    </div>
  );
}