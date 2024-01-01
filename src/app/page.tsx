import Image from "next/image";
import Card from "./components/Card";
import Link from "next/link";
import moment from "moment";

export default async function Home() {
  const postsResponse = await fetch(
    "https://admin.thegazelletimes.com/api/posts?populate=*&sort[0]=createdAt:desc",
    {
      cache: "no-store",
    }
  );
  const posts = await postsResponse.json();

  return (
    <div className="mb-10">
      <div className="mb-20 mt-5">
        <Link
          href={`/posts/${posts.data[0].attributes.slug}-${posts.data[0].id}`}
          className="relative rounded-md"
        >
          <Image
            src={`https://admin.thegazelletimes.com${posts.data[0].attributes.banner.data.attributes.url}`}
            alt=""
            width={1080}
            height={600}
            className="w-full h-80 object-cover rounded-md mb-5"
          />
          <div className="bg-[#00000066] flex flex-col justify-between absolute  rounded-md text-white top-0 left-0 right-0 bottom-0 p-5">
            <span className="capitalize">
              {moment(posts.data[0].attributes.createdAt)
                .startOf("hour")
                .fromNow()}
            </span>
            <div>
              <p>#{posts.data[0].attributes.category.data.attributes.name}</p>
              <h1 className="text-4xl my-2">
                {posts.data[0].attributes.title}
              </h1>
              <p>
                {posts.data[0].attributes.description.replace(
                  /(.{250})..+/,
                  "$1…"
                )}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.data.slice(1, -1).map((post: any, index: number) => {
          return (
            <Card
              key={post.id}
              title={post.attributes.title}
              description={post.attributes.description.replace(
                /(.{100})..+/,
                "$1…"
              )}
              slug={`${post.attributes.slug}-${post.id}`}
              banner={`https://admin.thegazelletimes.com${post.attributes.banner.data.attributes.url}`}
              category={post.attributes.category.data.attributes.name}
            />
          );
        })}
      </div>
    </div>
  );
}
