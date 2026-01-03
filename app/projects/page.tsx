import ProjectCard from '../../components/projectCard';

const projects = [
  {
    title: 'Cánh tay robot Master–Slave',
    description:
      'Thiết kế cánh tay robot điều khiển theo mô hình master–slave, sử dụng cảm biến chuyển động và điều khiển lực để sao chép chuyển động chính xác.',
    tech: ['ROS', 'C/C++', 'Embedded', 'Motor Control'],
    image: '/robot.jpg',
  },
  {
    title: 'Hệ thống phân loại màu sắc',
    description:
      'Hệ thống nhận diện và phân loại màu sắc từ ảnh, hỗ trợ nhiều không gian màu và augmentation để tăng độ chính xác.',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    image: '/RGB_classificastion.jpg',
  },
  {
    title: 'Mô hình lọc nhiễu cho SERs',
    description: 'Mô hình tiền xử lý giúp giảm nhiễu trong phổ SERs bằng mô hình autoencoder sâu.',
    tech: ['Python', 'Pandas', 'TensorFlow'],
    image: '/SERs.jpg',
  },
  {
    title: 'Trang web học tiếng Anh',
    description: 'Nền tảng học tập tương tác với bài học, quiz và hệ thống theo dõi tiến trình người học.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/Web.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Dự án đã thực hiện</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} image={p.image} />
        ))}
      </div>

    </main>
  );
}
