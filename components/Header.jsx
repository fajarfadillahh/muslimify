import { useEffect, useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';

// components
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 mx-auto max-w-[480px] transition bg-transparent`}
    >
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className={`text-[22px] font-extrabold text-white`}>
          Muslimify
        </Link>

        <div
          className={`inline-flex cursor-pointer items-center gap-1 text-white`}
          onClick={() =>
            theme == 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          {theme == 'light' ? (
            <>
              <RiMoonClearFill size="20px" />
              <h3 className="text-[14px] font-bold">Dark Mode</h3>
            </>
          ) : (
            <>
              <RiSunFill size="20px" />
              <h3 className="text-[14px] font-bold">Light Mode</h3>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
