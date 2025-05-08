import React from "react";
import { Header } from "~/components";

const trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and edit AI-generated trips plan"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default trips;
