import { Server } from '../Server';

const idealServerData = { serverId: '40', serverName: 'Infection EU (Beta)', serverLocation: '0', active: '1' };
const incompleteServerData = { serverId: '40', serverName: 'Infection EU (Beta)' };
const invalidServerId = { serverId: 'foo', serverName: 'Infection EU (Beta)', serverLocation: '0', active: '1' };
const invalidServerName = { serverId: '40', serverName: '', serverLocation: '0', active: '1' };
const invalidServerLocation = { serverId: '40', serverName: 'Infection EU (Beta)', serverLocation: '3', active: '1' };
const invalidServerActive = { serverId: '40', serverName: 'Infection EU (Beta)', serverLocation: '0', active: '2' };

it('works in case of a good server data', () => {
  expect(Server.fromData(idealServerData)).toMatchObject({
    id: 40,
    location: 'eu',
    name: 'Infection EU (Beta)',
    online: true,
  });
});

it('throws a error in case of an invalid server data', () => {
  expect(() => Server.fromData(invalidServerId)).toThrow('The given data is not assignable to type ServerData');
  expect(() => Server.fromData(invalidServerName)).toThrow('The given data is not assignable to type ServerData');
  expect(() => Server.fromData(invalidServerLocation)).toThrow('The given data is not assignable to type ServerData');
  expect(() => Server.fromData(invalidServerActive)).toThrow('The given data is not assignable to type ServerData');
  expect(() => Server.fromData(incompleteServerData)).toThrow('The given data is not assignable to type ServerData');
});
