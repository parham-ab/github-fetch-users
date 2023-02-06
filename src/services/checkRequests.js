import { http } from "./http";

export const checkRequests = async () => {
  const {
    data: { resources, rate },
  } = await http.get(`/rate_limit`);
  return resources, rate;
};
