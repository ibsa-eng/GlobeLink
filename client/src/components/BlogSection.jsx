import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "10 Quick Tips About Business Development",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "14 Common Misconceptions About Business Development",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-1.jpg",
    },
    {
      id: 3,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "10 Quick Tips About Real Estate",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-1.jpg",
    },
    {
      id: 4,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "15 Best Blogs To Follow About Real Estate",
      image:
        "https://dev.globelinkproperties.com/wp-content/uploads/2016/03/los-angeles-1.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Updates From Our Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <p className="text-xs">
                  <span className="mr-2">📅 {blog.date}</span>
                  <span>🏷️ {blog.category}</span>
                </p>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button className="text-gray-500 hover:text-gray-700 transition">
            Prev
          </button>
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          <button className="text-gray-500 hover:text-gray-700 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
