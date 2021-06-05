export type AddressValueType = "Home" | "Work" | "Other";

export type PageType = "landing" | "map" | "address" | "phone" | "password";

export type FormType = {
    photo: string;
    building: string;
    phone: string;
    password: string;
    streetName: string;
    addressType: AddressValueType;
};

export type LocationType = {
    lat: number;
    lng: number;
};
