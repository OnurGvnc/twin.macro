import tw from './macro'

// This tests the screens end up in the order they are defined in the config

tw.div`xl:bg-red-500 lg:bg-blue-500 bg-green-500 fill-current md:bg-pink-500 sm:bg-orange-500 sm:text-yellow-500 hidden`
