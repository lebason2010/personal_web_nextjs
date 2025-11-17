export default function ContactPage() {
  return (
    <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Liên hệ với tôi</h1>
      <div className="space-y-4">
        <p className="text-lg">
          Email: <a href="mailto:email@cua_ban.com" className="text-blue-400 hover:underline">lebason.2004@gmail.com</a>
        </p>
        <p className="text-lg">
          LinkedIn: <a href="#" className="text-blue-400 hover:underline">https://www.linkedin.com/in/l%C3%AA-b%C3%A1-s%C6%A1n-919b87359/</a>
        </p>
        <p className="text-lg">
          GitHub: <a href="#" className="text-blue-400 hover:underline">https://github.com/lebason2010</a>
        </p>
      </div>
    </div>
  );
}