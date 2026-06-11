// component/layoutwrapper/LayoutWrapper.tsx
import React from 'react';
import Footer from '../footer';
import Navbar from '../Navbar';

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}