import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="neo-card border-4 border-text-dark bg-bg-light shadow-neo-lg p-8 sm:p-12">
          <div className="text-6xl sm:text-8xl font-bold text-text-dark mb-4">
            404
          </div>
          <div className="h-1 w-16 bg-acid-green mx-auto mb-6 border-2 border-text-dark shadow-neo-sm"></div>
          <p className="text-lg sm:text-xl font-bold text-text-dark mb-2">
            <span className="text-acid-green">$ cat</span> /dev/null
          </p>
          <p className="text-sm sm:text-base text-text-dark/60 mb-8">
            This page doesn&apos;t exist. It has been sent to /dev/null.
          </p>
          <Link
            href="/"
            className="neo-btn inline-flex items-center gap-2 px-8 py-3 border-4 border-text-dark bg-acid-green text-text-dark font-bold shadow-neo text-sm hover:bg-acid-yellow"
          >
            <i className="fas fa-arrow-left"></i>
            cd ~/
          </Link>
        </div>
      </div>
    </div>
  );
}
