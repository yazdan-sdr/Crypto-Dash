const SkeletonLoading = () => {
    return (
        <div className="m-4 flex flex-col border-2 border-text-primary/50 bg-white/6 rounded-2xl w-auto p-4 h-auto">
            <div className="flex gap-2 mb-2 pb-2 max-w-sm items-center">
                <div>
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                </div>
                <div className="space-y-2 w-full ml-2">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
                    <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
                </div>
            </div>
            <div className="border-b-2 border-text-primary/50"></div>
            <div className="flex justify-between items-center mt-4 w-full">
                <div className="h-6 rounded bg-gray-200 dark:bg-gray-700 w-full animate-pulse" />
            </div>
        </div>
    );
};

export default SkeletonLoading;
