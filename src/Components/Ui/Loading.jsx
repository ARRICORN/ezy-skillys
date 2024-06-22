

const Loading = () => {
    return (
        <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
            <div className="flex items-center">
                <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
        </div>
    );
};

export default Loading;