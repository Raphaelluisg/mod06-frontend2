import styled from "styled-components";

export const StyledLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    border: solid 1px ${(props) => props.theme.lightTheme.bg};
    height: 600px;

    h2 {
        margin: 10px;
        font-family: 'Sofia Sans', sans-serif;
    }
`

export type StyledFormProps = {
    error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
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
        border: ${(props) => (props.error ? "solid 1px red" : "none")};
        height: 35px;
    }

    div {
        display: flex;
        width: 90%;
        margin: 8px;
        border-radius: 6px;
        flex-direction: row;
        border: none;
        align-items: center;

        input {
        display: flex;
        width: 100%;
        border: none;
        padding: 3px 5px;
        margin: 0;
        border-right: none;
        border-radius: 6px 0 0 6px;
        height: 35px;
        }

        button {
            display: flex;
            align-items: center;
            border: ${(props) => (props.error ? "solid 2px red" : "none")};
            border-left: none;
            margin: 0;
            padding: 0;
            cursor: pointer;
            border-radius: 0 6px 6px 0;
            height: 35px;
        }
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        border-radius: 5px;
        margin: 10px;
        padding: 5px 10px;
        background-color: ${(props) => props.theme.darkTheme.fg};
        cursor: pointer;
    }
`;