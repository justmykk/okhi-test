import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/global-context";
import { AppButton } from "./common/AppButton";

declare var google;

export const Map = () => {
    const store = useContext(GlobalContext);

    useEffect(() => {
        setMap();
    }, []);

    const setMap = () => {
        const location = { lat: store.location.lat, lng: store.location.lng };

        const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
                zoom: 18,
                center: new google.maps.LatLng(location.lat, location.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            }
        );

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            // icon: "/Location.svg",
        });

        map.addListener("center_changed", () => {
            marker.setPosition(map.getCenter());
            store.setLocation({
                lat: map.getCenter().lat(),
                lng: map.getCenter().lng(),
            });
            store.setAccuracy(0);
        });
    };

    const onSubmit = () => {
        store.setCurrentPage("address");
    };

    return (
        <div className="flex flex-1 flex-col relative">
            <div id="map" className="h-full" />

            <div className="absolute bottom-0 left-0 right-0 h-20 px-4 flex items-center justify-center">
                <AppButton
                    disabled={store.accuracy > 150}
                    label="Save location"
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};
