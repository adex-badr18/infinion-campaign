const Spinner = () => {
    return (
        <div className="flex">
            <div className="relative">
                <div className="w-16 h-16 rounded-full absolute border-[6px] border-solid border-gray-200"></div>

                <div className="w-16 h-16 rounded-full animate-spin absolute border-[6px] border-solid border-primary border-t-transparent shadow-md"></div>
            </div>
        </div>
    );
};

export default Spinner;
