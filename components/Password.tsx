import { FormLayout } from "./common/FormLayout";
import { AppInput } from "./common/AppInput";

export const Password = () => {
    return (
        <FormLayout title="Save my address">
            <AppInput label="Password" type="password" />
        </FormLayout>
    );
};
