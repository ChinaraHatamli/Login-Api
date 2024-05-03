import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  //const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            event.preventDefault();
            const response = await axios.post(
                "http://ismayilli1.beget.tech/api/login",
                data
            );

            localStorage.setItem("token", response?.data?.token);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>Email is required and must be valid</p>}

            <label>Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <p>Password is required</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
