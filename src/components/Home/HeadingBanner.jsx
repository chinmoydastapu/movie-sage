import gridImage from '../../assets/movie-grid-bg.jpg';
import SearchMovie from '../SearchMovie/SearchMovie';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StarIcon } from '@heroicons/react/24/solid';

const carouselData = [
    {
        category: ["Sci-fi"],
        image: "https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
        title: "Rogue One",
        rating: 7.8
    },
    {
        category: ["Action", "Sci-fi"],
        image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2&imbypass=on",
        title: "The Creator",
        rating: 6.7
    },
    {
        category: ["Historical Drama"],
        image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
        title: "Oppenheimer",
        rating: 8.3
    },
    {
        category: ["Action", "Thriller"],
        image: "https://m.media-amazon.com/images/I/91uzbH0vmcL._AC_UF894,1000_QL80_.jpg",
        title: "Pathan",
        rating: 5.8
    },
    {
        category: ["Crime", "Action"],
        image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        title: "The Batman",
        rating: 7.8
    }
]

function HeadingBanner() {
    return (
        <div className="py-10 px-10 md:px-20 bg-cover relative" style={{ backgroundImage: `url(${gridImage})` }}>
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <SearchMovie />
            <div className='relative'>
                <div className="uppercase font-mono flex justify-end items-center gap-3 pb-10">
                    <span>Follow us:</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current cursor-pointer hover:text-emerald-400">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current cursor-pointer hover:text-emerald-400">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current cursor-pointer hover:text-emerald-400">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </span>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {carouselData.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center items-center w-full bg-cover h-[500px] lg:h-96 rounded-xl shadow-lg relative" style={{ backgroundImage: `url(${data.image})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 flex flex-col gap-2">
                                    <div className='flex items-center flex-wrap gap-2'>
                                        {data.category.map((cat, catIdx) => (
                                            <div key={catIdx} className={`${['bg-primary', 'bg-info', 'bg-error', 'bg-warning', 'bg-success'][Math.round(Math.random() * 4)]} w-fit px-3 py-1 font-semibold text-xs uppercase text-black rounded-md`}>
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='text-xl font-bold'>{data.title}</div>
                                    <div className='flex items-center gap-2'>
                                        <StarIcon className='w-6 h-6 text-yellow-500' />
                                        <span><span className='text-xl'>{data.rating}</span>/10</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default HeadingBanner;