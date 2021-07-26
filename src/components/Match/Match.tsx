import { useContext, useState, useRef } from 'react';
import MatchMap from './MatchMap';
import { ioContext, dataContext } from '../../App';
import { useParams } from 'react-router-dom';
import topBar from './topBar';
import Event from './Event';
import MilitaryButton from './MilitaryButton';
import EndTurnButton from './EndTurnButton';
import GetMatchData from '../Loop/GetMatchData';

const Match = () => {
  const { turnData } = useContext(dataContext);
  const [clickedRegion, setClickedRegion] = useState('');
  const [showEvent, setShowEvent] = useState(true);
  const [showMilitary, setShowMilitary] = useState(false);
  const [showMilitaryAttack, setShowMilitaryAttack] = useState(false);
  const [militaryBuy, setMilitaryBuy] = useState(0);
  const [deployTerritory, setDeployTerritory] = useState('');
  const [attackTerritory, setAttackTerritory] = useState('');
  const [fromAttackTerritory, setFromAttackTerritory] = useState('');
  const [attackValue, setAttackValue] = useState(1000);
  const [refreshHook, setRefreshHook] = useState(false);
  const sendData = useRef<any>({});
  const params: any = useParams();
  const user_name = localStorage.getItem('user_name');
  const match_id = params?.id;
  const findMatchEmitted = useRef<boolean>(true);
  const findMatchEmitted2 = useRef<boolean>(false);

  GetMatchData(
    match_id,
    refreshHook,
    setRefreshHook,
    'refresh_match',
    findMatchEmitted,
    findMatchEmitted2,
    !showEvent,
    showEvent,
    setShowEvent
  );

  if (turnData?.current?.event?.title.length > 0 && !showEvent) {
    setShowEvent(true);
  }

  if (turnData?.current?.allTerritories) {
    return (
      <>
        {showEvent &&
          Event(turnData?.current?.event, setShowEvent, turnData, sendData)}
        {topBar(turnData?.current)}
        {MilitaryButton(
          turnData,
          setShowMilitary,
          showMilitary,
          user_name,
          match_id,
          militaryBuy,
          setMilitaryBuy,
          deployTerritory,
          setDeployTerritory,
          attackTerritory,
          setAttackTerritory,
          fromAttackTerritory,
          setFromAttackTerritory,
          attackValue,
          setAttackValue,
          sendData,
          showMilitaryAttack,
          setShowMilitaryAttack
        )}
        <MatchMap
          territories={turnData?.current?.allTerritories}
          setClickedRegion={setClickedRegion}
        />
        {EndTurnButton(turnData?.current)}
      </>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Match;
