import { BookText, Contact, Home, Mars, MoveRight, ShoppingBasket, Venus } from "lucide-react";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="border border-pink-300 rounded-lg ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={'/'} className="font-bold text-gray-900 text-md"><Home className="mr-"/> Home</Link>
          </li>
          <li>
            <Link className="font-bold text-gray-300 text-md"><Venus className="mr-"/> Women's</Link>
          </li>
          <li>
            <Link className="font-bold text-gray-300 text-md"><Mars className="mr-"/> Men's</Link>
          </li>
          <li>
            <Link to='/shop' className="font-bold text-gray-900 text-md"><ShoppingBasket className="mr-"/> Shop</Link>
          </li>
          <li>
            <Link className="font-bold text-gray-300 text-md"><MoveRight className="mr-"/> Pages </Link>
          </li>
          <li>
            <Link className="font-bold text-gray-300 text-md"><BookText className="mr-"/> Blog</Link>
          </li>
          <li>
            <Link className="font-bold text-gray-900 text-md"><Contact className="mr-3"/> contact</Link>
          </li>
          <li>
            <Link to='/login' className="py-5 font-bold text-rose-700 text-lg">Login/Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
