export const MapPhoto = () => {
    return (
        <div className="mb-5">
            <div className="flex-1 flex flex-row">
                <Container bgColor="bg-grey-green">
                    <img src="/Location.svg" alt="pin" />
                </Container>

                <Container bgColor="bg-light-grey">
                    <button className="border rounded border-pry-color text-pry-color px-2 py-1 text-sm">
                        Add Photo
                    </button>
                </Container>
            </div>

            <div className="flex-1 flex flex-row bg-light-grey px-3 py-5">
                <div className="border rounded border-dark-grey text-dark-grey text-sm py-1 px-3">
                    Home
                </div>

                <div className="flex-1 flex items-center justify-start ml-3 text-dark-grey">
                    [Building name, Street name]
                </div>
            </div>
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
