import { LevelRecord } from '../LevelRecord';

const idealLevelRecordData = {
  username: 'KiiZaru \n',
  level: ' 544 \n',
  memberType: ' 2 \n',
  moderatorType: ' 0 \n',
  dntn: ' 3 \n',
};
const incompleteLevelRecordData = {
  username: 'KiiZaru \n',
  level: ' 544 \n',
  memberType: ' 2 \n',
};

it('works in case of a good server data', () => {
  expect(LevelRecord.fromData(idealLevelRecordData)).toMatchObject({
    username: 'KiiZaru',
    level: 544,
    memberType: 2,
    moderatorType: 0,
    donatorType: 3,
  });
});

it('throws a error in case of incomplete server data', () => {
  expect(() => LevelRecord.fromData(incompleteLevelRecordData)).toThrow(
    'The given data is not assignable to type LevelRecord',
  );
});
