'use client'
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components';

const Event = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {loading ? (
        // Display loading indicator while loading is true
        <div>Loading...</div>
      ) : (
        <>
          <div>Event</div>
        </>
      )}
    </div>
  );
};

export default Event;
