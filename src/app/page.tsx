import About from "@/components/About";
import Card from "@/components/Card";
import Counter from "@/components/client/Counter";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 lg:px-0 flex flex-col gap-10 pb-10">
      <Header />
      <About />
      <div className="flex flex-col items-center gap-6 lg:flex-row justify-between mx-auto lg:mx-0">
        <Counter />
        <Card />
      </div>
    </div>
  );
}
