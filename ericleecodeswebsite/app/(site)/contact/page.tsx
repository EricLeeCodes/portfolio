export default function Contact() {
  return (
    <div className="pb-32 mt-14 text-lg text-lighter bg-darker">
      <h1 className="flex justify-center text-4xl font-bold py-10 ">
        Contact Me!
      </h1>
      <div className="flex justify-center items-center px-4 my-10">
        <form>
          <div className="w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
        </form>
      </div>
    </div>
  );
}
