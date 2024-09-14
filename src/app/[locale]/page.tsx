import DishCard, { Dish } from "@/components/dish-card";
import HeroSection from "@/components/hero-section";
import { Link } from "@/i18n/routing";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchData(): Promise<PostType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

export default async function Home() {
  const dish: Dish = {
    title: "Praesentium dolorem porro dolorem porro",
    image: "",
    difficulty: 1,
    rating: 4.7,
    avgCookingTime: 30,
    isLiked: false,
  };
  const posts = await fetchData();
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mx-20">
        <DishCard dish={dish} />
        <DishCard dish={dish} />
        <DishCard dish={dish} />
      </div>

      {/* {posts.map((posts) => (
        <div key={posts.id} className="post">
          <h2>title: {posts.title}</h2>
          <p>body: {posts.body}</p>
          <Link href={"/post/" + posts.id}>Details</Link>
        </div>
      ))} */}
    </div>
  );
}
