import { BattleRoyaleUser } from '../BattleRoyaleUser';

const idealBattleRoyaleUserData = {
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
const incompleteBattleRoyaleUserData = {
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
};

it('works in case of a good battle royale user data', () => {
  expect(BattleRoyaleUser.fromData(idealBattleRoyaleUserData, 'mock_user')).toMatchObject({
    username: 'mock_user',
    matches: 163,
    wins: 11,
    points: 534,
    kills: 359,
    dailyMatches: 1,
    dailyWins: 0,
    dailyPoints: 2,
    dailyKills: 3,
    weeklyMatches: 1,
    weeklyWins: 0,
    weeklyPoints: 2,
    weeklyKills: 3,
    saveDate: new Date('2020-10-13'),
    nowDate: new Date('2020-10-25'),
    foodConsumed: 2681772,
    playersConsumed: 21963,
    virusesConsumed: 41747,
    mothercellsConsumed: 0,
    splitsCount: 2005716,
    deathsCount: 47481,
    totalAliveTime: 1150574,
    level: 89,
    memberType: 2,
  });
});

it('throws a error in case of a bad battle royale user data', () => {
  expect(() => BattleRoyaleUser.fromData(incompleteBattleRoyaleUserData, 'mock_user')).toThrow(
    'The given data is not assignable to type BattleRoyaleUserData',
  );
});
