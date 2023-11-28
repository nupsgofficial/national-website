import { events } from "../../data/upcoming";

const UpcomingEvents = () => {
  return (
    <section className=" px-8 md:px-12 mx-auto font-poppins mt-[10rem]">
      <h3 className="uppercase text-color-1 text-3xl font-medium text-center py-4 mb-2">
        upcoming events
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-3 ">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="last:text-white first:text-white w-[35rem] h-[30rem] p-4 rounded-xl last:bg-[#506ED7] first:bg-[#506ED7] bg-color-1 space-y-1 flex flex-col items-center justify-center text-center"
            >
              <div className="">
                <p className="text-9xl">{event.day}</p>
                <p className="text-3xl">{event.month}</p>
              </div>
              <div className="text-3xl font-bold">
                <p>{event.title}</p>
                <p>{event.venue}</p>
              </div>
              <div className="text-3xl">
                <p>{event.period}</p>
                <p>{event.time}</p>
              </div>
              <div className="font-semibold text-3xl">{event.hastag}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UpcomingEvents
