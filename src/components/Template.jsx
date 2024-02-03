import "../MyButton.css";
import ButtonNeon from "./ButtonNeon.jsx";
import { ModalComp } from "./ModalComp.jsx";
import { Spinner } from "keep-react";

import React, { useState } from "react";

export const MiComponente = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [responseInfo, setResponseInfo] = useState({
    title: "",
    link: "",
    size: "",
  });
  const [loading, setLoading] = useState(false); // Nuevo estado para controlar la visibilidad del spinner

  const axiosGet = async () => {
    setLoading(true); // Mostrar el spinner

    const apiUrl =
      "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/";
    const apiKey = "e6b921f9abmshe364a7324358afdp10ba2cjsnedc70148dcbe";

    const urlWithParams = new URL(apiUrl);
    urlWithParams.searchParams.append("url", inputValue);

    try {
      const response = await fetch(urlWithParams.toString(), {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      // Actualizar el estado con la información de la respuesta
      setResponseInfo({
        title: data.title,
        link: data.link,
        size: data.size,
      });

      // Ocultar el spinner y mostrar el modal
      setLoading(false);
      setShowModal(true);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
      setLoading(false); // Ocultar el spinner en caso de error
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-40">
      <div className="flex flex-col gap-4">
        <div>
          <code
            className="cursor-default hover:text-red-300 opacity-80 hover:opacity-40"
            style={{ fontFamily: "code", fontSize: "44px" }}
          >
            You2be downloader
          </code>
          <p className="text-white cursor-default hover:text-red-300 opacity-50 hover:opacity-40 ">
            Descarga tu Musik de <span title="youtube perrito">You2be</span>
          </p>
        </div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="https://www.youtubejemplo.com/ejemplo"
          className="input border-none rounded"
          type="text"
        />
      </div>
      <ButtonNeon onClick={axiosGet}>DescArbic</ButtonNeon>

      {/* Mostrar el spinner si loading es true */}
      {loading && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <Spinner color="pink" size="xl" />
      </div>
    )}
      
      {/* Renderizar el componente ModalComp con las propiedades necesarias */}
      <ModalComp showModal={showModal} responseInfo={responseInfo} onClose={closeModal} />
    </div>
  );
};
