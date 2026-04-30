import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type = 'info', onConfirm = null) => {
        setAlert({ message, type, onConfirm });
    };

    const closeAlert = () => {
        setAlert(null);
    };

    const handleConfirm = () => {
        if (alert.onConfirm) alert.onConfirm();
        closeAlert();
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {alert && (
                <div className="custom-alert-overlay">
                    <div className="custom-alert-modal">
                        <div className="custom-alert-icon">
                            {alert.onConfirm ? '❓' : (alert.type === 'error' ? '❌' : 'ℹ️')}
                        </div>
                        <p className="custom-alert-message">{alert.message}</p>
                        <div className="custom-alert-actions">
                            {alert.onConfirm ? (
                                <>
                                    <button className="btn btn-secondary" onClick={closeAlert}>Cancel</button>
                                    <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
                                </>
                            ) : (
                                <button className="btn btn-primary" onClick={closeAlert}>Got it</button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </AlertContext.Provider>
    );
};
