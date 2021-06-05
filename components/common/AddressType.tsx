import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import { AddressValueType } from "../../types";

export const AddressType = () => {
    return (
        <div className="flex flex-row">
            <AddressPills value="Home" />
            <AddressPills value="Work" />
            <AddressPills value="Other" />
        </div>
    );
};

const AddressPills: React.FC<{ value: AddressValueType }> = ({ value }) => {
    const store = useContext(GlobalContext);

    return (
        <div
            className={`px-4 py-2 border-2 rounded ${
                value === store.form.addressType
                    ? "border-pry-color"
                    : "border-medium-grey"
            } mr-2 text-sm text-dark-grey cursor-pointer`}
            onClick={() => store.setForm({ ...store.form, addressType: value })}
        >
            {value}
        </div>
    );
};
