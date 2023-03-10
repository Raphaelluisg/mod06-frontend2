import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";

export function LoginForm() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const navigate = useNavigate();

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const loginPayload = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };

        const userData = await api.login(loginPayload);
        setLoading(false);
        if (!userData) {
            setError(true);
            return;
        }
        navigate("/users");
    }

    return (
        <>
            {loading ? (
                <Loading/> 
            ): (
                <StyledLoginForm>
                    <h2>PlayStation App</h2>
                    <StyledForm onSubmit={handleSubmit} error={error}>
                        <input placeholder="ID(Email)" name="email" />
                        <div>
                            <input 
                                placeholder="Password" 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                required
                            />
                            <button type="button" onClick={handleShowPassword}>
                                {showPassword ? ( 
                                    <BsFillEyeSlashFill size={23} />
                                ) : ( 
                                    <BsFillEyeFill size={23} />
                                )}
                            </button>
                        </div>
                        <button type="submit">Login</button>
                    </StyledForm>
                </StyledLoginForm>
                )}
        </>
    );
}