import { Tooltip } from 'antd';

const topBar = (data: any) => {
  const indicatorsFontSize = '24px';
  if (data.nation_name) {
    return (
      <div
        style={{
          position: 'absolute',
          height: '45px',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1,
          display: 'flex',
          boxShadow: '2px 2px 2px black',
        }}
      >
        <p style={{ marginLeft: '20px' }}>{data.nation_name}</p>
        <Tooltip title='Cash'>
          <p
            style={{
              marginRight: '20px',
              marginLeft: '20px',
              fontSize: indicatorsFontSize,
            }}
          >
            💲 {data.cash}{' '}
          </p>
        </Tooltip>
        <Tooltip title='Income'>
          {data.income > 0 ? (
            <p style={{ fontSize: indicatorsFontSize }}>📈 {data.income} </p>
          ) : (
            <p style={{ fontSize: indicatorsFontSize }}>📉 {data.income} </p>
          )}
        </Tooltip>
        <Tooltip title='Stabiltiy'>
          <p style={{ fontSize: indicatorsFontSize, marginLeft: '20px' }}>
            ⚖️ {data.stability}
          </p>
        </Tooltip>
        <Tooltip title='Authority'>
          <p style={{ fontSize: indicatorsFontSize, marginLeft: '20px' }}>
            🦾 {data.authority}
          </p>
        </Tooltip>
        <Tooltip title='hdi'>
          <p style={{ fontSize: indicatorsFontSize, marginLeft: '20px' }}>
            😃 {data.hdi}
          </p>
        </Tooltip>
        <Tooltip title='innovation'>
          <p style={{ fontSize: indicatorsFontSize, marginLeft: '20px' }}>
            🔬 {data.innovation.toFixed(2)}
          </p>
        </Tooltip>
        <Tooltip title='year'>
          <p style={{ fontSize: indicatorsFontSize, marginLeft: '20px' }}>
            {data.year}
          </p>
        </Tooltip>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default topBar;
