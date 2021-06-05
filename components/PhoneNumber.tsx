import { FormLayout } from "./common/FormLayout";
import { AppInput } from "./common/AppInput";

export const PhoneNumber = () => {
    return (
        <FormLayout title="Save my address">
            <AppInput label="Phone number" type="tel" />
        </FormLayout>
    );
};
