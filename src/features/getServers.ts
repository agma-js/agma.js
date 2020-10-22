import axios from 'axios';

import { Server } from '../entities/Server';

/**
 * Get all available servers or all available server with specified location
 * @param location The server location
 */
export const getServers = async (): Promise<Server[]> => {
  const { data } = await axios.get('https://agma.io/php_hscores_file.php', { params: { type: 3 } });
  if (!Array.isArray(data)) throw TypeError('The server response is not an array');
  return data.map(Server.fromData);
};
