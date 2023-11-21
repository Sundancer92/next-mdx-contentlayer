import React from "react";
import PostsLists from "@/components/PostsLists";
import PostPagination from "@/components/PostPagination";
import { Post, allPosts } from "contentlayer/generated";
import { getPagination } from "@/utils/pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const metadata = {
	title: "Lista de todos los posts",
	descripcion: "Description posts - ...",
};

const Posts = () => {
	const { currentPosts, totalPages } = getPagination(posts);

	return (
		<div>
			<div className="grid gap-4">
				<PostsLists posts={currentPosts} />
				{totalPages > 1 && <PostPagination totalPages={totalPages} />}
			</div>
		</div>
	);
};

export default Posts;
