import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bookmark, BookmarkCheck } from 'lucide-react';

const BlogCard = ({ blogDetails }) => {
  const { _id, title, content, category } = blogDetails;
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookMarked] = useState(false);

  const handleLike = () => setLiked(!liked);
  const handleBook = () => setBookMarked(!bookmark);

  return (
    <div className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-5 sm:p-6 flex flex-col justify-between h-full">
      {/* Wrap everything clickable */}
      <Link to={`/blog/${_id}`} className="flex-1 flex flex-col justify-between">
        
        {/* 🟣 Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 line-clamp-2 leading-snug">
          {title}
        </h1>

        {/* 🟣 Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-3 line-clamp-3">
          {content}
        </p>

        {/* 🟣 Category Tag */}
        <div className="inline-block bg-indigo-50 text-indigo-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-sm border border-indigo-100 w-fit">
          {category}
        </div>
      </Link>

      {/* 🟣 Action Buttons */}
      <div className="flex gap-4 pt-4 text-gray-500">
        <button
          onClick={handleLike}
          className="hover:scale-110 transition-transform"
          title={liked ? "Unlike" : "Like"}
        >
          {liked ? <Heart fill="red" color="red" size={22} /> : <Heart size={22} />}
        </button>

        <button
          onClick={handleBook}
          className="hover:scale-110 transition-transform"
          title={bookmark ? "Remove Bookmark" : "Bookmark"}
        >
          {bookmark ? <BookmarkCheck size={22} color="#4f46e5" /> : <Bookmark size={22} />}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
