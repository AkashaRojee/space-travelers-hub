import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TableBody from '../../features/missions/TableBody';

const missions = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
];

const join = (id) => id;

describe('Table body component', () => {
  beforeEach(() => {
    render(<TableBody missions={missions} onJoinMission={join} />);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<TableBody missions={missions} onJoinMission={join} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change to leave mission', () => {
    fireEvent.click(screen.getByText('Join Mission'));
    const result = screen.getByTitle('badge');
    expect(result.memoizedProps).not.toBe('NOT A MEMBER');
  });
});
