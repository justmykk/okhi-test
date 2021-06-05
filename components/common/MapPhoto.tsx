import { ChangeEvent, useContext } from "react";
import { GlobalContext } from "../../context/global-context";

export const MapPhoto = () => {
    const store = useContext(GlobalContext);

    const takePhoto = () => {
        const file = document.getElementById("file");
        file.click();
    };

    const onFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        reader.readAsDataURL(ev.target.files[0]);

        reader.onload = () => {
            store.setForm({ ...store.form, photo: reader.result as string });
        };
    };

    return (
        <div className="mb-5">
            <div className="flex-1 flex flex-row">
                <Container bgColor="bg-grey-green">
                    <img src="/Location.svg" alt="pin" />
                </Container>

                <Container bgColor="bg-light-grey">
                    {store.form.photo ? (
                        <img src="/icon-photo.svg" alt="pin" />
                    ) : (
                        <button
                            onClick={takePhoto}
                            className="border rounded border-pry-color text-pry-color px-2 py-1 text-sm"
                        >
                            Add Photo
                        </button>
                    )}
                </Container>
            </div>

            {(store.currentPage === "password" ||
                store.currentPage === "phone") && (
                <div className="flex-1 flex flex-row bg-light-grey px-3 py-5">
                    <div className="border rounded border-dark-grey text-dark-grey text-sm py-1 px-3">
                        Home
                    </div>

                    <div className="flex-1 flex items-center justify-start ml-3 text-dark-grey">
                        {store.form.building}, {store.form.streetName}
                    </div>
                </div>
            )}

            <input
                className="hidden"
                type="file"
                accept="image/png, image/jpeg"
                id="file"
                onChange={onFileChange}
            />
        </div>
    );
};

const Container: React.FC<{ bgColor: string }> = (props) => (
    <div
        className={`${props.bgColor} flex-1 flex flex-row justify-center items-center`}
        style={{ height: 120 }}
    >
        {props.children}
    </div>
);
