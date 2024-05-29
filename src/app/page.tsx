import Counter from "@/components/client/Counter";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
  <div className="w-full max-w-5xl mx-auto px-2 lg:px-0">
  <Header/>
  <Counter/>
  </div>
  );
}
