import Image from 'next/image';
import WeatherWidget from '@/components/weather_widget';

export default function Home() {
  return (
    <div className="flex flex-col items-left justify-center min-h-[80vh] text-left">
      <Image
        src="/bs1.jpg" 
        alt="Ảnh cá nhân của tôi"
        width={200}
        height={200}
        className="rounded-full border-4 border-white shadow-lg mb-6"
      />

      <h1 className="text-5xl font-bold mb-4">Chào mừng đến trang của Bá Sơn!</h1>
      <p className="text-xl mb-15">Một sinh viên tài năng với bộ óc thiên tài bị tổ chức áo đen cho uống thuốc viên thể hình giúp cơ bắp phát triển</p>
      <WeatherWidget />
    </div>
  );
}