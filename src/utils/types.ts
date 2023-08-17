type Activity = {
  title: string;
  name: string;
  first_name: string;
  last_name: string;
  activity?: string;
  bonus?: string;
  amount?: string;
  employee?: number | string; // Depending on your use case, it could be either a number or a string
  time?: string; // Optional property
};

export type Act = {
  date: string;
  activity: Activity[];
};
