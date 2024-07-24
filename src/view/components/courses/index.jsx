import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "./mock";
import { api } from "../../../api";

const CarouselCourses = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const request = async () => {
      const { data: response } = await api.get("/cursos");

      const existingIds = new Set(courses.map((course) => course.id));

      const newCourses = response.filter(
        (course) => !existingIds.has(course.id)
      );

      setCursos([...courses, ...newCourses]);
    };

    request();
  }, []);

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
      id="events"
      className="w-full md:p-10 p-5"
      style={{
        background:
          "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
      }}
    >
      <Slider {...settings}>
        {cursos.map((course, index) => (
          <div
            key={index}
            className="flex items-center gap-5 px-2 max-w-[600px] h-[350px]"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <a href={`/evento/${course.id}/informacoes`}>
                  <h3 className="text-lg font-semibold mb-2 max-w-[400px]">
                    {course.title}
                  </h3>
                </a>
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
