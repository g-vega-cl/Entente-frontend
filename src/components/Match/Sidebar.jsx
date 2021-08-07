import React from 'react';
import { Button, Table } from 'antd';
import requestAxios from '../Axios/requestAxios';
import { getOwnerColor } from './MatchMap';

const Sidebar = (allTerritories, user_name, match_id, turnData) => {
  const onInfluenceTerritory = async (attackTerritory) => {
    await requestAxios
      .post(`/match/influence_territory`, {
        user_name,
        match_id,
        attackTerritory,
        attackValue: 500,
      })
      .then((res) => {
        if (res.data) {
          turnData.current = res.data;
        }
      });
  };

  const columns = [
    {
      title: 'Territory',
      dataIndex: 'Territory',
      key: 'Territory',
    },
    {
      title: 'Influence',
      dataIndex: 'Influence',
      key: 'Influence',
    },
    {
      title: 'Attack',
      dataIndex: 'Attack',
      key: 'Attack',
      render: (text, record) => (
        <div style={{ backgroundColor: getOwnerColor(record.Owner, 'white') }}>
          <Button
            onClick={() => {
              onInfluenceTerritory(record.Territory);
            }}
          >
            💢
          </Button>
        </div>
      ),
    },
  ];

  const dataFilter = allTerritories.filter((territory) => {
    if (
      territory.name !== 'Spain' &&
      territory.name !== 'UK' &&
      territory.name !== 'Italy' &&
      territory.name !== 'Germany' &&
      territory.name !== 'Russia' &&
      territory.name !== 'France'
    ) {
      return true;
    }
    return false;
  });
  const data = dataFilter.map((territory, index) => {
    return {
      key: index,
      Territory: territory.name,
      Influence: territory.influence.toFixed(0),
      Owner: territory.owner,
    };
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        width: '350px',
        backgroundColor: 'white',
      }}
    >
      <Table columns={columns} dataSource={data} scroll={{ y: 180 }} />
    </div>
  );
};

export default Sidebar;
