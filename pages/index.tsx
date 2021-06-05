import { Landing } from "../components/Landing";
import { NavBar } from "../components/common/NavBar";
import { AddressDetails } from "../components/AddressDetails";
import { PhoneNumber } from "../components/PhoneNumber";
import { Password } from "../components/Password";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";
import { Map } from "../components/Map";

const Index = () => {
    const store = useContext(GlobalContext);

    return (
        <div className="flex flex-col h-screen">
            <NavBar />

            <div className="flex px-5 flex-1 flex-col">
                {store.currentPage === "landing" && <Landing />}
                {store.currentPage === "map" && <Map />}
                {store.currentPage === "address" && <AddressDetails />}
                {store.currentPage === "phone" && <PhoneNumber />}
                {store.currentPage === "password" && <Password />}
            </div>
        </div>
    );
};

export default Index;
