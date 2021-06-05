import { createContext } from "react";
import { FormType, LocationType, PageType } from "../types";

interface ContextInterface {
    currentPage: PageType;
    form: FormType;
    setCurrentPage: (arg: PageType) => void;
    setForm: (arg: FormType) => void;
    location: LocationType;
    setLocation: (arg: LocationType) => void;
    accuracy: number;
    setAccuracy: (arg: number) => void;
}

export const defaultValue: ContextInterface = {
    form: {
        addressType: undefined,
        building: "",
        password: "",
        phone: "",
        photo: "",
        streetName: "",
    },
    currentPage: "landing",
    location: { lat: 6.465422, lng: 3.406448 },
    accuracy: 200,
    setForm: () => {},
    setCurrentPage: () => {},
    setLocation: () => {},
    setAccuracy: () => {},
};

export const GlobalContext = createContext(defaultValue);
