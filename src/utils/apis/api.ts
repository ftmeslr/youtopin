import { Api, createAxiosInstance } from "./services/services";

const BASE_URL = process.env.REACT_APP_YOUTOPIN_BASE_URL as string;

export const youtopinApi = new Api(createAxiosInstance(BASE_URL));
