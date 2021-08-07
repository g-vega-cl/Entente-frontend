import { Tooltip } from 'antd';

const EndTurnButton = (data: any) => {
  const indicatorsFontSize = '24px';
  const getTimeLeft = () => {
    if (data?.lastTurn) {
      const now = new Date();
      const secondsLeft = (
        45 -
        (now.getTime() - new Date(data?.lastTurn).getTime()) / 1000
      ).toFixed(0);
      return `${secondsLeft}`;
    }
    return '45';
  };

  if (data?.nation_name) {
    return (
      <Tooltip title='Time before next event'>
        <div
          style={{
            position: 'absolute',
            height: '45px',
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            boxShadow: '2px 2px 2px black',
            top: '93%',
            right: '3%',
          }}
        >
          <p
            style={{
              marginRight: '20px',
              marginLeft: '20px',
              fontSize: indicatorsFontSize,
            }}
          >
            ⌛ {getTimeLeft()}
          </p>
        </div>
      </Tooltip>
    );
  } else {
    return <></>;
  }
};

export default EndTurnButton;
