import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getMassRecords } from '../getMassRecords';
import { MassRecord } from '../../entities/MassRecord';

const mock = new MockAdapter(axios);

const idealResponse = [
  {
    username: 'KiiZaru',
    nickname: null,
    memberType: '2',
    moderatorType: '0',
    dntn: 3,
    score: '21031609',
    date: '2020-02-22',
    serverName: 'Selffeed EU ON REDBULL',
  },
  {
    username: 'KiiZaru',
    nickname: null,
    memberType: '2',
    moderatorType: '0',
    dntn: 3,
    score: '5788752',
    date: '2020-02-12',
    serverName: 'Giant',
  },
  {
    username: 'firebonee',
    nickname: null,
    memberType: '2',
    moderatorType: '0',
    dntn: 1,
    score: '5721959',
    date: '2019-06-23',
    serverName: 'Gigantic',
  },
];
const idealGiganticResponse = idealResponse.filter((server) => server.serverName === 'Gigantic');
const objectResponse = { foo: 'bar' };
const stringResponse = 'baz';

it('works in regular case without server id passed', async () => {
  mock
    .onGet('https://agma.io/php_hscores_file.php', { params: { type: 1, page: undefined } })
    .reply(200, idealResponse);
  const idealResult = idealResponse.map(MassRecord.fromData);
  await expect(getMassRecords()).resolves.toEqual(idealResult);
});

it('works in regular case with server id passed', async () => {
  mock
    .onGet('https://agma.io/php_hscores_file.php', { params: { type: 1, page: 14 } })
    .reply(200, idealGiganticResponse);
  const idealResult = idealGiganticResponse.map(MassRecord.fromData);
  await expect(getMassRecords(14)).resolves.toEqual(idealResult);
});

it('throws a error in case of a broken server response', async () => {
  mock
    .onGet('https://agma.io/php_hscores_file.php', { params: { type: 1, page: undefined } })
    .reply(200, objectResponse);
  await expect(getMassRecords()).rejects.toThrow('The server response is not an array');
  mock
    .onGet('https://agma.io/php_hscores_file.php', { params: { type: 1, page: undefined } })
    .reply(200, stringResponse);
  await expect(getMassRecords()).rejects.toThrow('The server response is not an array');
});
