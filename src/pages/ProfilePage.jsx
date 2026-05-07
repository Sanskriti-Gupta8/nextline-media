import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(false);

	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setTimeout(async () => {
				try {
					// Fetch blogs of the logged-in user
					const BlogsApi = await axios.get(
						"http://localhost:3000/api/v1/blogs/profile",
						{
							headers: { Authorization: `Bearer ${token}` },
						}
					);
					setBlogs(BlogsApi.data.blogs);

					// Fetch user profile info
					const UsersApi = await axios.get(
						"http://localhost:3000/api/v1/auth/profile",
						{
							headers: { Authorization: `Bearer ${token}` },
						}
					);
					setUser(UsersApi.data.user);
				} catch (error) {
					console.log("Error fetching user/blogs: ", error);
					alert("Error fetching profile data");
				} finally {
					setLoading(false);
				}
			}, 1000);
		};
		if (token) fetchData();
	}, [token]);

	// Show loading skeleton
	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen bg-blue-50">
				<LoadingComponent />
			</div>
		);
	}

	// Show if user not logged in
	if (!token) {
		return (
			<p className="text-red-500 text-center mt-10 text-lg">
				Please log in to view your profile.
			</p>
		);
	}

	return (
		<main className="min-h-screen bg-blue-50 px-4 py-10">
			<div className="max-w-4xl mx-auto">
				{/* User Info */}
				<section className="bg-white shadow-md rounded-xl p-6 md:p-8 mb-8">
					<h1 className="text-4xl font-bold text-indigo-800 mb-3">
						{user?.name || "User"}
					</h1>
					<p className="text-gray-600 text-lg">
						{user?.bio || "No bio provided yet."}
					</p>
				</section>

				{/* Stats */}
				<section className="bg-white shadow-md rounded-xl p-6 md:p-8 mb-8">
					<h2 className="text-2xl font-semibold text-indigo-700 mb-3">
						Your Stats
					</h2>
					<p className="text-gray-700 text-lg">
						Total Blogs:{" "}
						<span className="font-semibold text-indigo-600">
							{blogs.length}
						</span>
					</p>
				</section>

				{/* Blogs Section */}
				<section className="bg-white shadow-md rounded-xl p-6 md:p-8">
					<h2 className="text-2xl font-semibold text-indigo-700 mb-4">
						Your Blogs
					</h2>

					{blogs.length === 0 ? (
						<p className="text-gray-500">You haven't written any blogs yet.</p>
					) : (
						<ul className="space-y-4">
							{blogs.map((blog) => (
								<li
									key={blog._id}
									onClick={() => navigate(`/blog/${blog._id}`)}
									className="border border-gray-200 p-4 rounded-lg cursor-pointer hover:shadow-lg hover:border-indigo-400 transition-all"
								>
									<h3 className="text-lg font-bold text-gray-800">
										{blog.title}
									</h3>
									<p className="text-sm text-gray-500">
										{blog.category} •{" "}
										{new Date(blog.createdAt).toDateString()}
									</p>
								</li>
							))}
						</ul>
					)}
				</section>
			</div>
		</main>
	);
};

export default ProfilePage;

const LoadingComponent = () => {
	return (
		<div
			role="status"
			className="p-6 max-w-md w-full animate-pulse bg-white rounded-xl shadow-md"
		>
			<div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
			<div className="h-3 bg-gray-200 rounded-full mb-3 w-64"></div>
			<div className="h-3 bg-gray-200 rounded-full mb-3 w-56"></div>
			<div className="h-3 bg-gray-200 rounded-full mb-3 w-40"></div>
			<div className="h-3 bg-gray-200 rounded-full w-64"></div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};
