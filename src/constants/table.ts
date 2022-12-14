export type TableColumnsInterface = {
  id: string;
  label: string;
  minWidth?: number;
  //   todo
  align?: any;
  //   todo
  // eslint-disable-next-line @typescript-eslint/ban-types
  format?: Function;
};

export type TableRowInterface = {
  name: string;
  phone_number: string;
  requestStatus: string;
  //   todo
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: Function;
  //   todo
  code?: any;
  //   todo
  _id?: any;
};
