import React from 'react';

interface AlertProps {
  message: string;
  type?: 'error' | 'success' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const alertStyles = {
    error: 'bg-red-100 border border-red-400 text-red-700',
    success: 'bg-green-100 border border-green-400 text-green-700',
    info: 'bg-blue-100 border border-blue-400 text-blue-700',
    warning: 'bg-yellow-100 border border-yellow-400 text-yellow-700',
  };

  return (
    <div className={`p-4 mb-4 rounded-lg flex items-center ${alertStyles[type]}`} role="alert">
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === 'error' && (
          <path
            fillRule="evenodd"
            d="M18 8a10 10 0 11-20 0 10 10 0 0120 0zm-4.707-2.293a1 1 0 00-1.414 0L10 7.586 7.121 4.707a1 1 0 00-1.414 1.414L8.586 9l-2.879 2.879a1 1 0 001.414 1.414L10 10.414l2.879 2.879a1 1 0 001.414-1.414L11.414 9l2.879-2.879a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        )}
        {type === 'success' && (
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 10-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        )}
        {type === 'info' && (
          <path
            fillRule="evenodd"
            d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-8-4a1 1 0 100 2 1 1 0 000-2zm1 4a1 1 0 00-2 0v3a1 1 0 002 0v-3z"
            clipRule="evenodd"
          />
        )}
        {type === 'warning' && (
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.517 11.61c.75 1.335-.213 2.791-1.743 2.791H3.483c-1.53 0-2.493-1.456-1.743-2.79L8.257 3.1zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-5a1 1 0 00-.993.883L9 9v2a1 1 0 001.993.117L11 11V9a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        )}
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default Alert;