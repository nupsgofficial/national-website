import { events } from "../../data/upcoming";

const UpcomingEvents = () => {
  return (
    <section className="container px-8 md:px-12 mx-auto font-poppins mb-8">
      <h3 className="uppercase text-color-1 text-xl font-medium text-center py-4 mb-2">
        upcomping events
      </h3>

      <div className="grid grid-cols-2 grid-rows-2 gap-3 justify-items-center ">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="text-white w-36 h-36 p-4 rounded-xl first:bg-[#506ED7] bg-color-1 space-y-1 "
            >
              <div>
                <p className="text-2xl">{event.day}</p>
                <p className="text-[8px]">{event.month}</p>
              </div>
              <div className="text-[8px] font-bold">
                <p>{event.title}</p>
                <p>{event.venue}</p>
              </div>
              <div className="text-[8px]">
                <p>{event.period}</p>
                <p>{event.time}</p>
              </div>
              <div className="font-semibold text-[8px]">{event.hastag}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
