/**
 * Server object from API response
 */
export type BattleRoyaleUserData = {
  matches: string;
  wins: string;
  points: string;
  kills: string;
  daily_matches: string;
  daily_wins: string;
  daily_points: string;
  daily_kills: string;
  weekly_matches: string;
  weekly_wins: string;
  weekly_points: string;
  weekly_kills: string;
  save_date: string;
  date_now: string;
  food_consumed: string;
  players_consumed: string;
  viruses_consumed: string;
  mothercells_consumed: string;
  splits_count: string;
  death_count: string;
  total_time_alive: string;
  level: string;
  member_type: string;
};

/**
 * Check if Agma.IO API response valid
 * @param data Server object from API response
 */
// eslint-disable-next-line
export const isBattleRoyaleUserData = (data: any): data is BattleRoyaleUserData =>
  'matches' in data &&
  'wins' in data &&
  'points' in data &&
  'kills' in data &&
  'daily_matches' in data &&
  'daily_wins' in data &&
  'daily_points' in data &&
  'daily_kills' in data &&
  'weekly_matches' in data &&
  'weekly_wins' in data &&
  'weekly_points' in data &&
  'weekly_kills' in data &&
  'save_date' in data &&
  'date_now' in data &&
  'food_consumed' in data &&
  'players_consumed' in data &&
  'viruses_consumed' in data &&
  'mothercells_consumed' in data &&
  'splits_count' in data &&
  'death_count' in data &&
  'total_time_alive' in data &&
  'level' in data &&
  'member_type' in data;

export class BattleRoyaleUser {
  username = '';
  matches = 0;
  wins = 0;
  points = 0;
  kills = 0;
  dailyMatches = 0;
  dailyWins = 0;
  dailyPoints = 0;
  dailyKills = 0;
  weeklyMatches = 0;
  weeklyWins = 0;
  weeklyPoints = 0;
  weeklyKills = 0;
  saveDate = new Date();
  nowDate = new Date();
  foodConsumed = 0;
  playersConsumed = 0;
  virusesConsumed = 0;
  mothercellsConsumed = 0;
  splitsCount = 0;
  deathsCount = 0;
  totalAliveTime = 0;
  level = 0;
  memberType = 0;
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown, username: string): BattleRoyaleUser {
    const user = new BattleRoyaleUser();
    if (!isBattleRoyaleUserData(data))
      throw new TypeError('The given data is not assignable to type BattleRoyaleUserData');
    user.username = username;
    user.matches = Number(data.matches);
    user.wins = Number(data.wins);
    user.points = Number(data.points);
    user.kills = Number(data.kills);
    user.dailyMatches = Number(data.daily_matches);
    user.dailyWins = Number(data.daily_wins);
    user.dailyPoints = Number(data.daily_points);
    user.dailyKills = Number(data.daily_kills);
    user.weeklyMatches = Number(data.weekly_matches);
    user.weeklyPoints = Number(data.weekly_points);
    user.weeklyKills = Number(data.weekly_kills);
    user.saveDate = new Date(data.save_date);
    user.nowDate = new Date(data.date_now);
    user.foodConsumed = Number(data.food_consumed);
    user.playersConsumed = Number(data.players_consumed);
    user.virusesConsumed = Number(data.viruses_consumed);
    user.mothercellsConsumed = Number(data.mothercells_consumed);
    user.splitsCount = Number(data.splits_count);
    user.deathsCount = Number(data.death_count);
    user.totalAliveTime = Number(data.total_time_alive);
    user.level = Number(data.level);
    user.memberType = Number(data.member_type);
    return user;
  }
}
