import ReviewForm from "./ReviewForm";
import { useEffect, useState } from "react";
import apiClientInterceptor from "../../services/apiClientInterceptor";

const ReviewSection = ({productId}) => {
  // const { productId } = useParams();
  const [userCanReview, setUserCanReview] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await apiClientInterceptor.post(
        `/products/${productId}/reviews/`,
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log("Error submitting review", error);
    }
  };

  const checkUserPermission = async () => {
    try {
      const res = await apiClientInterceptor.get(`/orders/has-ordered/${productId}/`);
      setUserCanReview(res.data.hasOrdered);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserPermission();
  }, []);
  return <div>{userCanReview && <ReviewForm onSubmit={onSubmit} />}</div>;
};

export default ReviewSection;