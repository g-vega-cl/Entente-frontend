import France from './terrains/France';
import Spain from './terrains/Spain';
import UK from './terrains/UK';
import Germany from './terrains/Germany';
import Italy from './terrains/Italy';
import Russia from './terrains/Russia';
import Netherlands from './terrains/Netherlands';
import Scandinavia from './terrains/Scandinavia';
import Interim from './terrains/Interim';
import Balcans from './terrains/Balcans';
import getTerrtoryColor from './getTerritoryColor';

const MatchMap = ({ territories, setClickedRegion }: any) => {
  if (territories.length > 0) {
    return (
      <div
        style={{ backgroundColor: '#877e73', height: '110vh', width: '110vw' }}
      >
        <div
          style={{
            width: '1536px',
            height: '864px',
            minWidth: '1536px',
            minHeight: '864px',
            backgroundColor: '#877e73',
            position: 'absolute',
            overflowY: 'hidden',
            overflowX: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: '70%', right: '73%' }}>
            <Spain
              spainNorth={getTerrtoryColor('NorthSpain', territories)[0]}
              spainSouth={getTerrtoryColor('SouthSpain', territories)[0]}
              setClickedRegion={setClickedRegion}
              influenceNorth={getTerrtoryColor('NorthSpain', territories)[1]}
              influenceSouth={getTerrtoryColor('SouthSpain', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '40.5%', right: '66%' }}>
            <France
              franceEast={getTerrtoryColor('EastFrance', territories)[0]}
              franceWest={getTerrtoryColor('WestFrance', territories)[0]}
              franceSouth={getTerrtoryColor('SouthFrance', territories)[0]}
              setClickedRegion={setClickedRegion}
              franceEastInfluence = {getTerrtoryColor('EastFrance', territories)[1]}
              franceWestInfluence = {getTerrtoryColor('WestFrance', territories)[1]}
              FranceSouthInfluence = {getTerrtoryColor('SouthFrance', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '4%', right: '75%' }}>
            <UK
              UKNorth={getTerrtoryColor('NorthUK', territories)[0]}
              UKMid={getTerrtoryColor('MidUK', territories)[0]}
              UKSouth={getTerrtoryColor('SouthUK', territories)[0]}
              setClickedRegion={setClickedRegion}
              UKNorthInfluence={getTerrtoryColor('NorthUK', territories)[1]}
              UKMidInfluence={getTerrtoryColor('MidUK', territories)[1]}
              UKSouthInfluence={getTerrtoryColor('SouthUK', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '17.7%', right: '53.7%' }}>
            <Germany
              GermanyEast={getTerrtoryColor('EastGermany', territories)[0]}
              GermanySouth={getTerrtoryColor('SouthGermany', territories)[0]}
              GermanyWest={getTerrtoryColor('WestGermany', territories)[0]}
              setClickedRegion={setClickedRegion}
              GermanyEastInfluence={getTerrtoryColor('EastGermany', territories)[1]}
              GermanySouthInfluence={getTerrtoryColor('SouthGermany', territories)[1]}
              GermanyWestInfluence={getTerrtoryColor('WestGermany', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '57.9%', right: '51.9%' }}>
            <Italy
              ItalyNorth={getTerrtoryColor('NorthItaly', territories)[0]}
              ItalySouth={getTerrtoryColor('southItaly', territories)[0]}
              setClickedRegion={setClickedRegion}
              ItalyNorthInfluence={getTerrtoryColor('NorthItaly', territories)[1]}
              ItalySouthInfluence={getTerrtoryColor('southItaly', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '-50%', right: '-10%' }}>
            <Russia
              RussiaEast={getTerrtoryColor('EastRussia', territories)[0]}
              RussiaWest={getTerrtoryColor('WestRussia', territories)[0]}
              setClickedRegion={setClickedRegion}
              RussiaEastInfluence={getTerrtoryColor('EastRussia', territories)[1]}
              RussiaWestInfluence={getTerrtoryColor('WestRussia', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '31%', right: '71%' }}>
            <Netherlands
              Netherlands={getTerrtoryColor('Netherlands', territories)[0]}
              setClickedRegion={setClickedRegion}
              NetherlandsInfluence={getTerrtoryColor('Netherlands', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '-31.7%', right: '45%' }}>
            <Scandinavia
              Scandinavia={getTerrtoryColor('Scandinavia', territories)[0]}
              setClickedRegion={setClickedRegion}
              ScandinaviaInfluence={getTerrtoryColor('Scandinavia', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '17%', right: '38%' }}>
            <Interim
              color={getTerrtoryColor('Interim', territories)[0]}
              setClickedRegion={setClickedRegion}
              Influence={getTerrtoryColor('Interim', territories)[1]}
            />
          </div>
          <div style={{ position: 'absolute', top: '47%', right: '30%' }}>
            <Balcans
              color={getTerrtoryColor('Balkans', territories)[0]}
              setClickedRegion={setClickedRegion}
              Influence={getTerrtoryColor('Balkans', territories)[1]}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default MatchMap;
