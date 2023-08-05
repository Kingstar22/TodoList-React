import React, { useState, useEffect, useCallback } from 'react';
import './FloatingAlert.css';
const FloatingAlert = ({readTodo}) => { 

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isAlertOpenProgress, setIsAlertOpenProgress] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('added item!');

  const showNotification = useCallback(() => {
    setIsAlertOpen(true);
    setIsAlertOpenProgress(true);
    autoClose();
  }, []);

  const autoClose = () => {
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 2500);
    setTimeout(() => {
      setIsAlertOpenProgress(false);
    }, 2800);
  };

  useEffect(() => {
    if (readTodo) {
      showNotification();
    }
  }, [showNotification, readTodo]);
   
    return (
        <>
            <div className={`floating-alert 
                            ${error ? {'border-left': '6px solid #d50d0d'} : {'border-left': '6px solid #0dd51f'}} 
                            ${isAlertOpen ? 'active' : null}`
                            }
                >
                <div className="floating-alert__content">
                    <span className="floating-alert__content-text">{message}</span>
                </div>
                <div className={`floating-alert__progress ${error ? (isAlertOpenProgress ? 'active active-error' : null) : (isAlertOpenProgress ? 'active' : null)}`}>
                </div>
            </div>
        </>
    );
   
}

export default FloatingAlert;