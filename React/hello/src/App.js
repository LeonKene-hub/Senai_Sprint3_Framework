import './App.css';
import Title from './components/Title/Title';
import CardEvento from './components/cardEvento/CardEvento';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Title nome="Pedro" sobrenome="Alves" />
      
      <Container>
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
        <CardEvento titulo="Almoço" paragrafo="uma boa e quentinha comida deliciosa" link="Bora comer!!" />
      </Container>
    </div>
  );
}

export default App;
