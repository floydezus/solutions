import { SERVER_HOST } from "./constants";

const endpoints = {
  prices: (version: number) => `${SERVER_HOST}/v${version}`,
};

export default endpoints;
