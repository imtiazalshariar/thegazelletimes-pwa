"use client";
import Image from "next/image";
import Link from "next/link";

export default function Card(props: any) {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="card bg-base-100 shadow-xl cursor-pointer w-auto"
    >
      <figure>
        <Image
          src={props.banner}
          height={200}
          width={1000}
          alt=""
          className="object-cover h-80 w-full"
        />
        {/* <img
          src={props.banner}
          alt="Shoes"
          className="object-cover h-80 w-full"
        /> */}
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary">{props.category}</div>
        <h2 className={`card-title ${props.feature ? "lg:text-6xl" : ""}`}>
          {props.title}
        </h2>
        <p className={` ${props.feature ? "lg:text-3xl" : ""}`}>
          {props.description}
        </p>
      </div>
    </Link>
  );
}
