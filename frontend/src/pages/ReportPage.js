import React from 'react';
import ReportForm from '../components/ReportForm';
import { useNavigate } from 'react-router-dom';
import './ReportPage.css';

const ReportPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="report-page">
      <ReportForm onSuccess={handleSuccess} />
    </div>
  );
};

export default ReportPage;
