import YourOpinionMattersChatgpt1 from './assets/For_Survays/YourOpinionMattersChatgpt1.png'
import EarnRewardsChatgpt from './assets/For_Survays/EarnRewardsChatgpt.png'
import EasyTasksChatGpt from './assets/For_Survays/EasyTasksChatGpt.png'
import InstantRewardsChatgpt from './assets/For_Survays/InstantRewardsChatgpt.png'
import Answerwinchatgpt from './assets/For_Survays/Answer&winchatgpt.png'
import TrustedSurveysChatgpt from './assets/For_Survays/TrustedSurveysChatgpt.png'
import SmartChoiceChatgpt from './assets/For_Survays/Smart ChoiceChatgpt.png'
import RewardZonechatgpt from './assets/For_Survays/RewardZonechatgpt.png'

const SurvaySubmit = () => {
    const cards = [
        { title: "Your Opinion Matters", desc: "Help us improve with your feedback.", img: YourOpinionMattersChatgpt1, bg: "bg-gradient-to-b from-indigo-700 to-indigo-900", headerBg: "bg-indigo-950", btnBg: "bg-indigo-950", btnHover: "hover:bg-indigo-800" },
        { title: "Earn Rewards", desc: "Get exciting rewards for every survey.", img: EarnRewardsChatgpt, bg: "bg-gradient-to-b from-amber-600 to-amber-800", headerBg: "bg-amber-950", btnBg: "bg-amber-950", btnHover: "hover:bg-amber-800" },
        { title: "Easy Tasks", desc: "Simple questions, quick & easy answers.", img: EasyTasksChatGpt, bg: "bg-gradient-to-b from-stone-500 to-stone-700", headerBg: "bg-stone-900", btnBg: "bg-stone-900", btnHover: "hover:bg-stone-700" },
        { title: "Instant Rewards", desc: "Complete surveys, earn instantly.", img: InstantRewardsChatgpt, bg: "bg-gradient-to-b from-cyan-600 to-cyan-900", headerBg: "bg-cyan-950", btnBg: "bg-cyan-950", btnHover: "hover:bg-cyan-800" },
        { title: "Answer & Win", desc: "Your answers bring exciting rewards.", img: Answerwinchatgpt, bg: "bg-gradient-to-b from-rose-700 to-rose-900", headerBg: "bg-rose-950", btnBg: "bg-rose-950", btnHover: "hover:bg-rose-800" },
        { title: "Trusted Surveys", desc: "100% safe & reliable to get free rewards.", img: TrustedSurveysChatgpt, bg: "bg-gradient-to-b from-emerald-600 to-emerald-900", headerBg: "bg-emerald-950", btnBg: "bg-emerald-950", btnHover: "hover:bg-emerald-800" },
        { title: "Smart Choice", desc: "Surveys that pays smart people like you.", img: SmartChoiceChatgpt, bg: "bg-gradient-to-b from-orange-700 to-orange-900", headerBg: "bg-orange-950", btnBg: "bg-orange-950", btnHover: "hover:bg-orange-800" },
        { title: "Reward Zone", desc: "Your gateway to prizes and rewards.", img: RewardZonechatgpt, bg: "bg-gradient-to-b from-purple-700 to-purple-900", headerBg: "bg-purple-950", btnBg: "bg-purple-950", btnHover: "hover:bg-purple-800" },
    ]

    return (
        <section id="outstanding" className="p-12 bg-indigo-300 mt-20 rounded-4xl max-w-[1380px] mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-center mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Outstanding Offers!
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className={`shadow-lg rounded-xl mx-auto mb-10 w-[300px] md:w-auto h-[530px] p-6 hover:scale-105 transform transition duration-300 cursor-pointer ${card.bg}`}>

                            {/* Image Top */}
                            <img
                                src={card.img}
                                className="w-[270px] h-[270px] mx-auto mb-4 rounded-xl transition duration-300 hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)]"
                                alt={card.title}
                            />

                            {/* Title */}
                            <div className={`${card.headerBg} rounded-xl p-3 text-white text-center shadow-lg`}>
                                <h3 className="text-lg font-bold">{card.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-base text-white mt-4 text-center px-2">
                                {card.desc}
                            </p>

                            {/* Button */}
                            <button className={`mt-6 ${card.btnBg} text-white px-4 py-3 rounded-lg ${card.btnHover} hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition duration-300 w-full font-semibold`}>
                                Participate Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SurvaySubmit;
