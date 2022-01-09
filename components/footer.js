const Footer = () => {
  return (
    <div className="container">
      <h1>Assine nossa newsletter</h1>
      <p>para receber nossas novidades</p>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu E-mail..."
        />
      <button className="buttonSend">Enviar</button>
      </div>
      <h3>&copy;Thiago Savi</h3>
    </div>
  );
};

export default Footer;
