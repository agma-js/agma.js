import axios from 'axios';

import { LevelRecord } from '../entities/LevelRecord';

/**
 * Get all level records ever
 */
export const getLevelRecords = async (): Promise<LevelRecord[]> => {
  const { data } = await axios.get('https://agma.io/php_hscores_file.php', { params: { type: 2 } });
  if (!Array.isArray(data)) throw TypeError('The server response is not an array');
  return data.map(LevelRecord.fromData);
};
