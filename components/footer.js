const Footer = () => {
  return (
    <div className="container">
      <h1 className="title">Assine nossa Newsletter</h1>
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
