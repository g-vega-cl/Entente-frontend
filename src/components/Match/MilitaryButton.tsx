import { Select, InputNumber, Button, Tooltip, Row, Col } from 'antd';
import requestAxios from '../Axios/requestAxios';

const { Option } = Select;
const MilitaryButton = (
  turnData: any,
  setShowMilitary: any,
  showMilitary: boolean,
  user_name: any,
  match_id: any,
  militaryBuy: any,
  setMilitaryBuy: any,
  deployTerritory: any,
  setDeployTerritory: any,
  attackTerritory: any,
  setAttackTerritory: any,
  fromAttackTerritory: any,
  setFromAttackTerritory: any,
  attackValue: any,
  setAttackValue: any,
  sendData: any,
  showMilitaryAttack: boolean,
  setShowMilitaryAttack: any
) => {
  const indicatorsFontSize = '24px';
  const screenWidth = window.screen.availWidth;
  const divVW = screenWidth < 1000 ? '80vw' : '50vw';
  const divRight = screenWidth < 1000 ? '8%' : '25%';
  const toggleShowMilitary = () => {
    setShowMilitary(!showMilitary);
  };
  const toggleShowMilitaryAttack = () => {
    setShowMilitaryAttack(!showMilitaryAttack);
  };
  const onChangeInput = (value: any) => {
    setMilitaryBuy(value);
  };

  const onBuyMilitary = async () => {
    sendData.current.user_name = user_name;
    sendData.current.match_id = match_id;
    sendData.current.militaryBuy = militaryBuy;
    sendData.current.deployTerritory = deployTerritory;

    await requestAxios
      .post(`/match/buy_military_influence`, sendData.current)
      .then((res) => {
        if (res.data) {
          turnData.current = res.data;
        }
      });
    toggleShowMilitary();
  };

  const onSelectDeployTerritory = (value: any) => {
    setDeployTerritory(value);
  };

  const getmaxTerritoryInfluence = (data: any) => {
    if (data.allTerritories.length > 0) {
      let maxTerritoryInfluence = 0;
      data.allTerritories.forEach((allTerritory: any) => {
        if (allTerritory.owner === data.nation_name) {
          if (maxTerritoryInfluence < allTerritory.influence) {
            maxTerritoryInfluence = allTerritory.influence;
          }
        }
      });
      return maxTerritoryInfluence;
    }
    return 0;
  };

  const onAttackTerritory = async () => {
    sendData.current = {};
    sendData.current.user_name = user_name;
    sendData.current.match_id = match_id;
    sendData.current.attackTerritory = attackTerritory;
    sendData.current.fromAttackTerritory = fromAttackTerritory;
    sendData.current.attackValue = attackValue;

    await requestAxios
      .post(`/match/attack_territory_event`, sendData.current)
      .then((res) => {
        if (res.data) {
          turnData.current = res.data;
        }
      });
    toggleShowMilitaryAttack();
  };

  if (turnData.current.turn) {
    return (
      <>
        <Tooltip title='Buy influence'>
          <Button
            style={{
              position: 'absolute',
              height: '45px',
              width: '50px',
              backgroundColor: 'white',
              zIndex: 1,
              display: 'flex',
              boxShadow: '2px 2px 2px black',
              top: '45px',
              justifyContent: 'center',
            }}
            onClick={() => toggleShowMilitary()}
          >
            <p
              style={{
                fontSize: indicatorsFontSize,
              }}
            >
              💂{' '}
            </p>
          </Button>
        </Tooltip>
        <Tooltip title='Attack territory'>
          <Button
            style={{
              position: 'absolute',
              height: '45px',
              width: '50px',
              backgroundColor: 'white',
              zIndex: 1,
              display: 'flex',
              boxShadow: '2px 2px 2px black',
              top: '45px',
              left: '70px',
              justifyContent: 'center',
            }}
            onClick={() => toggleShowMilitaryAttack()}
          >
            <p
              style={{
                fontSize: indicatorsFontSize,
              }}
            >
              💢{' '}
            </p>
          </Button>
        </Tooltip>
        {showMilitary && (
          <div
            style={{
              zIndex: 1,
              width: divVW,
              backgroundColor: 'white',
              position: 'absolute',
              top: '30%',
              boxShadow: '2px 2px 2px black',
              right: divRight,
            }}
          >
            <Row style={{ marginTop: '13px', marginBottom: '13px' }}>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  paddingLeft: '15px',
                }}
              >
                <p>
                  Buy {militaryBuy} influence in {deployTerritory}
                </p>
              </Col>
            </Row>
            <Row style={{ marginTop: '13px', marginBottom: '13px' }}>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  paddingLeft: '15px',
                }}
              >
                <InputNumber
                  max={turnData.current.cash}
                  onChange={onChangeInput}
                  value={militaryBuy}
                />
              </Col>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={deployTerritory}
                  onChange={onSelectDeployTerritory}
                >
                  {turnData.current.territories.map(
                    (territoryName: any, key: any) => {
                      return (
                        <Option key={key} value={territoryName.name}>
                          {territoryName.name}
                        </Option>
                      );
                    }
                  )}
                </Select>
              </Col>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Button
                  onClick={() => {
                    onBuyMilitary();
                  }}
                >
                  Buy
                </Button>
              </Col>
            </Row>
          </div>
        )}
        <div
          style={{
            zIndex: 1,
            width: divVW,
            backgroundColor: 'white',
            position: 'absolute',
            top: '30%',
            boxShadow: '2px 2px 2px black',
            right: divRight,
          }}
        >
          {showMilitaryAttack && (
            <Row style={{ paddingTop: '13px', paddingBottom: '13px' }}>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  paddingLeft: '15px',
                }}
              >
                <InputNumber
                  max={getmaxTerritoryInfluence(turnData.current)}
                  onChange={(value: any) => {
                    setAttackValue(value);
                  }}
                  value={attackValue}
                />
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={fromAttackTerritory}
                  onChange={(value: any) => setFromAttackTerritory(value)}
                >
                  {turnData.current.territories.map(
                    (territoryName: any, key: any) => {
                      return (
                        <Option key={key} value={territoryName.name}>
                          {territoryName.name}
                        </Option>
                      );
                    }
                  )}
                </Select>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={attackTerritory}
                  onChange={(value: any) => setAttackTerritory(value)}
                >
                  {turnData.current.allTerritories.map(
                    (allTerritoriesName: any, key: any) => {
                      return (
                        <Option key={key} value={allTerritoriesName.name}>
                          {allTerritoriesName.name}
                        </Option>
                      );
                    }
                  )}
                </Select>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Button
                  onClick={() => {
                    onAttackTerritory();
                  }}
                >
                  Attack!
                </Button>
              </Col>
            </Row>
          )}
        </div>
      </>
    );
  } else {
    return (
      <Tooltip title='Select option to buy influence'>
        <Button
          style={{
            position: 'absolute',
            height: '45px',
            width: '50px',
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            boxShadow: '2px 2px 2px black',
            top: '45px',
          }}
        >
          <p
            style={{
              padding: '5px',
              fontSize: indicatorsFontSize,
            }}
          >
            💂{' '}
          </p>
        </Button>
      </Tooltip>
    );
  }
};

export default MilitaryButton;
