
const FreeCardsAmazon = [
  "Win an iPhone! Join Now",
  "Get a Free MacBook Today",
  "Claim Your $1000 Gift Card",
  "Exclusive Netflix Subscription Giveaway",
  "Win a Trip to Bali!",
  "Get Free Amazon Vouchers",
  "Join & Win a Gaming Console",
  "Free Spotify Premium for 6 Months",
];

const OfferCard = ({ text }) => {
  return (
    <div className="shadow-lg rounded-lg h-[250px] p-6 hover:scale-105 transform transition duration-300 cursor-pointer bg-slate-900">
      <h3 className="text-lg font-bold mb-2">{text}</h3>
      <p className="text-sm text-gray-600">Limited time offer. Click to join now!</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Join Now
      </button>
    </div>
  );
};

const OffersSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-bold text-center mt-20 mb-10 text-xl md:text-2xl lg:text-4xl">Exciting Offers!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {FreeCardsAmazon.map((offer, index) => (
            <OfferCard key={index} text={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
