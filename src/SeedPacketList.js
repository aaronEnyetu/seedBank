//This takes in a seedpacket prop and renders a list of Seed packet components

import React from 'react';
import SeedPacket from './SeedPacket';




export default function SeedPacketList({ seedpacket, handleDeleteSeedPacket }) {
  return (
    <div className="seedpacket-list quarter">
      {seedpacket.map((seedpacket, i) => (
        <SeedPacket key={seedpacket.name + i} seedpacket={seedpacket} handleDeleteSeedpacket={handleDeleteSeedPacket} />
      ))}
    </div>

  );
}