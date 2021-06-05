import { FormLayout } from "./common/FormLayout";
import { AppInput } from "./common/AppInput";
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export const PhoneNumber = () => {
    const store = useContext(GlobalContext);

    return (
        <FormLayout
            onSubmitForm={() => store.setCurrentPage("password")}
            disableButton={!store.form.phone}
            title="Save my address"
        >
            <AppInput
                value={store.form.phone}
                onChange={(phone) => store.setForm({ ...store.form, phone })}
                label="Phone number"
                type="tel"
            />
        </FormLayout>
    );
};
