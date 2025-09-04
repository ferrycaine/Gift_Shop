import NFLShopGiftCard from './assets/NFLShopGiftCard.png'
import GetthelatestSamsungS25 from './assets/GetthelatestSamsungS25.png'
import DunkinDonutsGiftCard from './assets/DunkinDonutsGiftCard.png'
import triptobalichatgpt from './assets/triptobalichatgpt.png'
import amazonGiftChaptgpt from './assets/amazonGiftChaptgpt.png'
import gamingChapgpt from './assets/gamingChapgpt.png'
import spotifyChatgpt from './assets/spotifyChatgpt.png'
import ElevenGiftCard from './assets/ElevenGiftCard.png'
import { useState } from 'react'

const FreeCardSection2 = () => {
  const cards = [
    // CPA Links
    { 
      title: "Take a chance at a $100 Dunkin Donuts Gift Card!", 
      img: DunkinDonutsGiftCard, 
      bg: "bg-amber-800", 
      headerBg: "bg-amber-950", 
      btnBg: "bg-amber-950", 
      btnHover: "hover:bg-amber-800", 
      link: "https://singingfiles.com/show.php?l=0&u=2442448&id=68384",
      description: "Enter your information now for a chance to win. (US - IOS)" 
    },

    // CPA Links
    { 
      title: "Be the one to get a 7-Eleven Gift Card!", 
      img: ElevenGiftCard, 
      bg: "bg-red-900", 
      headerBg: "bg-red-950", 
      btnBg: "bg-red-950", 
      btnHover: "hover:bg-red-900", 
      link: "https://singingfiles.com/show.php?l=0&u=2442448&id=69083",
      description: "Enter your information now for a chance to win. (US - IOS)" 
    },

    // CPA Links
    { 
      title: "Enter for a chance at a NFL Shop Gift Card!", 
      img: NFLShopGiftCard, 
      bg: "bg-slate-800", 
      headerBg: "bg-slate-900", 
      btnBg: "bg-slate-900", 
      btnHover: "hover:bg-slate-700",   
      link: "https://singingfiles.com/show.php?l=0&u=2442448&id=69462",
      description: "Enter your information now for a chance to win. (US - ANDROID)" 
    },

    // CPA Links 
    { 
      title: "Get the latest Samsung S25!", 
      img: GetthelatestSamsungS25, 
      bg: "bg-cyan-900", 
      headerBg: "bg-cyan-950", 
      btnBg: "bg-cyan-950", 
      btnHover: "hover:bg-cyan-800", 
      link: "https://singingfiles.com/show.php?l=0&u=2442448&id=68927",
      description: "Enter your information now for a chance to win. (FRANCE - IOS)" 
    },
    
    { 
      title: "Join & Win a Gaming Console", 
      img: gamingChapgpt, 
      bg: "bg-[#4F4C45]", 
      headerBg: "bg-[#2a2824]", 
      btnBg: "bg-[#2a2824]", 
      btnHover: "hover:bg-[#4F4C45]", 
      link: "https://www.playstation.com",
      description: "Enter now to win the ultimate next-gen gaming console." 
    },
    
    { 
      title: "Free Spotify Premium for 6 Months", 
      img: spotifyChatgpt, 
      bg: "bg-emerald-900", 
      headerBg: "bg-emerald-950", 
      btnBg: "bg-emerald-950", 
      btnHover: "hover:bg-emerald-900", 
      link: "https://www.spotify.com/premium",
      description: "Enjoy ad-free music with 6 months of Spotify Premium free." 
    },
    { 
      title: "Win a Trip to Bali and Explore!", 
      img: triptobalichatgpt, 
      bg: "bg-[#663C1F]", 
      headerBg: "bg-[#3D2412]", 
      btnBg: "bg-[#3D2412]", 
      btnHover: "hover:bg-[#663C1F]", 
      link: "https://www.tripadvisor.com",
      description: "Fly to Bali for free and enjoy a once-in-a-lifetime vacation." 
    },
    { 
      title: "Get Free Amazon Vouchers", 
      img: amazonGiftChaptgpt, 
      bg: "bg-indigo-900", 
      headerBg: "bg-indigo-950", 
      btnBg: "bg-indigo-950", 
      btnHover: "hover:bg-indigo-900", 
      link: "https://www.amazon.com/vouchers",
      description: "Shop freely with exclusive Amazon voucher giveaways." 
    },
  ]

  const [isLoading, setIsLoading] = useState(false);

  const handleOfferClick = async (link) => {
    setIsLoading(true);

    try {
      window.open(link, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening offer:', error);
      alert('Sorry, there was an issue accessing the offer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="exciting" className="p-12 bg-orange-200 mt-20 rounded-4xl max-w-[1380px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-center mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Exciting GRIP Offers!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

              {/* Dynamic Description */}
              <p className="text-base text-white animate-pulse drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] text-center">
                {card.description}
              </p>

              {/* Button */}
              <button className={`mt-4 ${card.btnBg} text-white px-4 py-2 rounded 
                                 ${card.btnHover} hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                                 transition duration-300 w-full font-semibold`}
                onClick={() => handleOfferClick(card.link)}
                disabled={isLoading}>
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FreeCardSection2
