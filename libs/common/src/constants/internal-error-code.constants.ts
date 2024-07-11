export const INTERNAL_ERROR_CODE = {
  // Database
  DB_USER_LEVEL_LOCK_NOT_RELEASE: 9998, // db user level lock
  DB_UPDATE_FAILED: 9999, // db 업데이트 실패
};

export type InternalErrorCode =
  (typeof INTERNAL_ERROR_CODE)[keyof typeof INTERNAL_ERROR_CODE];
