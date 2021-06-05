import { AppInput } from "./common/AppInput";
import { AddressType } from "./common/AddressType";
import { FormLayout } from "./common/FormLayout";

export const AddressDetails = () => {
    return (
        <FormLayout title="Add address details">
            <AppInput label="Building name or number" />

            <AppInput label="Street name" />

            <div>
                <p className="mb-1 text-dark-grey text-sm">Address type</p>
                <AddressType />
            </div>
        </FormLayout>
    );
};
