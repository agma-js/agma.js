import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getLevelRecords } from '../getLevelRecords';
import { LevelRecord } from '../../entities/LevelRecord';

const mock = new MockAdapter(axios);

const idealResponse = [
  { username: 'KiiZaru \n', level: ' 544 \n', memberType: ' 2 \n', moderatorType: ' 0 \n', dntn: ' 3 \n' },
  { username: 'MasterXM \n', level: ' 469 \n', memberType: ' 2 \n', moderatorType: ' 0 \n', dntn: ' 3 \n' },
  { username: 'undofelicio \n', level: ' 451 \n', memberType: ' 0 \n', moderatorType: ' 0 \n', dntn: ' 0 \n' },
];
const objectResponse = { foo: 'bar' };
const stringResponse = 'baz';

it('works in regular case without server id passed', async () => {
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 2 } }).reply(200, idealResponse);
  const idealResult = idealResponse.map(LevelRecord.fromData);
  await expect(getLevelRecords()).resolves.toEqual(idealResult);
});

it('throws a error in case of a broken server response', async () => {
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 2 } }).reply(200, objectResponse);
  await expect(getLevelRecords()).rejects.toThrow('The server response is not an array');
  mock.onGet('https://agma.io/php_hscores_file.php', { params: { type: 2 } }).reply(200, stringResponse);
  await expect(getLevelRecords()).rejects.toThrow('The server response is not an array');
});
