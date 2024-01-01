import Image from "next/image";
import Link from "next/link";

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
            <Link className="link link-primary" href={"/"}>
              {post.data.attributes.author.data.attributes.fullName}
            </Link>{" "}
          </li>
          <li>On {post.data.attributes.createdAt}</li>
        </ul>
      </div>
      <h1 className="text-6xl">{post.data.attributes.title}</h1>
      <p className="my-4">{post.data.attributes.description}</p>
    </div>
  );
}
