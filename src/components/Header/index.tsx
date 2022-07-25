import ViteLogo from '/favicon.svg';
import './styles.css';
import './styles.scss';

export default function Header() {
  const teste = 'teste';
  console.log(teste)
  return (
    <header className="headerContainer">
      <img src={ViteLogo} alt="Logo" />
      My template header
    </header>
  );
}
