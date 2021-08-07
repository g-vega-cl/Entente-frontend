import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { dataContext } from '../../App';
import requestAxios from '../Axios/requestAxios';

const GetMatchData = async (
  matchID: string,
  refreshHook: boolean,
  setRefreshHook: any,
  action: string,
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

  useQuery(
    'queryTurnData',
    async () => {
      if (run) {
        try {
          await requestAxios
            .post(`/match/get_match_data`, sendData.current)
            .then((res) => {
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
        } catch (error) {}
      }
    },
    {
      refetchInterval: 1000,
    }
  );
};

export default GetMatchData;
