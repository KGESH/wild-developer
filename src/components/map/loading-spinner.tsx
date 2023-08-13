export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full overflow-hidden">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <div className="absolute text-center text-gray-500 w-32">I will find you</div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db; // Color of the spinner, you can change it
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
