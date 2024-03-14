import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../components/UserContextProvider";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "Mariane_Hodkiewicz@hotmail.com",
      password: "8f1BSzKkr6T48hb",
    },
  });

  const { handleLogin } = useContext(UserContext);

  const mySubmit = (data) => {
    console.log("formData: ", data);
    axios
      .post("https://twitter-clone-node.onrender.com/users/login", data)
      .then((response) => {
        if (response.status === 200) {
          handleLogin(response.data.token);
        }
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
      <h1 className="text-3xl py-2 text-center">Giriş Yap</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(mySubmit)}>
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

        <button className="bg-lime-700 text-white rounded py-2 hover:bg-lime-600">
          Giriş yap
        </button>
      </form>
    </div>
  );
}
