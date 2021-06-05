interface Props {
    label?: string;
    onSubmit?: () => void;
    disabled?: boolean;
}

export const AppButton: React.FC<Props> = (props) => {
    return (
        <button
            className="bg-pry-color w-full mb-5 py-3 rounded-md font-semibold disabled:bg-light-grey text-sec-color disabled:text-medium-grey"
            disabled={props.disabled}
            type="submit"
            onClick={props.onSubmit}
        >
            {props.label || "Button"}
        </button>
    );
};
