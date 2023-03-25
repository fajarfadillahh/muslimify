import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

export default function ScrollToTop() {
  const [scrollVisible, setScrollVisible] = useState('-bottom-full');

  useEffect(() => {
    window.addEventListener('scroll', handleScrollVisible);

    return () => {
      window.removeEventListener('scroll', handleScrollVisible);
    };
  }, [scrollVisible]);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleScrollVisible() {
    if (window.scrollY > 400) {
      setScrollVisible('bottom-12');
    } else {
      setScrollVisible('-bottom-full');
    }
  }

  return (
    <div
      className={`fixed right-6 z-50 cursor-pointer rounded-md bg-green-600 p-3 text-[1.3rem] text-white shadow-md transition-all duration-300 ${scrollVisible}`}
      onClick={handleScrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
}
