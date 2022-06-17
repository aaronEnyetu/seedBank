// On submit, add a seedpacket to state
//On change for each input, call the appropriate state handler prop with correct e.target.value to update App.js state

import React from 'react';

export default function SeedPacketForm({
  setSeedFormPlantName,
  seedPacketFormPlantName,
  setSeedFormVariety,
  seedFormVariety,
  setSeedFormYearHarvested,
  seedFormYearHarvested,
  setSeedFormGardener,
  seedFormGardener,
  setSeedFormPacketColor,
  seedFormPacketColor,
  submitSeedPacket,

}) {
  return (
    <div className='seepacket-form-container quarter'>
      <form onSubmit={submitSeedPacket} className="seedpacket-form">
        <label>
                    Seed Name
          <input
            required
            onChange={(e) => setSeedFormPlantName(e.target.value)}
            value={seedPacketFormPlantName}
          />
        </label>
        <label>
                    Seed Variety
          <input
            required
            onChange={(e) => setSeedFormVariety(e.target.value)}
            value={seedFormVariety}
          />
        </label>
        <label>
                    Year Harvested
          <input
            required
            onChange={(e) => setSeedFormYearHarvested(e.target.value)}
            value={seedFormYearHarvested}
          />
        </label>
        <label>
                    Gardener
          <input
            required
            onChange={(e) => setSeedFormGardener(e.target.value)}
            value={seedFormGardener}
          />
        </label>
        <label>
                    Packet Color
          <select
            required
            onChange={(e) => setSeedFormPacketColor(e.target.value)}
            value={seedFormPacketColor}
          >
            <option value="brown">Brown</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
          </select>
        </label>
        <button>Add Seed Packet</button>
      </form>
    </div>
  );

}