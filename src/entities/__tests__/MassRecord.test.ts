import { MassRecord } from '../MassRecord';

const idealMassRecordData = {
  username: 'Sora',
  nickname: null,
  memberType: '2',
  moderatorType: '2',
  dntn: 3,
  score: '20322',
  date: '2020-08-26',
  serverName: 'Infection NA (Beta)',
};
const incompleteMassRecordData = {
  username: 'Sora',
  nickname: null,
  memberType: '2',
  moderatorType: '2',
  dntn: 3,
  score: '20322',
};

it('works in case of a good mass record data', () => {
  expect(MassRecord.fromData(idealMassRecordData)).toMatchObject({
    username: 'Sora',
    memberType: 2,
    moderatorType: 2,
    donatorType: 3,
    score: 20322,
    date: new Date('2020-08-26'),
    serverName: 'Infection NA (Beta)',
  });
});

it('throws a error in case of an incomplete mass record data', () => {
  expect(() => MassRecord.fromData(incompleteMassRecordData)).toThrow(
    'The given data is not assignable to type MassRecord',
  );
});
