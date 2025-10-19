import { useForm } from "react-hook-form";
import ProfileForm from "../Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileUpdateButton from "../Dashboard/Profile/ProfileUpdateButton";
import PasswordChangeForm from "../Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../reactcustomhooks/useAuthContext";
import Error from "../Error";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } =
    useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {  isSubmitting, errors },
  } = useForm(user);

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      //profile Update
      const profilePayLoad = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };

      await updateUserProfile(profilePayLoad);
      //password Change
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        {errorMsg && <Error error={errorMsg} />}
        <h1 className="card-title text-2xl mb-4">Profile Information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          <ProfileUpdateButton
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
