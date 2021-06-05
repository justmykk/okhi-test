import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export const Landing = () => {
    const store = useContext(GlobalContext);

    const onSubmit = () => {
        store.setCurrentPage("address");
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log(position);
        //     },
        //     (err) => console.log(err),
        //     {enableHighAccuracy: true}
        // );
    };

    return (
        <>
            <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-lg text-center">
                    Michael Olawale's OkHi Engineering Assignment for Frontend
                    Role
                </p>
            </div>

            <div className="flex flex-1 flex-col">
                <button
                    onClick={onSubmit}
                    className="justify-start w-1/2 mx-auto py-3 border-2 rounded-lg border-dark-grey"
                >
                    Start
                </button>
            </div>
        </>
    );
};
