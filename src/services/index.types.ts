export type TMessage = {
  meta: {
    message: string;
  };
  data: string;
};
export interface SR<T> {
  data: T[];
}
export interface SRO<T> {
  data: T;
}
export type TGetParamItem = {
  id: number;
  name: string;
};
export type TGetParamsChange = {
  count?: number;
  page?: number;
};
export type TRoleItemTypes = 'admin' | 'parent' | 'student' | 'teacher';
