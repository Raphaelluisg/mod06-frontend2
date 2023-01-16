import styled from "styled-components";

export const StyledLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    height: 600px;

    h2 {
        margin: 10px;
        font-family: 'Sofia Sans', sans-serif;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;

    input {
        display: flex;
        width: 90%;
        padding: 3px 5px;
        margin: 8px;
        border-radius: 6px;
    }

    button {
        margin: 5px;
    }
`;