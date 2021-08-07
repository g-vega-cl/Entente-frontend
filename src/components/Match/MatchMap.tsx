import Europe from './terrains/Europe';

export const getOwnerColor = (owner: string, defaultColor: string) => {
  switch (owner.toLocaleLowerCase()) {
    case 'france':
      return 'blue';
    case 'uk':
      return 'red';
    case 'russia':
      return 'snow';
    case 'italy':
      return 'green';
    case 'germany':
      return 'brown';
    case 'spain':
      return 'yellow';
    default:
      return defaultColor;
  }
};

const MatchMap = ({ territories }: any) => {
  const colors = {
    scandinavia: 'grey',
    portugal: 'grey',
    benelux: 'grey',
    poland: 'grey',
    austriaHungary: 'grey',
    yugoslavia: 'grey',
    balkans: 'grey',
    ukraine: 'grey',
    baltic: 'grey',
    turkey: 'grey',
  };

  territories.forEach((territory: any) => {
    switch (territory.name.toLowerCase()) {
      case 'scandinavia':
        colors.scandinavia = getOwnerColor(territory.owner, '#b1dde6');
        return;
      case 'portugal':
        colors.portugal = getOwnerColor(territory.owner, '#f0ffe0');
        return;
      case 'benelux':
        colors.benelux = getOwnerColor(territory.owner, '#cdb1e6');
        return;
      case 'poland':
        colors.poland = getOwnerColor(territory.owner, '#ffa6ed');
        return;
      case 'austriahungary':
        colors.austriaHungary = getOwnerColor(territory.owner, '#edfa32');
        return;
      case 'yugoslavia':
        colors.yugoslavia = getOwnerColor(territory.owner, '#d0d1b4');
        return;
      case 'balkans':
        colors.balkans = getOwnerColor(territory.owner, '#b1e6db');
        return;
      case 'ukraine':
        colors.ukraine = getOwnerColor(territory.owner, '#b1b2e6');
        return;
      case 'baltic':
        colors.baltic = getOwnerColor(territory.owner, '#c0e6b1');
        return;
      case 'turkey':
        colors.turkey = getOwnerColor(territory.owner, '#e6c2b1');
        return;
      default:
        return;
    }
  });

  if (true) {
    return (
      <div
        style={{
          backgroundColor: '#877e73',
        }}
      >
        {Europe({
          franceColor: 'blue',
          UKColor: 'red',
          russiaColor: 'snow',
          spainColor: 'yellow',
          germanyColor: 'brown',
          italyColor: 'green',
          portugalColor: colors.portugal,
          beneluxColor: colors.benelux,
          polandColor: colors.poland,
          austriaHungraryColor: colors.austriaHungary,
          yugoslaviaColor: colors.yugoslavia,
          balkansColor: colors.balkans,
          ukraineColor: colors.ukraine,
          balticColor: colors.baltic,
          turkeyColor: colors.turkey,
          scandinaviaColor: colors.scandinavia,
        })}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default MatchMap;
