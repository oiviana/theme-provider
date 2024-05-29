import ThemeSwitcher from "@/components/client/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex w-full justify-between py-6 items-center border-b-[1px] border-light-100 dark:border-dark-300">
      <h1 className="font-bold italic text-lg lg:text-xl text-dark-500 dark:text-light-300">Next Themes Provider</h1>
      <ThemeSwitcher />
    </header>
  );
}
