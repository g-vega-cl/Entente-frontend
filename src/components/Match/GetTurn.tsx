import { useParams } from 'react-router-dom';

const GetTurn = (
  io: any,
  eventChoice: string,
  eventId: string,
  match_id: string
) => {
  const user_name = localStorage.getItem('user_name');
  if (io) {
    io.emit('get_turn', { user_name, match_id, eventChoice, eventId });
  }
};

export default GetTurn;
