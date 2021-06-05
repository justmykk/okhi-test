import { MapPhoto } from "./MapPhoto";
import { AppButton } from "./AppButton";

interface Props {
    title: string;
}

export const FormLayout: React.FC<Props> = (props) => {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <p className="text-center m-5 text-pry-color">{props.title}</p>

                <MapPhoto />

                {props.children}
            </div>

            <AppButton label="Next" disabled />
        </>
    );
};
