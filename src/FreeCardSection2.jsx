import iphone16 from './assets/iphonechatgpt.jpg'
import macbook from './assets/macbookchatgpt.png'
import netflix from './assets/netflixchatgpt.png'
import giftcard from './assets/giftchatgpt.png'
import triptobalichatgpt from './assets/triptobalichatgpt.png'
import amazonGiftChaptgpt from './assets/amazonGiftChaptgpt.png'
import gamingChapgpt from './assets/gamingChapgpt.png'
import spotifyChatgpt from './assets/spotifyChatgpt.png'

const FreeCardSection2 = () => {
  const cards = [
    { title: "Win an iPhone 16 Pro! Join Now", img: iphone16, bg: "bg-slate-800", headerBg: "bg-slate-900", btnBg: "bg-slate-900", btnHover: "hover:bg-slate-700" },
    { title: "Get a Free MacBook Today", img: macbook, bg: "bg-cyan-900", headerBg: "bg-cyan-950", btnBg: "bg-cyan-950", btnHover: "hover:bg-cyan-800" },
    { title: "Join & Win a Gaming Console", img: gamingChapgpt, bg: "bg-[#4F4C45]", headerBg: "bg-[#2a2824]", btnBg: "bg-[#2a2824]", btnHover: "hover:bg-[#4F4C45]" },
    { title: "Claim Your $1000 Gift Card", img: giftcard, bg: "bg-amber-800", headerBg: "bg-amber-950", btnBg: "bg-amber-950", btnHover: "hover:bg-amber-800" },
    { title: "Netflix Subscription Giveaway", img: netflix, bg: "bg-red-900", headerBg: "bg-red-950", btnBg: "bg-red-950", btnHover: "hover:bg-red-900" },
    { title: "Free Spotify Premium for 6 Months", img: spotifyChatgpt, bg: "bg-emerald-900", headerBg: "bg-emerald-950", btnBg: "bg-emerald-950", btnHover: "hover:bg-emerald-900" },
    { title: "Win a Trip to Bali and Explore!", img: triptobalichatgpt, bg: "bg-[#663C1F]", headerBg: "bg-[#3D2412]", btnBg: "bg-[#3D2412]", btnHover: "hover:bg-[#663C1F]" },
    { title: "Get Free Amazon Vouchers", img: amazonGiftChaptgpt, bg: "bg-indigo-900", headerBg: "bg-indigo-950", btnBg: "bg-indigo-950", btnHover: "hover:bg-indigo-900" },
  ]

  return (
    <section id="exciting" className="p-12 bg-orange-200 mt-20 rounded-4xl max-w-[1380px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-center mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Exciting Offers!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {cards.map((card, idx) => (
            <div key={idx} className={`shadow-lg rounded-xl mx-auto mb-10 w-[330px] md:w-auto h-[510px] p-6 hover:scale-105 transform transition duration-300 cursor-pointer ${card.bg}`}>
              
              {/* Card Header */}
              <div className={`${card.headerBg} rounded-xl p-3 text-white relative shadow-lg
                              hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                              transition-shadow duration-300 animate-pulse`}>
                <h3 className="text-lg font-bold mb-2 text-center">{card.title}</h3>
              </div>

              {/* Card Image */}
              <img
                src={card.img}
                className="w-full max-w-[300px] py-3 mx-auto filter brightness-70 rounded-3xl 
                           transition duration-300 hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]"
                alt={card.title}
              />

              {/* Glowing Text */}
              <p className="text-base text-white animate-pulse drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-center">
                Limited time offer. Click to join now!
              </p>

              {/* Button */}
              <button className={`mt-4 ${card.btnBg} text-white px-4 py-2 rounded 
                                 ${card.btnHover} hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                                 transition duration-300 w-full font-semibold`}>
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeCardSection2;
