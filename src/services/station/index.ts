const getAllStations = async () => {
  const url = `${process.env.API_URL}/stations`;
  const res = await fetch(url);
  return await res.json();
};

const getStationInfo = async (station: string) => {
  const url = `${process.env.API_URL}/stations/${station}/info`;
  const res = await fetch(url);
  return await res.json();
};

const getStationArrivals = async (station: string) => {
  const url = `${process.env.API_URL}/stations/${station}/arrivals`;
  const res = await fetch(url);
  return await res.json();
};

const StationService = {
  getAllStations,
  getStationInfo,
  getStationArrivals,
};

export default StationService;