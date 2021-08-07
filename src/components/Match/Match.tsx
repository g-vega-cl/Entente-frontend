import { useContext, useState, useRef } from 'react';
import MatchMap from './MatchMap';
import { dataContext } from '../../App';
import { useParams } from 'react-router-dom';
import topBar from './topBar';
import Event from './Event';
import EndTurnButton from './EndTurnButton';
import GetMatchData from '../Loop/GetMatchData';
import Sidebar from './Sidebar';

const Match = () => {
  const { turnData } = useContext(dataContext);
  const [showEvent, setShowEvent] = useState(true);
  const [refreshHook, setRefreshHook] = useState(false);
  const sendData = useRef<any>({});
  const params: any = useParams();
  const user_name = localStorage.getItem('user_name');
  const match_id = params?.id;

  GetMatchData(
    match_id,
    refreshHook,
    setRefreshHook,
    'refresh_match',
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
        <MatchMap territories={turnData?.current?.allTerritories} />
        {EndTurnButton(turnData?.current)}
        {Sidebar(
          turnData?.current?.allTerritories,
          user_name,
          match_id,
          turnData
        )}
      </>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Match;
