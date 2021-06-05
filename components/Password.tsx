import { FormLayout } from "./common/FormLayout";
import { AppInput } from "./common/AppInput";
import { useContext } from "react";
import { defaultValue, GlobalContext } from "../context/global-context";
import Swal from "sweetalert2";

export const Password = () => {
    const store = useContext(GlobalContext);

    const onSubmit = () => {
        localStorage.setItem("form", JSON.stringify(store.form));
        Swal.fire({
            icon: "success",
            text: "OkHi address saved",
        }).then(() => {
            store.setForm(defaultValue.form);
            store.setLocation(defaultValue.location);
            store.setAccuracy(200);
            store.setCurrentPage("landing");
        });
    };

    return (
        <FormLayout
            disableButton={!store.form.password}
            onSubmitForm={onSubmit}
            title="Save my address"
        >
            <AppInput
                value={store.form.password}
                onChange={(password) =>
                    store.setForm({ ...store.form, password })
                }
                label="Password"
                type="password"
            />
        </FormLayout>
    );
};
