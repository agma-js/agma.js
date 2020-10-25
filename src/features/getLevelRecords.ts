import axios from 'axios';

import { LevelRecord } from '../entities/LevelRecord';

/**
 * Get all level records ever
 */
export const getLevelRecords = async (): Promise<LevelRecord[]> => {
  const pages = await Promise.all([
    axios.get('https://agma.io/php_hscores_file.php', { params: { type: 2, page: 1 } }),
    axios.get('https://agma.io/php_hscores_file.php', { params: { type: 2, page: 6 } }),
    axios.get('https://agma.io/php_hscores_file.php', { params: { type: 2, page: 21 } }),
  ]);
  pages.forEach(({ data }) => {
    if (!Array.isArray(data)) throw TypeError('The server response is not an array');
  });
  const data = pages.reduce((acc, { data }) => acc.concat(data), []);
  return data.map(LevelRecord.fromData);
};
