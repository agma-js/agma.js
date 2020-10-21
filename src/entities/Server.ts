/**
 * Agma.IO available locations
 */
export type Location = 'eu' | 'na' | 'as';

/**
 * Server object from API response
 */
export type ServerData = {
  serverId: string;
  serverName: string;
  serverLocation: '0' | '1' | '2';
  active: '0' | '1';
};

/**
 * Agma.IO locations list
 */
export const locations: Location[] = ['eu', 'na', 'as'];

/**
 * Check if Agma.IO API response valid
 * @param data Server object from API response
 */
// eslint-disable-next-line
export const isServerData = (data: any): data is ServerData =>
  'serverId' in data &&
  !isNaN(data['serverId']) &&
  'serverName' in data &&
  data['serverName'].length > 0 &&
  'serverLocation' in data &&
  ['0', '1', '2'].includes(data['serverLocation']) &&
  'active' in data &&
  ['0', '1'].includes(data['active']);

/**
 * The server entity
 */
export class Server {
  /**
   * The server ID
   */
  id = 0;
  /**
   * The server name
   */
  name = '';
  /**
   * The server location
   */
  location: Location = locations[0];
  /**
   * Is server online?
   */
  online = false;
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown): Server {
    const server = new Server();
    if (!isServerData(data)) throw new TypeError('The given data is not assignable to type ServerData');
    server.id = parseInt(data.serverId);
    server.name = data.serverName;
    server.location = locations[parseInt(data.serverLocation)];
    server.online = Boolean(Number(data.active));
    return server;
  }
}
