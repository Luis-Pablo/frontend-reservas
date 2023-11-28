import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">¡Ahorra tiempo y dinero!</h1>
      <span className="mailDesc">
        Regístrate y te enviaremos las mejores ofertas para ti
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email" />
        <button>Suscribirte</button>
      </div>
    </div>
  );
}

export default MailList