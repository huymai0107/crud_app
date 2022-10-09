import styled from "styled-components";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #e8863b;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: cen;

    @media screen and (max-width: 400px)
    {
        height: 80%;
    }
`


export const Icon= styled.a`
    justify-self: flex-start;   
    cursor: pointer;    
    font-size: 3.5rem;
    align-items: center;
    margin-left: 24px;
    display: flex;
    font-weight: bolder;
    text-decoration: none;
    color: #211F30;

    &:hover{
        color: #32384D;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px)
    {
        padding: 10px;
    }
`



export const Form = styled.form`
    display: flex;
    background: #211F30;
    max-width: 500px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin:  auto;
    padding: 80px 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9)
    ;
    align-self: center;
    justify-self: center;
    @media screen and (max-width: 400px) {
    padding: 32px 32px;
}`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
    
`

export const FormLabel = styled.label`
    flex: 1;
    margin-bottom: 8px;
    margin-right: 160px;
    margin-left: 20px;
    font-size: 14px;
    color: aliceblue;
`

export const FormInput = styled.input`
    margin-right: 10px;
    margin-left: 20px;
    padding: 16px 40px;
    margin-bottom: 32px;
    border: none;
    border-radius: 10px ;

`

export const FormButton = styled.button`
    flex: 1;
    background-color: #e8863b;
    margin-left: 20px;
    margin-right: 20px;
    padding: 16px 16px ;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        background-color: #32384D;
    }
`

export const Text = styled.span`
    text-align: center;
    margin: center;
    color: #32384D;
    font-size: 16px;
    padding: 10px 10px;
`

export const divTest = styled.div`
    display:inline-block;
`