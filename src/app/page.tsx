import Image from "next/image";
import Card from "./components/Card";
import Link from "next/link";
import moment from "moment";
import FlashGroup from "./components/FlashGroup";

export default async function Home() {
  const postsResponse = await fetch(
    "https://admin.thegazelletimes.com/api/posts?populate=*&sort[0]=createdAt:desc",
    {
      cache: "no-store",
    }
  );
  const posts = await postsResponse.json();

  const flashResponse = await fetch(
    "https://admin.thegazelletimes.com/api/flash-news?populate=*&sort[0]=createdAt:desc",
    {
      cache: "no-store",
    }
  );

  const flashNews = await flashResponse.json();

  return (
    <div className="mb-10">
      <div className="mb-10 flex flex-wrap gap-3">
        <Link
          href={`/posts/${posts.data[0].attributes.slug}-${posts.data[0].id}`}
          className="relative rounded-md flex-1"
        >
          <Image
            src={`https://admin.thegazelletimes.com${posts.data[0].attributes.banner.data.attributes.url}`}
            alt=""
            width={1080}
            height={600}
            className="w-full h-screen lg:h-96 2xl:h-screen-2/3 object-cover rounded-md"
          />
          <div className="bg-[#000000bd] flex flex-col justify-between absolute  rounded-md text-white top-0 left-0 right-0 bottom-0 p-5 2xl:p-20">
            <span className="capitalize">
              {moment(posts.data[0].attributes.createdAt)
                .startOf("hour")
                .fromNow()}
            </span>
            <div className="lg:mt-20">
              <p>#{posts.data[0].attributes.category.data.attributes.name}</p>
              <h1 className="text-2xl lg:text-4xl 2xl:text-7xl my-2">
                {posts.data[0].attributes.title}
              </h1>
              <p className="text-sm lg:text-lg 2xl:text-3xl">
                {posts.data[0].attributes.description.replace(
                  /(.{250})..+/,
                  "$1…"
                )}
              </p>
            </div>
          </div>
        </Link>
        <div className="w-full lg:w-1/3 py-10 lg:py-0 flex flex-col gap-5">
          <div>
            <h2 className="text-lg 2xl:text-3xl font-bold m-0 p-0">
              News Flash
            </h2>
            <p className="m-0 p-0 2xl:text-2xl">Today&apos;s Breaking News</p>
            <p className="2xl:text-xl">
              <small>{moment(Date.now()).format("LLLL")}</small>
            </p>
          </div>
          <FlashGroup data={flashNews.data} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        <div className="lg:col-span-2 2xl:col-span-3 row-span-1 bg-white p-1 rounded-md"></div>

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
