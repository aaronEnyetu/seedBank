// takes in a seedpacket and renders it with the correct background color

import React from 'react';

export default function SeedPacket({ seedpacket, handleDeleteSeedPacket }) {
  return (
    <div
      className="seedpacket"
      onClick={() => handleDeleteSeedPacket && handleDeleteSeedPacket(seedpacket.name)}
      style={{ backgroundColor: seedpacket.color }}
    >
      <h3>
        {seedpacket.name}
      </h3>
      <p>Plant Variety: {seedpacket.variety}</p>
      <p>Year Harvested: {seedpacket.year}</p>
      <p>Gardener: {seedpacket.gardener}</p>
      <p>Packet Color: {seedpacket.color}</p>
    </div>
  );
}