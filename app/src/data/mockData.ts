export const pickupSuggestions = [
  { id: "1", name: "Home - Koramangala 5th Block", address: "80 Feet Road, Koramangala, Bangalore" },
  { id: "2", name: "MG Road Metro Station", address: "MG Road, Bangalore 560001" },
  { id: "3", name: "Indiranagar 100ft Road", address: "100 Feet Road, Indiranagar, Bangalore" },
  { id: "4", name: "Whitefield IT Park", address: "ITPL Main Road, Whitefield, Bangalore" },
  { id: "5", name: "HSR Layout Sector 2", address: "27th Main Road, HSR Layout, Bangalore" },
  { id: "6", name: "Electronic City Phase 1", address: "Hosur Road, Electronic City, Bangalore" },
];

export const dropSuggestions = [
  { id: "1", name: "Bangalore Airport (KIA)", address: "Kempegowda International Airport, Devanahalli" },
  { id: "2", name: "Majestic Bus Stand", address: "Kempegowda Bus Station, Bangalore 560009" },
  { id: "3", name: "Bangalore City Railway Station", address: "Gubbi Thotadappa Road, Bangalore" },
  { id: "4", name: "UB City Mall", address: "24, Vittal Mallya Road, Bangalore" },
  { id: "5", name: "Lalbagh Botanical Garden", address: "Mavalli, Bangalore 560004" },
  { id: "6", name: "Cubbon Park", address: "Kasturba Road, Bangalore 560001" },
];

export interface RideOption {
  id: string;
  type: string;
  icon: string;
  maxSeats: number;
  eta: string;
  price: number;
  description: string;
}

export const rideOptions: RideOption[] = [
  { id: "bike", type: "Bike", icon: "🏍️", maxSeats: 1, eta: "3 min", price: 49, description: "Affordable, quick rides" },
  { id: "mini", type: "Mini", icon: "🚗", maxSeats: 4, eta: "5 min", price: 149, description: "Compact & comfortable" },
  { id: "sedan", type: "Sedan", icon: "🚘", maxSeats: 4, eta: "7 min", price: 249, description: "Spacious & premium" },
  { id: "suv", type: "SUV", icon: "🚙", maxSeats: 6, eta: "10 min", price: 399, description: "Extra space for groups" },
];

export const driverNames = [
  "Rajesh K.",
  "Mohammed S.",
  "Priya M.",
  "Amit T.",
  "Suresh R.",
];
