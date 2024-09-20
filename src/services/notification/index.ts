import { ApiResponseData } from "@/types/api";
import { NotificationData } from "@/types/notification";

const API_URL = import.meta.env.VITE_API_URL;

const getNotifications = async (): Promise<ApiResponseData<NotificationData[]>> => {
  const url = `${API_URL}/notification`;
  const res = await fetch(url);
  return await res.json();
};

const NotificationService = {
  getNotifications,
};

export default NotificationService;