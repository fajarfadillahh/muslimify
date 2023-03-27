export default function Footer() {
  return (
    <footer className="main min-h-max mb-[84px]">
      <div className="container border-t-2 border-gray-300 py-8 text-center dark:border-t-gray-800">
        <h1 className="font-bold text-gray-900 dark:text-white">
          @ Copyrights {new Date().getFullYear()} - Develop by ❤️
        </h1>
      </div>
    </footer>
  );
}
