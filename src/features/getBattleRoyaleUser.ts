import axios from 'axios';

import { BattleRoyaleUser } from '../entities/BattleRoyaleUser';

/**
 * Get all available servers
 */
export const getBattleRoyaleUser = async (username: string): Promise<BattleRoyaleUser> => {
  const { data } = await axios.get('https://agma.io/royale_stats.php', { params: { user: username } });
  if (data === 'noUser') throw new Error('The user does not exist or have not played Battle Royale yet');
  return BattleRoyaleUser.fromData(data, username);
};
