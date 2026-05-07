import React, { useEffect, useState } from "react";
import { blogs } from "../utils/dummyData";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogPage = ({ selectedCategory }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background slideshow images
  const heroImages = [
    "https://media.istockphoto.com/id/1133586715/photo/laptop-on-wooden-table-showing-charts-and-graph-against-blur-cityscape-with-tower-background.jpg?s=612x612&w=0&k=20&c=f2zo2EhK2ThjpVXwSqKMMPFsCn9efjk6OfyfBlrVShQ=",
    "https://thumbs.dreamstime.com/b/news-blog-website-internet-concept-word-sign-cubes-reflection-blue-background-web-online-business-58701149.jpg",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  ];

  // Auto change background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/api/v1/blogs");
        const apiBlogs = res.data.blogs;
        setAllBlogs([...blogs, ...apiBlogs]);
      } catch (err) {
        console.error(err.response?.data || err.message);
        setAllBlogs(blogs);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <LoadingComponent />
      </div>
    );
  }

  const filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);


  return (
    <main className="bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16">

        {/* 🌆 HERO SECTION */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg group mb-20">
          {/* Background slides */}
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-20"></div>

          {/* Text content */}
          <div className="relative z-30 flex flex-col items-center justify-center text-center h-full px-4 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to{" "}
              <span className="underline decoration-4 decoration-blue-500 text-blue-200">
                NEXTLINE MEDIA!!
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-200">
              Stay updated with the latest news across Technology, Entertainment, Health, and more.
            </p>
          </div>

        </section>

        {/* ✍️ Latest Blogs Heading */}
        <section className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 underline">
            Latest Blogs
          </h2>
        </section>

        {/* 📰 Blogs Grid */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blogDetails={blog} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default BlogPage;

const LoadingComponent = () => (
  <div className="animate-pulse w-full max-w-4xl">
    {[...Array(4)].map((_, idx) => (
      <div key={idx} className="mb-8 border-b border-gray-200 pb-6">
        <div className="h-6 bg-gray-300 rounded w-3/5 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    ))}
    <span className="sr-only">Loading...</span>
  </div>
);
