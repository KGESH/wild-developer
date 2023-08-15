import { cn } from '@/utils/tailwind-merge';

type Props = { primary?: boolean } & React.ComponentProps<'button'>;

export default function StyledButton({ children, className, primary = true, ...props }: Props) {
  const primaryClasses = 'text-gray-100 bg-blue-500 border-blue-500';
  const secondaryClasses = 'text-blue-500 bg-transparent border-blue-500';

  return (
    <button
      className={cn(
        `text-3xl border-2 rounded-lg h-20 px-6 sm:px-12 font-normal cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`,
        className,
        {
          [primaryClasses]: primary,
          [secondaryClasses]: !primary,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
