import { Button, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import GetTurn from './GetTurn';
import requestAxios from '../Axios/requestAxios';
//Note: We are letting people know the modifiers before choosing. But idk for now.
//To fix just send event titles and descriptions and an identifier and send call to backend when it happens.
const Event = (event: any, setShowEvent: any, turnData: any, sendData: any) => {
  const screenWidth = window.screen.availWidth;
  const eventVW = screenWidth < 1000 ? '80vw' : '50vw';
  const eventRight = screenWidth < 1000 ? '8%' : '25%';
  const params: any = useParams();
  const matchId = params?.id;
  const selectEventChoice = async (choice: string) => {
    //HERE CREATE AND CALL API
    sendData.current = {};
    sendData.current.user_name = localStorage.getItem('user_name');
    sendData.current.match_id = matchId;
    sendData.current.eventChoice = choice;
    sendData.current.eventId = event._id;

    await requestAxios
      .post(`/match/send_turn_event`, sendData.current)
      .then((res) => {
        if (res.data) {
          turnData.current = res.data;
        }
      });

    setShowEvent(false);
  };
  if (event?.description) {
    return (
      <div
        style={{
          zIndex: 1,
          width: eventVW,
          backgroundColor: 'white',
          position: 'absolute',
          top: '30%',
          boxShadow: '2px 2px 2px black',
          right: eventRight,
        }}
      >
        <Row>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
              padding: '5px',
              textAlign: 'center',
            }}
          >
            {event.title}
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {event.description}
          </Col>
        </Row>
        <Row style={{ marginTop: '13px', marginBottom: '13px' }}>
          <Col
            span={12}
            style={{
              display: 'flex',
              fontSize: '18px',
              paddingLeft: '15px',
            }}
          >
            <Button onClick={() => selectEventChoice('firstChoice')}>
              ⬅️ {event.firstChoice.title}
            </Button>
          </Col>
          <Col
            span={12}
            style={{
              display: 'flex',
              fontSize: '18px',
              justifyContent: 'flex-end',
              paddingRight: '15px',
            }}
          >
            <Button onClick={() => selectEventChoice('secondChoice')}>
              {event.secondChoice.title} ➡️{' '}
            </Button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Event;
