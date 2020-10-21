import axios from 'axios';

import type { Location } from '../entities/Server';
import { Server, locations } from '../entities/Server';

/**
 * Get all available servers or all available server with specified location
 * @param location The server location
 */
export const getServers = async (location?: Location): Promise<Server[]> => {
  if (location && locations.indexOf(location) === -1) throw new TypeError('The given location does not exist');
  const { data } = await axios.get('https://agma.io/php_hscores_file.php', { params: { type: 3 } });
  if (!Array.isArray(data)) throw TypeError('The server response is not an array');
  const result: Server[] = data.map(Server.fromData);
  return !location ? result : result.filter((server) => server.location === location);
};
