import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getServers } from '../getServers';
import { Server } from '../../entities/Server';

const mock = new MockAdapter(axios);

const idealResponse = [
  { serverId: '40', serverName: 'Infection EU (Beta)', serverLocation: '0', active: '1' },
  { serverId: '41', serverName: 'Infection NA (Beta)', serverLocation: '1', active: '1' },
  { serverId: '22', serverName: 'Battle Royale AS', serverLocation: '2', active: '1' },
];
const objectResponse = { foo: 'bar' };
const stringResponse = 'baz';

it('works in regular case', async () => {
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 3 } }).reply(200, idealResponse);
  const idealResult = idealResponse.map(Server.fromData);
  await expect(getServers()).resolves.toEqual(idealResult);
  await expect(getServers('eu')).resolves.toEqual(idealResult.filter((server) => server.location === 'eu'));
});

it('throws a error in case of a invalid region given', async () => {
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 3 } }).reply(200, idealResponse);
  await expect(getServers('ao' as 'as')).rejects.toThrow('The given location does not exist');
  await expect(getServers(({ foo: 'bar' } as unknown) as 'as')).rejects.toThrow('The given location does not exist');
});

it('throws a error in case of a broken server response', async () => {
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 3 } }).reply(200, objectResponse);
  await expect(getServers()).rejects.toThrow('The server response is not an array');
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 3 } }).reply(200, stringResponse);
  await expect(getServers()).rejects.toThrow('The server response is not an array');
});
