import Link from "next/link"

export default function DownJones() {
  return (
    <div className="relative bg-black p-10 min-h-screen">
      <div className="text-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white dark:text-white font-serif">&#9650; ANGELO VS EVERYBODY! &#9650;</h1>
        <p className="text-xl text-white dark:text-gray-300 font-serif">
          Explore Vercel Customer Stories and Discover the Benefits of a Switch to Vercel
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-black dark:bg-gray-700 shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-white dark:text-white mb-2 font-serif">
            How Sonos Amplified Their DevEx
          </h2>
          <Link
            className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 font-bold italic underline"
            href="https://vercel.com/customers/how-sonos-amplified-their-devex"
          >
            Read Article
          </Link>
        </div>
        <div className="bg-black dark:bg-gray-700 shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-white dark:text-white mb-2 font-serif">
            Washington Post: Next.js + Vercel - Engineering at the Speed of Breaking News
          </h2>
          <Link
            className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 font-bold italic underline"
            href="https://vercel.com/customers/washington-post-next.js-vercel-engineering-at-the-speed-of-breaking-news"
          >
            Read Article
          </Link>
        </div>
        <div className="bg-black dark:bg-gray-700 shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-white dark:text-white mb-2 font-serif">
            A Better Developer Experience Makes Building Cruise Critic More Efficient
          </h2>
          <Link
            className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 font-bold italic underline"
            href="https://vercel.com/blog/a-better-developer-experience-makes-building-cruise-critic-more-efficient"
          >
            Read Article
          </Link>
        </div>
        <div className="bg-black dark:bg-gray-700 shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold text-white dark:text-white mb-2 font-serif">
            Parachute improves site page load times by 60% in one month
          </h2>
          <Link
            className="text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 font-bold italic underline"
            href="https://vercel.com/customers/parachute-improves-site-page-load-times-by-60-in-one-month"
          >
            Read Article
          </Link>
        </div>
      </div>
      <div className="text-center mt-10 max-w-4xl mx-auto">
        <h1 className="text-8xl font-bold text-white dark:text-white font-serif">&#9650;</h1>
      <p className="text-xl text-white dark:text-gray-300 mb-4 font-serif">
        Ready to Evaluate a Switch to Vercel for Staples?
      </p>
      <Link href="https://calendly.com/d/29d-qff-z3s/vercel" className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-300 dark:text-black" >
        Schedule Your Consultation
      </Link>
    </div>
  </div>
)}

