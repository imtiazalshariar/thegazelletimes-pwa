import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

export default async function Page({ params }: { params: { author: string } }) {
  const id = params.author.split("-")[1];
  const username = params.author.split("-")[0];

  const randomColors = [
    "#F7B538",
    "#F52F57",
    "#95E06C",
    "#6874E8",
    "#2CF6B3",
    "#F7567C",
    "#05B2DC",
    "#09BC8A",
    "#F05365",
  ];

  const authorResponse = await fetch(
    `https://admin.thegazelletimes.com/api/users/${id}?populate=*`,
    {
      cache: "no-store",
    }
  );
  const author = await authorResponse.json();

  return (
    <div>
      <div className="my-10 flex flex-col lg:flex-row gap-5">
        <div>
          {author.profile_pic ? (
            <Image
              height={300}
              width={300}
              alt={author.fullName}
              title={author.fullName}
              className="w-64 h-64 object-cover mb-5 rounded-lg"
              src={`https://admin.thegazelletimes.com${author.profile_pic.url}`}
            />
          ) : (
            <div className="w-64 h-64 flex items-center justify-center text-center object-cover mb-5 rounded-lg bg-gray-900 text-gray-400">
              &gt;_&lt; <br />
              no profile pic
            </div>
          )}
          <h1 className="text-3xl">{author.fullName}</h1>
          <p>@{username}</p>
        </div>

        <div className="flex-1">
          <p className="mt-10 lg:mt-0 mb-2">Posts ({author.posts.length})</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {author.posts.map((post: any) => (
              <Link
                href={`/posts/${post.slug}-${post.id}`}
                className="border border-inherit p-4 drop-shadow-lg rounded-md text-slate-900"
                key={post.id}
                style={{
                  backgroundColor:
                    randomColors[
                      Math.floor(Math.random() * randomColors.length)
                    ],
                }}
              >
                <p>
                  <small>{moment(post.createdAt).format("MMM Do YY")}</small>
                </p>
                <h2 className="text-3xl mb-2 font-semibold">{post.title}</h2>
                <p>{post.description.slice(0, 100)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
