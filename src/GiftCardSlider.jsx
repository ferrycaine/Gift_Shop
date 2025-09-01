import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gcardImg from "./assets/gcard.png";

const giftCards = [
    { amount: "$5", region: "USA", image: gcardImg },
    { amount: "$10", region: "USA", image: gcardImg },
    { amount: "$20", region: "USA", image: gcardImg },
    { amount: "$30", region: "USA", image: gcardImg },
    { amount: "$40", region: "USA", image: gcardImg },
    { amount: "$50", region: "USA", image: gcardImg },
    { amount: "$60", region: "USA", image: gcardImg },
    { amount: "$5", region: "Australia", image: gcardImg },
    { amount: "$10", region: "Australia", image: gcardImg },
    { amount: "$20", region: "Australia", image: gcardImg },
    { amount: "$30", region: "Australia", image: gcardImg },
    { amount: "$40", region: "Australia", image: gcardImg },
    { amount: "$50", region: "Australia", image: gcardImg },
    { amount: "$60", region: "Australia", image: gcardImg },
    { amount: "€5", region: "Germany", image: gcardImg },
    { amount: "€10", region: "Germany", image: gcardImg },
    { amount: "€20", region: "Germany", image: gcardImg },
    { amount: "€30", region: "Germany", image: gcardImg },
    { amount: "€40", region: "Germany", image: gcardImg },
    { amount: "€50", region: "Germany", image: gcardImg },
    { amount: "€60", region: "Germany", image: gcardImg },
    { amount: "$5", region: "Canada", image: gcardImg },
    { amount: "$10", region: "Canada", image: gcardImg },
    { amount: "$20", region: "Canada", image: gcardImg },
    { amount: "$30", region: "Canada", image: gcardImg },
    { amount: "$40", region: "Canada", image: gcardImg },
    { amount: "$50", region: "Canada", image: gcardImg },
    { amount: "$60", region: "Canada", image: gcardImg },
    { amount: "$70", region: "USA", image: gcardImg },
    { amount: "$80", region: "USA", image: gcardImg },
    { amount: "$90", region: "USA", image: gcardImg },
    { amount: "$100", region: "USA", image: gcardImg },
    { amount: "$70", region: "Canada", image: gcardImg },
    { amount: "$80", region: "Canada", image: gcardImg },
    { amount: "$90", region: "Canada", image: gcardImg },
    { amount: "$100", region: "Canada", image: gcardImg },

];

const GiftCardSlider = () => {
    return (
        <div id="home" className="w-full px-6 py-10 bg-slate-900">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={1}
                slidesPerView={5}
                breakpoints={{
                    1024: { slidesPerView: 5 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    reverseDirection: true,
                    disableOnInteraction: false, // keeps autoplay after drag/interaction
                    pauseOnMouseEnter: false,   // prevents stopping on hover
                }}
                className="giftcard-swiper"
            >
                {giftCards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="group relative bg-black border-[0.1px] border-gray-400 lg:border-0 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-between h-[450px] mt-10 p-4 pb-8 w-[300px] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(128,0,255,0.7)]">
                            
                            {/* Top punch hole design */}
                            <div className="justify-center pt-3">
                                <div className="w-3 h-3 bg-white rounded-full absolute right-[143px] top-[23px]"></div>
                                <div className="w-28 bg-white h-2 rounded-2xl"></div>
                            </div>

                            {/* Title */}
                            <h2 className="text-white text-2xl font-semibold mt-2">
                                Google Play
                            </h2>

                            {/* Logo */}
                            <div className="relative flex items-center justify-center">
                                <img
                                    src={card.image}
                                    alt={`${card.amount} Google Play Gift Card`}
                                    className="h-24 object-contain transition duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,255,128,0.9)]"
                                />
                            </div>

                            {/* Card details */}
                            <div className="text-center">
                                <p className="text-white text-2xl font-bold">Free</p>
                                <p className="text-white text-2xl font-bold">{card.amount} GIFT CARD</p>
                                <p className="text-gray-300 mt-1 text-lg">{card.region}</p>
                            </div>

                            {/* Button */}
                            <button className="bg-white text-lg text-black px-4 py-1 mt-3 rounded-lg font-medium transition hover:bg-gray-500 hover:text-gray-300 hover:shadow-[0_0_15px_rgba(160,160,160,0.9)]">
                                Claim Now
                            </button>

                            {/* Footer */}
                            <div className="text-white flex gap-2 pt-3 text-sm">
                                <p>MUSIC</p>
                                <p className="text-gray-500">MOVIES</p>
                                <p>BOOKS</p>
                                <p className="text-gray-500">APPS</p>
                                <p className="text-gray-700">&</p>
                                <p>MORE</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GiftCardSlider;
