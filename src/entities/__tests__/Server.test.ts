import { Server } from '../Server';

const idealServerData = { serverId: '40', serverName: 'Infection EU (Beta)', serverLocation: '0', active: '1' };
const incompleteServerData = { serverId: '40', serverName: 'Infection EU (Beta)' };

it('works in case of a good server data', () => {
  expect(Server.fromData(idealServerData)).toMatchObject({
    id: 40,
    location: 0,
    name: 'Infection EU (Beta)',
    online: true,
  });
});

it('throws a error in case of incomplete server data', () => {
  expect(() => Server.fromData(incompleteServerData)).toThrow('The given data is not assignable to type ServerData');
});
