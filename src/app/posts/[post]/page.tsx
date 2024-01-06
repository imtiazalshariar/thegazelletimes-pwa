import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

export default async function Page({ params }: { params: { post: string } }) {
  const id = params.post.split("-").slice(-1)[0];

  const postResponse = await fetch(
    `https://admin.thegazelletimes.com/api/posts/${id}?populate=*`,
    {
      cache: "no-store",
    }
  );
  const post = await postResponse.json();

  return (
    <div>
      <Image
        src={`https://admin.thegazelletimes.com${post.data.attributes.banner.data.attributes.url}`}
        alt={post.data.attributes.title}
        width={1000}
        height={100}
        className="w-full h-80 object-cover rounded-md mb-5"
      />
      <div>
        <ul className="flex gap-3">
          <li>
            By{" "}
            <Link
              className="link link-primary"
              href={`/authors/${post.data.attributes.author.data.attributes.username}-${post.data.attributes.author.data.id}`}
            >
              {post.data.attributes.author.data.attributes.fullName}
            </Link>{" "}
          </li>
          <li>
            On{" "}
            {moment(post.data.attributes.createdAt).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </li>
        </ul>
      </div>
      <h1 className="text-6xl mt-2 p-0">{post.data.attributes.title}</h1>
      <p className="my-4">{post.data.attributes.description}</p>
      <Markdown className="content">{post.data.attributes.content}</Markdown>
    </div>
  );
}
