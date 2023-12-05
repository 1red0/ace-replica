export const LoadingSpinner: React.FC = () => {
    return (
      <div className="flex items-center justify-center">
        Loading the news... &nbsp;
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  };