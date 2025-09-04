//  Mine Offers

import ExclusiveDealsChatGPT from './assets/For_MINE/ExclusiveDealsChatGPT.png'
import JoinTheClub from './assets/For_MINE/JoinTheClub.png'
import SpecialOffersChaptgpt from './assets/For_MINE/SpecialOffersChaptgpt.png'
import DirectToyouChatGPT from './assets/For_MINE/DirectToyouChatGPT.png'
import DiscoverMoreChatgpt from './assets/For_MINE/DiscoverMoreChatgpt.png'
import DonMissOutChatGPT from './assets/For_MINE/DonMissOutChatGPT.png'
import GetTheSecrectsChatgpt from './assets/For_MINE/GetTheSecrectsChatgpt.png'
import UnlockHiddenGemschatgpt from './assets/For_MINE/UnlockHiddenGemschatgpt.png'

const EmailSubmit = () => {
    const cards = [
        { title: "Get the Secrets", desc: "Insider tricks you won’t find online.", img: DiscoverMoreChatgpt, bg: "bg-gradient-to-b from-orange-700 to-orange-900", headerBg: "bg-orange-950", btnBg: "bg-orange-950", btnHover: "hover:bg-orange-800", link: "https://example.com/get-the-secrets" },
        { title: "Exclusive Deals", desc: "Unlock discounts only for subscribers.", img: ExclusiveDealsChatGPT, bg: "bg-gradient-to-b from-indigo-700 to-indigo-900", headerBg: "bg-indigo-950", btnBg: "bg-indigo-950", btnHover: "hover:bg-indigo-800", link: "https://example.com/exclusive-deals" },
        { title: "Join the Club", desc: "Become part of our growing community.", img: JoinTheClub, bg: "bg-gradient-to-b from-amber-600 to-amber-800", headerBg: "bg-amber-950", btnBg: "bg-amber-950", btnHover: "hover:bg-amber-800", link: "https://example.com/join-the-club" },
        { title: "Unlock Hidden Gems", desc: "Content too good to post anywhere else.", img: DonMissOutChatGPT, bg: "bg-gradient-to-b from-purple-700 to-purple-900", headerBg: "bg-purple-950", btnBg: "bg-purple-950", btnHover: "hover:bg-purple-800", link: "https://example.com/unlock-hidden-gems" },
        { title: "Special Offers", desc: "Enjoy subscriber-only promotions.", img: GetTheSecrectsChatgpt, bg: "bg-gradient-to-b from-stone-500 to-stone-700", headerBg: "bg-stone-900", btnBg: "bg-stone-900", btnHover: "hover:bg-stone-700", link: "https://example.com/special-offers" },
        { title: "Direct to You", desc: "No searching just get free delivered.", img: DirectToyouChatGPT, bg: "bg-gradient-to-b from-cyan-600 to-cyan-900", headerBg: "bg-cyan-950", btnBg: "bg-cyan-950", btnHover: "hover:bg-cyan-800", link: "https://example.com/direct-to-you" },
        { title: "Dont Miss Out", desc: "The good stuff only comes to your inbox.", img: UnlockHiddenGemschatgpt, bg: "bg-gradient-to-b from-emerald-600 to-emerald-900", headerBg: "bg-emerald-950", btnBg: "bg-emerald-950", btnHover: "hover:bg-emerald-800", link: "https://example.com/dont-miss-out" },
        { title: "Discover More", desc: "Find new exclusive opportunities weekly.", img: SpecialOffersChaptgpt, bg: "bg-gradient-to-b from-rose-700 to-rose-900", headerBg: "bg-rose-950", btnBg: "bg-rose-950", btnHover: "hover:bg-rose-800", link: "https://example.com/discover-more" }
    ]

    const handleClaimClick = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <section id="exclusive" className="p-12 bg-lime-200 mt-20 rounded-4xl max-w-[1380px] mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-center mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Exclusive Mine Offers!
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className={`shadow-lg rounded-xl mx-auto mb-10 w-[300px] md:w-auto h-[530px] p-6 hover:scale-105 transform transition duration-300 cursor-pointer ${card.bg}`}>

                            <img
                                src={card.img}
                                className="w-[270px] h-[270px] mx-auto mb-4 rounded-xl transition duration-300 hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]"
                                alt={card.title}
                            />

                            <div className={`${card.headerBg} rounded-xl p-3 text-white text-center shadow-lg`}>
                                <h3 className="text-lg font-bold">{card.title}</h3>
                            </div>

                            <p className="text-base text-white mt-4 text-center px-2">
                                {card.desc}
                            </p>

                            <button
                                onClick={() => handleClaimClick(card.link)}
                                className={`mt-6 ${card.btnBg} text-white px-4 py-3 rounded-lg ${card.btnHover} hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition duration-300 w-full font-semibold`}
                            >
                                Claim Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmailSubmit;
