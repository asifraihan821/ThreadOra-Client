import { useEffect, useState } from "react";
import authApiClient from "../../services/authApiClient";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  //fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await authApiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("error fetching error", error);
    }
  };

  //login user
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await authApiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      //agrer login set user
      await fetchUserProfile();
    } catch (error) {
      console.log("login error", error.response?.data);
      setErrorMsg(error.response?.data?.detail);
      throw error;
    }
  };

  //register user
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await authApiClient.post("/auth/users/", userData);
      return {
        success: true,
        message: "Registration Successful. Redirecting...",
      };
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)
          .flat()
          .join("\n");
        setErrorMsg(errorMessage);
        return { success: false, message: errorMessage };
      }
      setErrorMsg("Registration failed. Please Try again Later");
      return {
        success: false,
        message: "Registration failed. Please Try again later.",
      };
    }
  };

  //logout user
  const logOutUser = async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return { user, errorMsg, loginUser, registerUser, logOutUser };
};
export default useAuth;
