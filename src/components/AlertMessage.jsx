import React from "react";

function AlertMessage({ message, type = "error" }) {
  const baseStyles = "text-center font-semibold mt-6";
  const typeStyles = {
    error: "text-red-600",
    warning: "text-yellow-600",
    info: "text-red-600",
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]}`}>
      {message}
    </div>
  );
}

export default AlertMessage;
