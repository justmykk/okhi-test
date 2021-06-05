import { createContext } from "react";
import { FormType, PageType } from "../types";

interface ContextInterface {
    currentPage: PageType;
    form: FormType;
    setCurrentPage: (arg: PageType) => void;
    setForm: (arg: FormType) => void;
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
    setForm: (arg) => {},
    setCurrentPage: (arg) => {},
};

export const GlobalContext = createContext(defaultValue);
