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

export class Server {
  id = 0;
  name = '';
  location = 0;
  online = false;
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown): Server {
    if (!isServerData(data)) throw new TypeError('The given data is not assignable to type ServerData');
    const server = new Server();
    server.id = Number(data.serverId);
    server.name = data.serverName;
    server.location = Number(data.serverLocation);
    server.online = Boolean(Number(data.active));
    return server;
  }
}
