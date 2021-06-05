import { useContext } from "react";
import { GlobalContext } from "../context/global-context";
import Swal from "sweetalert2";

export const Landing = () => {
    const store = useContext(GlobalContext);

    const onSubmit = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setTimeout(() => {
                    store.setCurrentPage("map");
                }, 3000);

                const coords = position.coords;
                store.setLocation({
                    lat: coords.latitude,
                    lng: coords.longitude,
                });
                store.setAccuracy(coords.accuracy);
                store.setCurrentPage("map");
            },
            (err) => {
                Swal.fire({
                    text: "Please ensure location permissions are on",
                    icon: "info",
                    customClass: {
                        closeButton: "bg-pry-color",
                    },
                });
            },
            { enableHighAccuracy: true }
        );
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
