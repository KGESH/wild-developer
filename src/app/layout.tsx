import './globals.css';
import Navbar from '@/components/navbar/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="!scroll-smooth">
      <body
        className="flex flex-col h-screen m-0 p-0"
        style={{
          backgroundColor: '#081b29',
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
