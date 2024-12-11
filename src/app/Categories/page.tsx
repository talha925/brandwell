import { FaHeart, FaCar, FaBaby, FaBrush, FaLaptop, FaHome } from "react-icons/fa"; 
import { GiLipstick, GiShirt, GiPawHeart, GiCakeSlice, GiFlashlight } from "react-icons/gi";
import Link from 'next/link';  // Import Link from Next.js

export default function Categories() {
  const categories = [
    { name: "Accessories", icon: <FaBrush /> },
    { name: "Adult", icon: <FaHeart /> },
    { name: "Art", icon: <FaBrush /> },
    { name: "Automotive", icon: <FaCar /> },
    { name: "Baby", icon: <FaBaby /> },
    { name: "Beauty", icon: <GiLipstick /> },
    { name: "Business & Services", icon: <FaLaptop /> },
    { name: "Clothing", icon: <GiShirt /> },
    { name: "Electronics", icon: <FaLaptop /> },
    { name: "Entertainment", icon: <FaHeart /> },
    { name: "Food & Drinks", icon: <GiFlashlight /> },
    { name: "Health", icon: <GiPawHeart /> },
    { name: "Home & Garden", icon: <FaHome /> },
    { name: "Photography", icon: <FaHeart /> },
    { name: "Restaurants", icon: <FaHeart /> },
    { name: "Toys", icon: <FaBaby /> },
    { name: "Travel", icon: <FaCar /> },
    { name: "Wedding", icon: <GiCakeSlice /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Coupons, Promo Codes & Deals by Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link
            href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
            key={index}
          
             className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <div className="text-2xl mb-2 text-orange-500">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
           
          </Link>
        ))}
      </div>

   
      <footer className="bg-black text-white w-screen max-h-96 flex flex-col justify-between pb-6">
      
        <div className="flex-grow px-4 flex flex-col items-center justify-center my-9">
  
          <div className="flex space-x-2 my-9">
        
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."></path>
              </svg>
            </a>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
              >
                <path d="M22.676 0h-21.352c-.732 0-1.324.592 ..."></path>
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center space-x-6 text-sm my-6">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="Coupons" className="hover:underline">Coupons</a></li>
          </ul>
        </div>


        <p className="text-xs text-gray-400 text-center pt-28">
          © 2024 Bloggydeals. We may earn a commission if you use our links/coupons.
        </p>
      </footer>
    </div>
  );
}
