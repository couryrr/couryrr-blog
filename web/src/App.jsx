function App() {
  return (
    <>
      <nav class="p-4 flex border border-solid border-gray-700">
        <div>Coury Richards</div>
        <div>Buy Me a Coffee</div>
        <div>Message Me</div>
      </nav>
      <div class="p-4">
        <h2 class="text-center">Just my personal blog</h2>
        <div class="flex gap-2 mt-2">
          <aside class="w-1/4 p-4 border border-solid border-gray-700">
            <input
              class="border w-full rounded-md border-solid border-gray-700"
              type="text"
              name="search"
              id="search"
            />

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
