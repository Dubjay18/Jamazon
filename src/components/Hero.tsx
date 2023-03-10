import React from "react";

function Hero() {
  return (
    <>
      <div className='min-h-screen relative bg-transparent flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Shop smart, live stylish
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-400'>
            Find unique finds and must-haves here. Upgrade
            your life with just a click.
          </p>
        </div>
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden  sm:top-[calc(100%-59rem)]'>
          <svg
            className='relative right-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:right-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='url(#FFA500-546c-4772-8c71-4d3f06d544bc)'
              fillOpacity='.7'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='FFA500-546c-4772-8c71-4d3f06d544bc'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#FFA500' />
                <stop offset={1} stopColor='#FFA500' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-59rem)]'>
          <svg
            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='url(#FFA500-546c-4772-8c71-4d3f06d544bc)'
              fillOpacity='.7'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='FFA500-546c-4772-8c71-4d3f06d544bc'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#FFA500' />
                <stop offset={1} stopColor='#FFA500' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;
