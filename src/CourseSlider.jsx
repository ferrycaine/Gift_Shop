import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const courses = [
  {
    title: "Course: Digital Marketing Essentials",
    instructor: "Tom Latham",
    description:
      "Gain essential skills in digital marketing, including SEO, social media marketing and analytics, to boost your online presence.",
    rating: "★★★★☆",
    enrolled: "18,343",
    price: "$69.99",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    title: "Course: Web Development Bootcamp",
    instructor: "Sean Williams",
    description:
      "Earn the essentials of web development, including HTML, CSS, JavaScript to create dynamic and interactive websites.",
    rating: "★★★★★",
    enrolled: "32,343",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    title: "Course: Introduction to Artificial Intelligence",
    instructor: "Railee Star",
    description:
      "Explore the exciting field of AI, covering machine learning, neural networks, NLP and AI applications.",
    rating: "★★★★★",
    enrolled: "10,343",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6d90d6b5?w=800&q=80",
  },
  {
    title: "Course: Business Management Fundamentals",
    instructor: "Adam Dempsey",
    description:
      "Master the principles of business management, strategy, finance, operations and leadership skills.",
    rating: "★★★★☆",
    enrolled: "25,123",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033bc5?w=800&q=80",
  },
];

const CourseSlider = () => {
  return (
    <div className="w-full px-6 py-10 bg-gray-900">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // number of cards visible
        loop={true}
        autoplay={{
          delay: 2000,
          reverseDirection: true, // makes it right-to-left
          disableOnInteraction: false,
        }}
        className="course-swiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="bg-teal-700 rounded-2xl shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-green-200">
                  Instructor: {course.instructor}
                </p>
                <p className="text-sm mt-2">{course.description}</p>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <span>
                    Rating: <span className="text-yellow-400">{course.rating}</span>
                  </span>
                  <span>Enrolled: {course.enrolled}</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold">{course.price}</span>
                  <button className="bg-gray-100 text-teal-700 px-3 py-1 rounded-lg hover:bg-white transition">
                    Enroll Now !
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
