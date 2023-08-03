import React from 'react';
import './FloatingAlert.css';
const FloatingAlert = () => {
  let  isAlertOpen  = false;
  let isAlertOpenProgress  = false;
  let error  = false;
  let massage = 'Показники надіслані!';

    const  showNotification = () => {
        isAlertOpen = !isAlertOpen;
       isAlertOpenProgress = !isAlertOpenProgress;
       autoClose();
    }

    const autoClose = () => {
        setTimeout(() => {
            isAlertOpen = !isAlertOpen;
        },2500);
        setTimeout(() => {
           isAlertOpenProgress = !isAlertOpenProgress;
        },2800)
    }
    return (
        <>
            <div class="floating-alert"
                onClick={showNotification}>
                <div class="floating-alert__content">
                    <span class="floating-alert__content-text">{massage}</span>
                </div>
                <div class="floating-alert__progress">
                </div>
            </div>

        </>
    );
   
}

export default FloatingAlert;