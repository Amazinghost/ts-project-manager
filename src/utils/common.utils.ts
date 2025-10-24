import _ from "lodash";

export const isNilOrEmpty = (val: unknown): boolean => {
  return _.isEmpty(val) || _.isNil(val);
};
