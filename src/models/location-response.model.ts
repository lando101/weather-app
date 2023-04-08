export interface GeoapifyResponse {
    type?: string;
    features?: Feature[];
  }
  
  export interface Feature {
    geometry?: Geometry;
    type?: string;
    properties?: Properties;
    bbox?: number[];
  }
  
  export interface Geometry {
    coordinates?: number[];
    type?: string;
  }
  
  export interface Properties {
    country?: string;
    state?: string;
    datasource?: Datasource;
    country_code?: string;
    city?: string;
    county?: string;
    suburb?: string;
    lon?: number;
    lat?: number;
    state_code?: string;
    formatted?: string;
    address_line1?: string;
    address_line2?: string;
    category?: string;
    timezone?: Timezone;
    result_type?: string;
    rank?: Rank;
    postcode?: string;
    place_id?: string;
    name?: string;
    district?: string;
  }
  
  export interface Datasource {
    sourcename?: string;
    attribution?: string;
    license?: string;
    url?: string;
  }
  
  export interface Timezone {
    name?: string;
    offset_STD?: string;
    offset_STD_seconds?: number;
    offset_DST?: string;
    offset_DST_seconds?: number;
    abbreviation_STD?: string;
    abbreviation_DST?: string;
  }
  
  export interface Rank {
    importance?: number;
    confidence?: number;
    confidence_city_level?: number;
    match_type?: string;
  }

  export interface LocationResult {
    country_code?: string;
    housenumber?: string;
    street?: string;
    country?: string;
    county?: string;
    datasource?: {
      sourcename?: string;
      attribution?: string;
      license?: string;
    };
    postcode?: string;
    state?: string;
    city?: string;
    lon?: number;
    lat?: number;
    state_code?: string;
    distance?: number;
    result_type?: string;
    formatted?: string;
    address_line1?: string;
    address_line2?: string;
    timezone?: {
      name?: string;
      offset_STD?: string;
      offset_STD_seconds?: number;
      offset_DST?: string;
      offset_DST_seconds?: number;
      abbreviation_STD?: string;
      abbreviation_DST?: string;
    };
    rank?: {
      popularity?: number;
      place_id?: string;
    };
  }