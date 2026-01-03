export default function ContactPage() {
  return (
    <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Liên hệ với tôi</h1>
      <div className="flex justify-center gap-8">
        <a
          href="mailto:lebason.2004@gmail.com"
          aria-label="Gửi email tới Lê Bá Sơn"
          className="flex flex-col items-center text-white hover:text-red-400 transition-transform transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
            <title>Gmail</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5v7A1.5 1.5 0 004.5 17h15a1.5 1.5 0 001.5-1.5v-7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7l-9 6-9-6" />
          </svg>
          <span className="sr-only">Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/l%C3%AA-b%C3%A1-s%C6%A1n-919b87359/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn của Lê Bá Sơn"
          className="flex flex-col items-center text-white hover:text-blue-400 transition-transform transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <title>LinkedIn</title>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.34 17H6.06V10.4h2.28V17zM7.2 9.23c-.73 0-1.2-.48-1.2-1.08 0-.61.48-1.08 1.23-1.08.75 0 1.2.47 1.23 1.08 0 .6-.48 1.08-1.26 1.08zM18 17h-2.28v-3.36c0-.8-.29-1.35-1.02-1.35-.56 0-.9.38-1.05.75-.05.12-.06.29-.06.46V17H11.3s.03-6.2 0-6.83h2.28v.97c.3-.46.83-1.12 2.02-1.12 1.48 0 2.6.96 2.6 3.02V17z" />
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          href="https://github.com/lebason2010"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub của Lê Bá Sơn"
          className="flex flex-col items-center text-white hover:text-gray-400 transition-transform transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <title>GitHub</title>
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.39-3.88-1.39-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.43-5.28 5.72.41.36.77 1.08.77 2.18 0 1.57-.01 2.83-.01 3.22 0 .3.21.67.79.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </div>
  );
}