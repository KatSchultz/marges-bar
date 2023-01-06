import axios from "axios";
import { config } from "../config";

export function fetchMap() {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initMap`
    )
    .then((response) => response);
}
