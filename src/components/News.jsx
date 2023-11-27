import { news } from '../data/news'
import Button from './Button'

const News = () => {
  return (
    <section className="container px-8 md:px-12 mx-auto font-poppins pb-8 my-[10rem]">
      <h3 className="uppercase text-color-1 text-3xl font-medium text-center py-4 mb-2">
        LATEST NEWS
      </h3>
      <div className="grid grid-cols-2 text-white gap-5">
        {news.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-900 px-5 py-4 h-rem] flex gap-2 flex-col items-center justify-center"
            >
              <h3 className="uppercase text-center  text-xl font-semibold">
                {item.title}
              </h3>
              <figure className="">
                <img
                  src={item.image}
                  className="h-[20rem] object-cover object-center rounde"
                  alt=""
                />
              </figure>
              <p className="text-sm">{item.text}</p>
              <Button label={'Read More'} color={'bg-primary'} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default News
