import { FormEvent } from "react";
import { StyledForm, StyledLoginForm } from "./styles";

export function LoginForm() {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const loginPayload = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };
        console.log(loginPayload);
    }

    return (
        <StyledLoginForm>
            <h2>PlayStation</h2>
            <StyledForm onSubmit={handleSubmit}>
                <input placeholder="ID(Email)" name="email" />
                <input placeholder="Password" name="password" />
                <button>Login</button>
            </StyledForm>
        </StyledLoginForm>
    );
}