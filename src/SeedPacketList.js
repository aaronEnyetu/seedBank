//This takes in a seedpacket prop and renders a list of Seed packet components

import React from 'react';
import SeedPacket from './SeedPacket';




export default function SeedPacketList({ seedpackets, handleDeleteSeedPacket }) {
  return (
    <div className="seedpacket-list quarter">
      {seedpackets.map((seedpacket, i) => (
        <SeedPacket key={seedpacket.name + i} seedpacket={seedpacket} handleDeleteSeedPacket={handleDeleteSeedPacket} />
      ))}
    </div>

  );
}