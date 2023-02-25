type DefaultType = number | string | boolean | object;
type DefaultPayloadType = DefaultType | Array<DefaultType>;

export type ActionType<T> = {
  type: string;
  payload?: T;
};

export const createAction = <T = DefaultPayloadType>(
  type: string,
  payload?: T
): ActionType<T> => ({
  type,
  payload,
});
