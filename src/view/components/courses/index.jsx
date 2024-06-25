import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCourses = () => {
  const courses = [
    {
      image: "/courses/restauration.jpg",
      title: "Curso restauração florestal",
      description: "25 JUN 2024",
    },
    {
      image: "/courses/developer.jpg",
      title: "Curso Desenvolvimento Web",
      description: "25 JUN 2024",
    },
    {
      image: "/courses/design.jpg",
      title: "Curso Design Gráfico",
      description: "25 JUN 2024",
    },
    {
      image: "/courses/instagram.jpg",
      title: "Curso Instagram para Negócios",
      description: "25 JUN 2024",
    },
    {
      image: "/courses/seminario.jpg",
      title: "Ações para o Combate à Evasão",
      description: "25 JUN 2024",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full md:p-10 p-5"
      style={{
        background:
          "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
      }}
    >
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-2 max-w-[600px] ">
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCourses;
