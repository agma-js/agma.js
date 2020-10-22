/**
 * Server object from API response
 */
export type ServerData = {
  serverId: string;
  serverName: string;
  serverLocation: string;
  active: string;
};

/**
 * Check if Agma.IO API response valid
 * @param data Server object from API response
 */
// eslint-disable-next-line
export const isServerData = (data: any): data is ServerData =>
  'serverId' in data && 'serverName' in data && 'serverLocation' in data && 'active' in data;

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
  location = 0;
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
    server.id = Number(data.serverId);
    server.name = data.serverName;
    server.location = Number(data.serverLocation);
    server.online = Boolean(Number(data.active));
    return server;
  }
}
