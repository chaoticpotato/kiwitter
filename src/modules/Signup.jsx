/*
"fullname": "Ms. Judy Metz",
"avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg",
"email": "Mariane_Hodkiewicz@hotmail.com",
"username": "Zane_Anderson94",
"password": "8f1BSzKkr6T48hb"
*/
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mySubmit = (data) => {
    console.log("formData: ", data);
    axios
      .post("https://twitter-clone-node.onrender.com/users/signup", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("işlem bitti");
      });
  };

  return (
    <div className="max-w-xs mx-auto pt-4 pb-10">
      <h1 className="text-3xl py-2 text-center">Kayıt ol</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(mySubmit)}>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">İsim soyisim</span>
            {errors.fullname && (
              <span className="error-message">Bu alan zorunlu</span>
            )}
          </div>
          <input {...register("fullname", { required: true })} type="text" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Email</span>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Bu alan zorunlu",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Geçerli bir adres yazın",
              },
            })}
            type="email"
          />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Password</span>
            {errors.password && (
              <span className="error-message">Bu alan zorunlu</span>
            )}
          </div>
          <input
            {...register("password", { required: true })}
            type="password"
          />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Takma ad</span>
            {errors.username && (
              <span className="error-message">Bu alan zorunlu</span>
            )}
          </div>
          <input {...register("username", { required: true })} type="text" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Avatar Linki</span>
          </div>
          <input {...register("avatar")} type="url" />
        </label>
        <button className="bg-lime-700 text-white rounded py-2 hover:bg-lime-600">
          Kayıt ol
        </button>
      </form>
    </div>
  );
}
