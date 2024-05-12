import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <Link href="/apartments">Go to Apartments Listing</Link>
    </div>
  );
};

export default Home;
