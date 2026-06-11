"use client";

import Contact from '@/component/contactUs';
import LayoutWrapper from '@/component/layoutwrapper/LayoutWrapper';
import Loader from '@/component/loader';
import Navbar from '@/component/Navbar';
import React, { Suspense, useEffect, useState } from 'react'

const ContactUs = () => {

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

        < Contact />

      </Suspense>
    </div>
  );
}

export default ContactUs
