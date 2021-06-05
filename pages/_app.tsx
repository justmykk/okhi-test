import { AppProps } from "next/app";
import { GlobalContext } from "../context/global-context";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import { FormType, PageType } from "../types";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [currentPage, setCurrentPage] = useState<PageType>("landing");

    const [form, setForm] = useState<FormType>({
        streetName: "",
        photo: "",
        addressType: undefined,
        password: "",
        building: "",
        phone: "",
    });

    return (
        <GlobalContext.Provider
            value={{ form, currentPage, setCurrentPage, setForm }}
        >
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
};

export default MyApp;
