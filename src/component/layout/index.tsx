import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({
  children,
  title = "FundsOnTime",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="FundsOnTime - Your Trusted Financial Partner"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">{children}</div>
    </>
  );
}
