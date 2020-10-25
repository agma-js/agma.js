/**
 * Mass record object from API response
 */
export type MassRecordData = {
  username: string;
  memberType: string;
  moderatorType: string;
  dntn: string;
  date: string;
  score: string;
  serverName: string;
};

/**
 * Check if Agma.IO API response valid
 * @param data Server object from API response
 */
// eslint-disable-next-line
export const isMassRecordData = (data: any): data is MassRecordData =>
  'username' in data &&
  'memberType' in data &&
  'moderatorType' in data &&
  'dntn' in data &&
  'date' in data &&
  'score' in data &&
  'serverName' in data;

export class MassRecord {
  username = '';
  memberType = 0;
  moderatorType = 0;
  donatorType = 0;
  date = new Date();
  score = 0;
  serverName = '';
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown): MassRecord {
    if (!isMassRecordData(data)) throw new TypeError('The given data is not assignable to type MassRecordData');
    const massRecord = new MassRecord();
    massRecord.username = data.username;
    massRecord.memberType = Number(data.memberType);
    massRecord.moderatorType = Number(data.moderatorType);
    massRecord.donatorType = Number(data.dntn);
    massRecord.date = new Date(data.date);
    massRecord.score = Number(data.score);
    massRecord.serverName = data.serverName;
    return massRecord;
  }
}
