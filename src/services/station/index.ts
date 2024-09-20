import { ApiResponseData } from "@/types/api";
import { StationArrival, StationData, StationInfo } from "@/types/station";

const API_URL = import.meta.env.VITE_API_URL;

const getAllStations = async (): Promise<ApiResponseData<StationData[]>> => {
  const url = `${API_URL}/stations`;
  const res = await fetch(url);
  return await res.json();
};

const getStationInfo = async (station: string): Promise<ApiResponseData<StationInfo[]>> => {
  const url = `${API_URL}/stations/${station}/info`;
  const res = await fetch(url);
  return await res.json();
};

const getStationArrivals = async (station: string): Promise<ApiResponseData<StationArrival[]>> => {
  const url = `${API_URL}/stations/${station}/arrivals`;
  const res = await fetch(url);
  return await res.json();
};

const StationService = {
  getAllStations,
  getStationInfo,
  getStationArrivals,
};

export default StationService;