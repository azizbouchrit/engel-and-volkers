export interface BaseListing {
  id: number;
  image: string;
  title: string;
  description: string;
  rooms: number;
  bathrooms: number;
  price: number;
  agent: string;
  shop: string;
}

export interface ApartmentListing extends BaseListing {
  type: "apartment";
  floor: number;
  plotSize: null;
}

export interface HouseListing extends BaseListing {
  type: "house";
  plotSize: number;
  floor: null;
}

// used discriminated union
export type Listing = ApartmentListing | HouseListing;

