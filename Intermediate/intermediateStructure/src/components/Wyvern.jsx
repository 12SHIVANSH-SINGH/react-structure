import React from 'react'

function Wyvern({image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGAqQDaGEzvQ8FA7uE9c47rjvCpLcksjdhw&s", name="wyvern", quote="Beware.."}) {
  return (
    <div>
       <div className="relative grid h-[40 rem] w-100 flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/6fc23264846897.5adfbbd345f47.jpg')] bg-cover bg-center">
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative text-center p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 text-3xl font-medium text-white">
           {quote}
          </h2>
          <h5 className="mb-4 text-xl font-semibold text-slate-300">
            {name}
          </h5>
          <img
            alt={name}
            src={image}
            className="relative inline-block h-32 w-32 rounded-full border border-white"
          />
        </div>
      </div>
    </div>
  )
}

export default Wyvern
