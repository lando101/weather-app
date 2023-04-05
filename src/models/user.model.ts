export interface User {
  id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  home_city?: Location;
  previousSearches?: WeatherSearch[];
  favoriteLocations?: Location[];
  alerts?: Alert[];
}

export interface WeatherSearch {
  query: string; // The search query entered by the user, e.g. "New York City"
  timestamp: number; // The Unix timestamp of the search
}

export interface Location {
  name: string; // The name of the location, e.g. "New York City"
  lat?: number; // The latitude of the location
  lon?: number; // The longitude of the location
}

export interface Alert {
  id: number;
  location: Location; // The location associated with the alert
  type: string; // The type of alert, e.g. "Severe Thunderstorm Warning"
  description: string; // A description of the alert
  expires: number; // The Unix timestamp when the alert expires
}