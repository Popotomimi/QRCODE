import './App.css';

import { BsFillAlarmFill } from "react-icons/bs";

import { useState } from "react";

function App() {
  const container = document.querySelector(".container");
  const [qrCodeInput, setQrCodeInput] = useState("");

  const [qrCodeImg, setQrCodeImg] = useState(document.querySelector("#qr-code img"));

  const [loading, setLoading] = useState(true);

  const generateQrCode = () => {

    setLoading(false);
    
    if(!qrCodeInput){
      window.alert("Digite algo no input...");
    };

    setQrCodeImg(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput}`);

    container.classList.add("active");

  }

  return (
    <div className="App">
      <div className="container">
        <header id="qr-header">
          <h1>Gerador de QR Code</h1>
          <p>Insira uma URL ou texto, para gerar um QR Code</p>
        </header>
        <div id="qr-form">
          <input type="text" placeholder="Digite a URL ou texto" onChange={(e) => setQrCodeInput(e.target.value)} />
          {loading ? (
            <button onClick={generateQrCode} >Gerar QR Code</button>
          ) : (
            <button onClick={generateQrCode} >Apenas digite e aguarde... <BsFillAlarmFill/> </button>
          )}
        </div>
        <div id="qr-code">
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput}`} alt="Qr Code" />
        </div>
      </div>
    </div>
  );
}

export default App;
