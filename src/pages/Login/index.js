import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from "common/context/Usuario";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          onChange={(e) => setSaldo(e.target.value)}
          value={saldo}
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        onClick={() => navigate("/feira")} 
        disabled={nome.length < 4}
        variant="contained" 
        color="primary"
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
