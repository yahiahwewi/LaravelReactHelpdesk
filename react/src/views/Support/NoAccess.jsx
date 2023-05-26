import React, { useState, useEffect } from 'react';

export default function NoAccess() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showDiv && (
        <div className="m-12 text-center bg-red-500 text-white py-2 px-4 rounded">
          <p>Cette page est réservée aux support seulement.</p>
        </div>
      )}
    </div>
  );
}
