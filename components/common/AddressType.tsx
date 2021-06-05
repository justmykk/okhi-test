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
    return (
        <div className="px-4 py-2 border-2 rounded border-medium-grey mr-2 text-sm text-dark-grey">
            {value}
        </div>
    );
};
