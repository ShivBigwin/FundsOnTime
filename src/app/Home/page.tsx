"use client";
import Hero from '@/component/Home/hero';
import LayoutWrapper from '@/component/layoutwrapper/LayoutWrapper';
import Loader from '@/component/loader';
import React, { Suspense, useEffect, useState } from 'react'

const Privacy = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); // cleanup
  }, []); // run only once when mounted

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        < Hero />
      </Suspense>

    </div>
  );
}

export default Privacy
