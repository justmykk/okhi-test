interface Props {
    label: string;
    type?: "email" | "password" | "text" | "tel";
}

export const AppInput: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-dark-grey text-sm">{props.label}</label>

            <input
                className="rounded border-2 border-medium-grey py-2 px-3 outline-none focus:border-pry-color"
                type={props.type || "text"}
            />
        </div>
    );
};
