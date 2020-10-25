import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BattleRoyaleUser } from '../../entities/BattleRoyaleUser';
import { getBattleRoyaleUser } from '../getBattleRoyaleUser';

const mock = new MockAdapter(axios);

const idealResponse = {
  matches: '163',
  wins: '11',
  points: '534',
  kills: '359',
  daily_matches: '1',
  daily_wins: '0',
  daily_points: '2',
  daily_kills: '3',
  weekly_matches: '1',
  weekly_wins: '0',
  weekly_points: '2',
  weekly_kills: '3',
  save_date: '2020-10-13',
  date_now: '2020-10-25',
  food_consumed: '2681772',
  players_consumed: '21963',
  viruses_consumed: '41747',
  mothercells_consumed: '0',
  splits_count: '2005716',
  death_count: '47481',
  total_time_alive: '1150574',
  level: '89',
  member_type: '2',
};
const noUserResponse = 'noUser';
const stringResponse = 'baz';

it('works in regular case', async () => {
  mock.onGet('https://agma.io/royale_stats.php', { params: { user: 'mock_user' } }).reply(200, idealResponse);
  const idealResult = BattleRoyaleUser.fromData(idealResponse, 'mock_user');
  await expect(getBattleRoyaleUser('mock_user')).resolves.toEqual(idealResult);
});

it('throws a error in case of no user exists', async () => {
  mock.onGet('https://agma.io/royale_stats.php', { params: { user: 'mock_user' } }).reply(200, noUserResponse);
  await expect(getBattleRoyaleUser('mock_user')).rejects.toThrow(
    'The user does not exist or have not played Battle Royale yet',
  );
});

it('throws a error in case of incorrect server response', async () => {
  mock.onGet('https://agma.io/royale_stats.php', { params: { user: 'mock_user' } }).reply(200, stringResponse);
  await expect(getBattleRoyaleUser('mock_user')).rejects.toThrow(
    'The user does not exist or have not played Battle Royale yet',
  );
});
