import { Link } from "react-router";
import logo from "../../assets/img/banner/ThreadLogo.png";

const MainIcon = () => {
  return (
    <div>
      {/* <a className="btn btn-ghost text-xl drop-shadow-xl/50 italic">daisyUI</a> */}
      <Link to="/">
        <img className="h-[50px] w-[90px]" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default MainIcon;
