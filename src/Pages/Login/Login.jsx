import LogoPadrao from "../../Components/Logo/Logo";
import { Container } from "./Styles";
import { FormPadrao } from "../../Components/Logo/Styles";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

function Login({ setDados, dados }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onLogin(dados) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", dados)
      //.then((response) => localStorage.setItem('token',response.data))
      .then((response) => setDados(response.data))
      .then(() => navegation("/Home"))
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <div className="logoPadrao">
        <LogoPadrao />
      </div>
      <FormPadrao onSubmit={handleSubmit(onLogin)}>
        <h3>Login</h3>
        <label htmlFor="">Email</label>
        <input
          placeholder=" Digite seu e-mail!"
          {...register("email")}
          type="text"
        />
        {errors.email && (
          <span className="textInfRegister"> {errors.email?.message}</span>
        )}
        <label htmlFor="">Senha</label>
        <input
          placeholder="Digite sua senha!"
          {...register("password")}
          type="text"
        />
        {errors.email && (
          <span className="textInfRegister"> {errors.email?.message}</span>
        )}
        <button className="login" type="submit">
          Entrar
        </button>

        <span className="textInf"> Ainda não possui uma conta?</span>

        <button
          onClick={() => navegation("/register")}
          className="registration"
        >
          Cadastre-se
        </button>
      </FormPadrao>
    </Container>
  );
}
export default Login;
