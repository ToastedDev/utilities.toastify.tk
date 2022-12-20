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
          <button
            className="px-3 py-2 rounded-md bg-orange-800 text-neutral-400 cursor-not-allowed"
            title="Coming soon!"
          >
            Invite to your server
          </button>
        </div>
        <img
          src="/logo.png"
          className="block mx-auto vert-move float-right"
          width={300}
        ></img>
      </div>
    </main>
  );
}
