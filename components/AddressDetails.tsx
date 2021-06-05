import { AppInput } from "./common/AppInput";
import { AddressType } from "./common/AddressType";
import { FormLayout } from "./common/FormLayout";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/global-context";

export const AddressDetails = () => {
    const store = useContext(GlobalContext);
    const [validFields, setValidFields] = useState(false);

    useEffect(() => {
        const { photo, building, addressType, streetName } = store.form;

        if (photo && building && addressType && streetName) {
            setValidFields(true);
        }
    }, [store.form]);

    const onNext = () => store.setCurrentPage("phone");

    return (
        <FormLayout
            onSubmitForm={onNext}
            disableButton={!validFields}
            title="Add address details"
        >
            <AppInput
                value={store.form.building}
                onChange={(building) =>
                    store.setForm({ ...store.form, building })
                }
                label="Building name or number"
            />

            <AppInput
                value={store.form.streetName}
                onChange={(streetName) =>
                    store.setForm({ ...store.form, streetName })
                }
                label="Street name"
            />

            <div>
                <p className="mb-1 text-dark-grey text-sm">Address type</p>
                <AddressType />
            </div>
        </FormLayout>
    );
};
