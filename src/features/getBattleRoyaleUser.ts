import axios from 'axios';

import { BattleRoyaleUser } from '../entities/BattleRoyaleUser';

/**
 * Get battle royale user
 */
export const getBattleRoyaleUser = async (username: string): Promise<BattleRoyaleUser> => {
  const { data } = await axios.get('https://agma.io/royale_stats.php', { params: { user: username } });
  if (data === 'noUser') throw new TypeError('The user does not exist or have not played Battle Royale yet');
  if (typeof data !== 'object') throw TypeError('The server response is not an array');
  return BattleRoyaleUser.fromData(data, username);
};
