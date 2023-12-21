import { createSignal } from "solid-js";
import avatar from "./assets/avataaars.png";
import { marked } from "marked";

const [m, setM] = createSignal("## Test markdown");

function App() {
  return (
    <div class="h-screen bg-heather-100">
      <nav class="pt-1 px-4 flex justify-between bg-heather-300 text-heather-700 text-lg font-bold">
        <div class="flex gap-4 items-center">
          <img src={avatar} width="75" height="75" alt="" />
          <div>Coury Richards</div>
        </div>
        <div className="flex items-center">
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
        </div>
        <div class="flex gap-4 justify-end">
          <button class="hover:underline">Buy Me a Coffee</button>
          <button class="hover:underline">Message Me</button>
        </div>
      </nav>
      <div class="p-4">
        <div class="flex gap-2 mt-2">
          <aside class="w-1/4 p-4 border border-solid border-gray-700">
            <div class="relative bg-transparent">
              <div class="absolute inset-y-100 right-0 flex items-center ps-3 pointer-events-none">
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
              <input
                class="border w-full rounded-md p-1 bg-transparent border-solid border-gray-700"
                type="text"
                name="search"
                id="search"
              />
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </aside>
          <section
            class="w-3/4 p-4 border border-solid border-gray-700"
            innerHTML={marked.parse(m())}
          ></section>
        </div>
      </div>
    </div>
  );
}

export default App;
