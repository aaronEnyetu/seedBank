//Track state for allSeedPackets, filteredSeedPackets, seedFormPlantName, seedFormVariety, seedFormYearHarvested, seedFormGardener, seedFormPacketColor
//Pass state as props correctly to SeedPacketForm, SeedPacket, and SeedPacketList
//Define a handleDeleteSeedPacket function that deletes a seed packet from the state array using name
//define a handleFilterSeedPacket function that takes in a string and set filterSeedPackets to an array of seed packets whose name matches that string

import './App.css';
import { useSate, useEffect } from 'react';
import SeedPacketForm from './SeedPacketForm';
import SeedPacketList from './SeedPacketList';
import SeedPacket from './SeedPacket';
import { useState } from 'react/cjs/react.production.min';



function App() {
  const [allSeedPackets, setAllSeedPackets] = useSate([]);
  const [filteredSeedPackets, setAllFilteredSeedPackets] = useSate([]);
  const [seedFormPlantName, setSeedFormPlantName] = useSate([]);
  const [seedFormVariety, setSeedFormVariety] = useSate([]);
  const [seedFormYearHarvested, setSeedFormYearHarvested] = useSate('');
  const [seedFormGardener, setSeedFormGardener] = useSate('');
  const [seedFormPacketColor, setSeedFormPacketColor] = useState('lightbrown');
  const [filterQuery, setFilterQuery] = useSate('');

  useEffect(() => handleFilterSeedPackets(filterQuery), [allSeedPackets, filterQuery]);

  function submitSeedPacket(e) {
    e.preventDefault();

    const newSeedPacket = {
      name: seedFormPlantName,
      variety: seedFormVariety,
      year: seedFormYearHarvested,
      gardener: seedFormGardener,
      color: seedFormPacketColor,
    };
    setAllSeedPackets([...allSeedPackets, newSeedPacket]);

    setSeedFormPlantName('');
    setSeedFormVariety('');
    setSeedFormYearHarvested('');
    setSeedFormGardener('');
    setSeedFormPacketColor('lightbrown');
  }

  function handleDeleteSeedPacket(name) {
    const seedPacketIndex = allSeedPackets.findIndex(seedpacket) => seedpacket.name === name);
    allSeedPackets.splice(seedPacketIndex, 1);
    setAllSeedPackets([...allSeedPackets]);
  }
  function handleFilterSeedPacket(search)
  const searchSeedPackets = allSeedPackets.filter((movie) => movie.name.includes(search));


  search ? setAllFilteredSeedPackets(searchSeedPackets) : setAllFilteredSeedPackets(allSeedPackets);
}



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
