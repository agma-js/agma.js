import axios from 'axios';

import { MassRecord } from '../entities/MassRecord';

/**
 * Get all mass records ever or from specific server
 * @param serverId The server id
 */
export const getMassRecords = async (serverId?: number): Promise<MassRecord[]> => {
  const { data } = await axios.get('https://agma.io/php_hscores_file.php', { params: { type: 1, page: serverId } });
  if (!Array.isArray(data)) throw TypeError('The server response is not an array');
  return data.map(MassRecord.fromData);
};
