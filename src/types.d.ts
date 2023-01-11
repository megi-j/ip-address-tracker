export type resultType = {
  ip: string;
  isp: string;
  location: {
    lat: number;
    lng: number;
    timezone: string;
    region: string;
  };
};
