import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
	const [form, setForm] = useState({
		title: "",
		content: "",
		category: "",
		desc: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");

		try {
			await axios.post("http://localhost:3000/api/v1/blogs/create", form, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			navigate("/");
		} catch (err) {
			console.error(err.response?.data || err.message);
			alert("Error creating blog.");
		}
	};

	return (
		<main className="flex justify-center items-center min-h-screen bg-blue-100 px-4 py-10">
			<div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 md:p-10">
				<h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 mb-8 border-b-4 border-indigo-500 pb-3">
					Create New Blog
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6 text-lg">
					{/* Title */}
					<div>
						<label htmlFor="title" className="block font-semibold text-gray-800 mb-1">
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={form.title}
							onChange={handleChange}
							className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-3 py-2 outline-none transition-all"
							placeholder="Enter the title of the blog"
							required
						/>
					</div>

					{/* Content */}
					<div>
						<label htmlFor="content" className="block font-semibold text-gray-800 mb-1">
							Content
						</label>
						<textarea
							id="content"
							name="content"
							value={form.content}
							onChange={handleChange}
							className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-3 py-2 h-32 outline-none transition-all resize-none"
							placeholder="Write the content of your blog..."
							required
						></textarea>
					</div>

					{/* Description */}
					<div>
						<label htmlFor="desc" className="block font-semibold text-gray-800 mb-1">
							Description
						</label>
						<textarea
							id="desc"
							name="desc"
							value={form.desc}
							onChange={handleChange}
							className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-3 py-2 h-24 outline-none transition-all resize-none"
							placeholder="Provide a short description for your blog"
						></textarea>
					</div>

					{/* Category */}
					<div>
						<label htmlFor="category" className="block font-semibold text-gray-800 mb-1">
							Category
						</label>
						<select
							id="category"
							name="category"
							onChange={handleChange}
							value={form.category}
							className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-3 py-2 outline-none transition-all"
							required
						>
							<option value="" disabled>
								Select a category
							</option>
							<option value="Entertainment">Entertainment</option>
							<option value="Politics">Politics</option>
							<option value="Business">Business</option>
							<option value="Technology">Technology</option>
							<option value="Health">Health</option>
						</select>
					</div>

					{/* Submit Button */}
					<div className="pt-4">
						<button
							type="submit"
							className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
						>
							Submit Blog
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default CreateBlog;
