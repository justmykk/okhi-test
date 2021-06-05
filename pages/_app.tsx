import { AppProps } from "next/app";
import { defaultValue, GlobalContext } from "../context/global-context";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import { FormType, LocationType, PageType } from "../types";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [currentPage, setCurrentPage] = useState<PageType>(
        defaultValue.currentPage
    );

    const [location, setLocation] = useState<LocationType>(
        defaultValue.location
    );

    const [accuracy, setAccuracy] = useState(defaultValue.accuracy);

    const [form, setForm] = useState<FormType>(defaultValue.form);

    return (
        <>
            <Head>
                <script
                    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`}
                ></script>
            </Head>
            <GlobalContext.Provider
                value={{
                    form,
                    currentPage,
                    setCurrentPage,
                    setForm,
                    location,
                    setLocation,
                    accuracy,
                    setAccuracy,
                }}
            >
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    );
};

export default MyApp;
