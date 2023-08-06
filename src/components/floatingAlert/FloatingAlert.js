import React, { useState, useEffect, useCallback } from 'react';
import './FloatingAlert.css';
const FloatingAlert = ({ showAlert, setShowAlert}) => { 

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isAlertOpenProgress, setIsAlertOpenProgress] = useState(false);
  const [message, setMessage] = useState('added item!');

  const showNotification = useCallback(() => {
    setIsAlertOpen(true);
    setIsAlertOpenProgress(true);
    autoClose();
  }, []);

  const autoClose = () => {
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 1500);
    setTimeout(() => {
      setIsAlertOpenProgress(false);
    }, 1800);
  };

  useEffect(() => {
    if (showAlert) {
      showNotification();
      setShowAlert(false)
    }
  }, [showNotification, showAlert, setShowAlert]);
   
    return (
        <>
            <div className={`floating-alert ${isAlertOpen ? 'active' : null}`}
                >
                <div className="floating-alert__content">
                    <span className="floating-alert__content-text">{message}</span>
                </div>
                <div className={`floating-alert__progress ${(isAlertOpenProgress ? 'active' : null)}`}>
                </div>
            </div>
        </>
    );
}

export default FloatingAlert;