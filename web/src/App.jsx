import avatar from "./assets/avataaars.png";

function App() {
  return (
    <>
      <nav class="p-4 flex justify-between bg-gray-700 text-white">
        <div>Coury Richards</div>
        <div class="w-96 flex gap-4 justify-end">
          <div>Buy Me a Coffee</div>
          <div>Message Me</div>
        </div>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>

      <img class="m-auto" src={avatar} width="200" height="200" alt="" />
      <div class="p-4">
        <h2 class="text-center">Just my personal blog</h2>
        <div class="flex gap-2 mt-2">
          <aside class="w-1/4 p-4 border border-solid border-gray-700">
            <div class="flex">
              <input
                class="border w-full rounded-md border-solid border-gray-700"
                type="text"
                name="search"
                id="search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </aside>
          <section class="w-3/4 p-4 border border-solid border-gray-700">
            This is goint to be where you can read my blog text.
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
