//Track state for allSeedPackets, filteredSeedPackets, seedFormPlantName, seedFormVariety, seedFormYearHarvested, seedFormGardener, seedFormPacketColor
//Pass state as props correctly to SeedPacketForm, SeedPacket, and SeedPacketList
//Define a handleDeleteSeedPacket function that deletes a seed packet from the state array using name
//define a handleFilterSeedPacket function that takes in a string and set filterSeedPackets to an array of seed packets whose name matches that string

import './App.css';
import { useState, useEffect } from 'react';
import SeedPacketForm from './SeedPacketForm';
import SeedPacketList from './SeedPacketList';
import SeedPacket from './SeedPacket';




function App() {
  const [allSeedPackets, setAllSeedPackets] = useState([]);
  const [filteredSeedPackets, setAllFilteredSeedPackets] = useState([]);
  const [seedFormPlantName, setSeedFormPlantName] = useState([]);
  const [seedFormVariety, setSeedFormVariety] = useState([]);
  const [seedFormYearHarvested, setSeedFormYearHarvested] = useState('');
  const [seedFormGardener, setSeedFormGardener] = useState('');
  const [seedFormPacketColor, setSeedFormPacketColor] = useState('brown');
  // const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => { 
    setAllFilteredSeedPackets(allSeedPackets); 
    
  }, [allSeedPackets]);

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
    setSeedFormPacketColor('brown');
  }

  function handleDeleteSeedPacket(name) {   
   
    const seedPacketIndex = allSeedPackets.findIndex((seedpacket) => seedpacket.name === name);
   
    allSeedPackets.splice(seedPacketIndex, 1);
    setAllFilteredSeedPackets([...allSeedPackets]);
  }
  function handleFilterSeedPackets(search) {
    const searchSeedPackets = allSeedPackets.filter((seedpacket) => seedpacket.name.includes(search));


    setAllFilteredSeedPackets(searchSeedPackets);
  }

  return (
    <div className="App">
      <div className="current-seedpacket quarter">
        <SeedPacket
          seedpacket={{
            name: seedFormPlantName,
            variety: seedFormVariety,
            year: seedFormYearHarvested,
            gardener: seedFormGardener,
            color: seedFormPacketColor,
          }}
        />
      
      </div>
      <div className="seedpacket-filter quarter">
      Filter SeedPacket
        <input onChange={(e) => handleFilterSeedPackets(e.target.value)} />
      </div>
      <SeedPacketForm 
        submitSeedPacket={submitSeedPacket}
        seedFormPlantName={seedFormPlantName}
        setSeedFormPlantName={setSeedFormPlantName}
        seedFormVariety={seedFormVariety}
        setSeedFormVariety={setSeedFormVariety}
        seedFormYearHarvested={seedFormYearHarvested}
        setSeedFormYearHarvested={setSeedFormYearHarvested}
        seedFormGardener={seedFormGardener}
        setSeedFormGardener={setSeedFormGardener}
        seedFormPacketColor={seedFormPacketColor}
        setSeedFormPacketColor={setSeedFormPacketColor}
      />
      <SeedPacketList
        seedpackets={filteredSeedPackets}
        handleDeleteSeedPacket={handleDeleteSeedPacket}
      />
    </div>
  );
}

export default App;
