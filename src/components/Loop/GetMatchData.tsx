import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { dataContext } from '../../App';
import requestAxios from '../Axios/requestAxios';

const GetMatchData = (
  matchID: string,
  refreshHook: boolean,
  setRefreshHook: any,
  action: string,
  loop1: any,
  loop2: any,
  run: boolean,
  showEvent: boolean,
  setShowEvent: any
) => {
  const { turnData } = useContext(dataContext);
  const sendData = useRef<any>({});
  const history = useHistory();
  sendData.current.name = localStorage.getItem('user_name');
  sendData.current.matchID = matchID;
  if (action === 'find_match') {
    sendData.current.action = 'wait_start_match';
  }

  if (action === 'refresh_match') {
    sendData.current.action = 'refresh_match';
  }

  const interval = 2000;

  if (run) {
    if (loop1.current) {
      setTimeout(async () => {
        await requestAxios
          .post(`/match/get_match_data`, sendData.current)
          .then((res) => {
            loop2.current = true;
            turnData.current = res.data;
            if (turnData?.current?.event) {
              if (showEvent) {
                history.push(`/match/${matchID}`);
              } else {
                setShowEvent(true);
              }
            } else {
              setRefreshHook(!refreshHook);
            }
          });
      }, interval);
      loop1.current = false;
    }

    if (loop2.current) {
      setTimeout(async () => {
        await requestAxios
          .post(`/match/get_match_data`, sendData.current)
          .then((res) => {
            loop1.current = true;
            turnData.current = res.data;
            if (turnData?.current?.event) {
              if (showEvent) {
                history.push(`/match/${matchID}`);
              } else {
                setShowEvent(true);
              }
            } else {
              setRefreshHook(!refreshHook);
            }
          });
      }, interval);
      loop2.current = false;
    }
  }
};

export default GetMatchData;
