export type StationData = {
  name: string;
  code: string,
  listing: string,
  display: string,
  enabled: boolean,
  displayed: boolean,
  lat: number,
  lng: number,
  line: string,
  status: number,
  alt_travel: {
    pdf: string,
    img: string[];
  };
};

export type StationInfo = {
  closure: string,
  shop: {
    shop: string;
    unit: string;
  }[];
  direction: {
    to: string,
    platform: string;
  }[];
  code: string,
  name: string,
  alt_travel: {
    pdf: string,
    img: string[];
  };
  exit: {
    description: string,
    station_exit: string;
  }[];
  lat: number,
  lng: number,
  amenities: {
    "Bicycle Racks": string;
    atm: {
      total: string;
      name: string;
    }[],
    bicycle: string,
    "TransitLink Ticket Office: Operating Hours": string;
  },
  train_times: {
    last_trains: string,
    first_trains: {
      sun_public_holiday: string,
      weekday: string,
      sat: string;
    },
    station_line: string,
    description: string;
  }[];
};

export type StationArrival = {
  status: number;
  platform_ID: string;
  code: string;
  subseq_train_destination: string;
  next_train_arr: string;
  mrt: string;
  next_train_destination: string;
  subseq_train_arr: string;
};