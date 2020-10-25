/**
 * Level record object from API response
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

export class LevelRecord {
  username = '';
  memberType = 0;
  moderatorType = 0;
  donatorType = 0;
  level = 0;
  /**
   * Convert Agma.IO API response data to the Server entity
   * @param data Server object from API response
   */
  static fromData(data: unknown): LevelRecord {
    if (!isLevelRecordData(data)) throw new TypeError('The given data is not assignable to type LevelRecordData');
    const levelRecord = new LevelRecord();
    levelRecord.username = data.username.trim();
    levelRecord.memberType = Number(data.memberType.trim());
    levelRecord.moderatorType = Number(data.moderatorType.trim());
    levelRecord.donatorType = Number(data.dntn.trim());
    levelRecord.level = Number(data.level.trim());
    return levelRecord;
  }
}
