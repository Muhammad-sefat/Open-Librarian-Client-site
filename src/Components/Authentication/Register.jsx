import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import lottie from "../../assets/register.json";
import Lottie from "lottie-react";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile, setUser, user } =
    useContext(AuthContext);
  const [showBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, photo, name } = data;
    if (!/^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast("Please Provide More Stronge Password");
      return;
    }
    try {
      const result = await createUser(email, password);
      updateUserProfile(name, photo);
      setUser({ ...user?.email, photoURL: photo, displayName: name });
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
      toast("Register Successfully");
      reset();
      navigate("/");
    } catch (error) {
      toast(error);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            // data-aos="fade-right"
            // data-aos-duration="1000"
            className="md:w-[50%]"
          >
            <Lottie animationData={lottie} loop={true}></Lottie>
          </div>
          <div
            // data-aos="fade-left"
            // data-aos-duration="1000"
            className="card shrink-0 w-full md:w-[50%] shadow-2xl bg-base-100"
          >
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <p className="text-4xl font-bold text-lime-500 pb-3">
                  Register Now!
                </p>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  id="image"
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showBtn ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="absolute bottom-3 right-3 text-xl"
                    onClick={() => setShowBtn(!showBtn)}
                  >
                    {showBtn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lime-500 text-lg">Register</button>
              </div>
            </form>
            <p className="text-center py-3">
              Already Have An Account ? Please{" "}
              <NavLink to={"/login"}>
                {" "}
                <span className="text-blue-500 font-medium">Login</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
