import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";

interface Props {
	post: Post;
}

const PostItem = ({ post }: Props) => {
	return (
		<article className="rounded border p-4">
			<h2 className="text-4xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-bold text-transparent">
				<Link href={post.url}>{post.title}</Link>
			</h2>
			<time>
				{new Date(post.date).toLocaleDateString("es-ES", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</time>
			<p>{post.description}</p>
			<ButtonLink href={post.url}>Seguir Leyendo</ButtonLink>
		</article>
	);
};

export default PostItem;
