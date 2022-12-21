import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-800 text-white">
      <div className="h-screen w-screen flex flex-col justify-center md:flex-row md:items-center px-5 md:pr-0 md:pl-5">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-5xl">
            The only moderation bot you need.
          </h1>
          <p className="mt-2">
            ToastyUtilities helps keep your server squeaky clean with moderation
            commands that are easy to understand.
          </p>
          <div className="p-2 md:p-3"></div>
          <Link href="https://discord.com/oauth2/authorize?client_id=1054359549219459133&permissions=1099914307614&scope=bot%20applications.commands">
            <button className="px-3 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-150">
              Invite to your server
            </button>
          </Link>
        </div>
        <Image
          src="/logo.png"
          alt="ToastyUtilities Logo"
          className="block mx-auto vert-move float-right"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}
