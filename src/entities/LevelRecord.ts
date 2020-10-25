/**
 * Mass record object from API response
 */
export type LevelRecordData = {
  username: string;
  level: string;
  memberType: string;
  moderatorType: string;
  dntn: string;
};

/**
 * Check if Agma.IO API response valid
 * @param data Server object from API response
 */
// eslint-disable-next-line
export const isLevelRecordData = (data: any): data is LevelRecordData =>
  'username' in data && 'level' in data && 'memberType' in data && 'moderatorType' in data && 'dntn' in data;

/**
 * The server entity
 */
export class LevelRecord {
  /**
   * The username of person
   */
  username = '';
  /**
   * The type of member
   */
  memberType = 0;
  /**
   * The type of moderator
   */
  moderatorType = 0;
  /**
   * The type of donator
   */
  donatorType = 0;
  /**
   * The level of player
   */
  level = 0;
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown): LevelRecord {
    const massRecord = new LevelRecord();
    if (!isLevelRecordData(data)) throw new TypeError('The given data is not assignable to type LevelRecordData');
    massRecord.username = data.username.trim();
    massRecord.memberType = Number(data.memberType.trim());
    massRecord.moderatorType = Number(data.moderatorType.trim());
    massRecord.donatorType = Number(data.dntn.trim());
    massRecord.level = Number(data.level.trim());
    return massRecord;
  }
}
