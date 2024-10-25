const Jumbotron = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col px-32 justify-center gap-4 text-white">
            <h1 className="text-4xl font-bold">Hi i'm</h1>
            <h1 className="text-4xl font-bold">Ahmad Rifky Wijayanto</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              quaerat praesentium facere! Aliquam voluptas nihil voluptate
              explicabo rem officiis doloremque?
            </p>
            <button className="h-14 w-40 p-4 rounded-md border border-black bg-purple-800 text-black">
              Lets get started!
            </button>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src="https://s.widget-club.com/images/YyiR86zpwIMIfrCZoSs4ulVD9RF3/d067f925bd53e2db7e682b57d2d1c957/f6b41531a0231639a42aa20b76e90c56.jpg"
                className="h-[300px] w-[300px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
