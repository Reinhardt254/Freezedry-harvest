import HomePage from "@/components/home";
import { HomeNav } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <nav>
        <HomeNav />
      </nav>
      <div>
        <HomePage />
      </div>
    </main>
  );
}
