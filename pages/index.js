import * as React from "react"

import Image from 'next/image'
import map from '../public/map.svg'
import MyV0Component from './myV0Component'
import TestComponent from './testComponent'


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DYqOzAG2i4J
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="relative bg-black p-10 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white dark:text-white font-serif">Welcome, New York Times Team!</h1>
        <p className="text-xl text-white dark:text-gray-300 font-serif">
          Explore Vercel Customer Stories and Discover the Benefits of a Switch to Vercel!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className="text-center mt-10">
        <p className="text-xl text-white dark:text-gray-300 mb-4 font-serif">
          Ready to Evaluate a Switch to Vercel for The New York Times?
        </p>
        <Button
          aria-label="Book a Consultation"
          className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 dark:bg-gray-400 dark:hover:bg-gray-300 dark:text-black"
          variant="default"
        >
          Book a Consultation
        </Button>
      </div>
      <div className="absolute bottom-0 inset-x-0 flex justify-center">
        <div className="w-16 h-16 border-t-16 border-white border-l-8 border-transparent border-r-8 border-transparent" />
      </div>
    </div>
  )
}
