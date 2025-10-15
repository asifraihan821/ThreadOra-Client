import { Link } from "react-router";
import profileImg from "../../assets/img/banner/blog-2.jpg";

const Profile = ({logOutUser}) => {
  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={profileImg}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <Link onClick={logOutUser}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
