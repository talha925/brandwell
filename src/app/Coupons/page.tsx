import Image from "next/image"
export default function Coupons() {
return(
<div>



<div className=" ">
        <h3 className="text-xl text-center font-semibold ">Free Online Coupons and Promo Codes for the Store You Love</h3>
        <div className=" flex justify-evenly"></div>
            <Image src="/image/amazon.com.png" alt="Amazon"width={400} height={500} className="w-56 md:w-56 sm:w-4 h-auto md:ml-80 ml-20 mt-20 rounded-full-md  p-2.5 outline outline-offset-2 outline-gray-100" />
       
            
          </div>

<section className="mb-20">
  <h3 className="text-xl font-semibold mb-7 md:ml-44 ml-3  sm:ml-4">Today&apos;s Most Popular Coupons & Deals</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 mx-auto max-w-7xl">


<div className="bg-white border p-4 rounded-lg shadow-lg md:rounded md:shadow">

<p className="text-sm text-green-500 font-medium mb-2 ml-20">Verified <span className="text-gray-500">•udemy</span></p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 85% Off Online Courses During Black Friday & Cyber Monday Sale
</h4>
<h1 className="text-2xl font-sans font-bold mb-2 ml-1">
Udemy
</h1>
<p className="text-gray-600 text-sm mb-4 ml-20">
Fill Your Cart with Career-changing Skills
</p>
<p className="text-sm text-gray-500 mb-4 ml-20">Ends in 8 days</p>
<button className="bg-blue-600 text-white py-2 px-6 ml-56 md:ml-80 md:rounded-lg hover:bg-blue-700 transition duration-200">
Get deal
</button>
</div>

{/* Hotel Collection Deal */}
<div className="bg-white border p-6 rounded-lg shadow-lg">
<p className="text-sm text-red-500 font-medium mb-2 ml-20">Exclusive <span className="text-gray-500">•Hotel Collection</span></p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 50% Off Sitewide + Extra 20% Off All Orders
</h4>
<h1 className="text-1xl font-mono font-light mb-2 ml-1 text-black">
• HOTEL COLLECTION
</h1>
<p className="text-gray-600 text-sm mb-4"></p>
<button className="bg-blue-600 text-white py-2 px-6  ml-56 md:ml-80 rounded-lg hover:bg-blue-700 md:transition duration-200">
Get code
</button>
</div>

<div className="bg-white border p-6 rounded-lg shadow-lg">
<p className="text-sm text-red-500 font-medium mb-2 ml-20">Exclusive <span className="text-gray-500">• Aroma360</span></p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 50% Off Sitewide + Extra 20% Off All Orders
</h4>
<h1 className="text-2xl font-mono font-light mb-2 ml-1 text-gray-400">
AROMA360
</h1>
<p className="text-gray-600 text-sm mb-4"></p>
<button className="bg-blue-600 text-white py-2 px-6 ml-56 md:ml-80 rounded-lg hover:bg-blue-700 transition duration-200">
Get code
</button>
</div>


<div className="bg-white border p-6 rounded-lg shadow-lg">
<p className="text-sm text-green-500 font-medium mb-2 ml-20">Verified <span className="text-gray-600"> • Aquasana</span> </p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 60% Off Sitewide on Black Friday Early Access Sale
</h4>
<h1 className=" font-sans  mb-2 ml-1 inline-block text-3xl font-bold
bg-gradient-to-r from-indigo-400 to-blue-200
bg-clip-text text-transparent">
Aquasana
</h1>
<p className="text-gray-600 text-sm mb-4"></p>
<p className="text-sm text-gray-500 mb-4 nl-20">Ends tomorrow</p>
<button className="bg-blue-600 text-white py-2 px-6 ml-56 md:ml-80 rounded-lg hover:bg-blue-700 transition duration-200">
Get deal
</button>
</div>


<div className="bg-white border p-6 rounded-lg shadow-lg">
<p className="text-sm text-gray-500 font-medium mb-2 ml-20">Verified<span className="text-gray-600">• Sunspel</span> • Sunspel</p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 30% Off Selected Men&apos;s Styles on Black Friday Sale
</h4>
<h1 className="text-1xl font-serif font-bold mb-2 ml-1">
SUNSPEL
</h1>
<p className="text-gray-600 text-sm mb-4 ml-20">
Including Best-selling Classic T-shirts & Riviera Polo Shirts
</p>
<p className="text-sm text-gray-500 mb-4">Ends in 1 month</p>
<button className="bg-blue-600 text-white py-2 px-6 ml-56 md:ml-80 rounded-lg hover:bg-blue-700 transition duration-200">
Get deal
</button>
</div>

<div className="bg-white border p-6 rounded-lg shadow-lg">
<p className="text-sm text-green-500 font-medium mb-2 ml-20">Verified <span className="text-gray-600">• Newegg</span></p>
<h4 className="text-lg font-semibold mb-2 ml-20">
Up to 80% Off Your Tech Favorites on Black Friday Deals
</h4>
<h1 className="text-2xl font-mono font-bold  mb-2 ml-1 text-blue-900">
Newegg
</h1>
<p className="text-gray-600 text-sm mb-4"></p>
<p className="text-sm text-gray-500 mb-4 ml-20">Ends in 5 days</p>
<button className="bg-blue-600 text-white py-2 px-6 ml-56 md:ml-80 rounded-lg hover:bg-blue-700 transition duration-200">
Get deal
</button>
</div>
</div>


</section>

<footer className="bg-black text-white py-4">
<div className="container mx-auto px-4 text-center" >

<div className="flex justify-center  mb-44 space-x-4">

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-white "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-1 md:stroke-2"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.306-3.608.975-.975 2.242-1.244 3.608-1.306 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.63.07-3.179.51-4.343 1.674-1.164 1.164-1.604 2.713-1.674 4.343-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.07 1.63.51 3.179 1.674 4.343 1.164 1.164 2.713 1.604 4.343 1.674 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.63-.07 3.179-.51 4.343-1.674 1.164-1.164 1.604-2.713 1.674-4.343.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.07-1.63-.51-3.179-1.674-4.343-1.164-1.164-2.713-1.604-4.343-1.674-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.287c-2.276 0-4.125-1.849-4.125-4.125s1.849-4.125 4.125-4.125 4.125 1.849 4.125 4.125-1.849 4.125-4.125 4.125zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
    </svg>
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-6 w-6 stroke-1 md:stroke-2"
    >
      <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.352c0 .732.592 1.324 1.324 1.324h11.483v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.465.099 2.795.143v3.24h-1.917c-1.505 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.622h-3.123v9.294h6.132c.732 0 1.324-.592 1.324-1.324v-21.352c0-.732-.592-1.324-1.324-1.324z" />
    </svg>
  </a>

  <div className="border-b-* border-indigo-200 "></div>
</div>

<ul className="flex justify-center mb-28 space-x-6 text-sm ">
  <li><a href="#" className="hover:underline">About Us</a></li>
  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
  <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
  <li><a href="#" className="hover:underline">Contact Us</a></li>
  <li><a href="Coupons" className="hover:underline">Coupons</a></li>
</ul>

<p className="text-xs text-gray-500">
  © 2024 Bloggydeals. We may earn a commission if you use our links/coupons.
</p>
</div>
</footer>
</div>
)
}


