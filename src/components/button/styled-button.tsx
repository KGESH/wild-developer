type Props = {
  className?: string;
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function StyledButton({ onClick, children, className, primary = true }: Props) {
  const primaryClasses = 'text-gray-100 bg-blue-500 border-blue-500';
  const secondaryClasses = 'text-blue-500 bg-transparent border-blue-500';

  return (
    <button
      onClick={onClick}
      className={`text-3xl border-2 rounded-lg h-20 font-normal cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
        primary ? primaryClasses : secondaryClasses
      } ${className} px-6 sm:px-12`}
    >
      {children}
    </button>
  );
}
