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
  const [firstFetchData, setFirstFetchData] = useState(null);

  const fetchGetName = async () => {
    const apiUrl = "https://youtube-video-and-shorts-downloader.p.rapidapi.com/";
    const apiKey = "d7364684c7msh3006660d75832f8p1e03f1jsn5c8ea470b0c1";

    const urlWithParams = new URL(apiUrl);
    urlWithParams.searchParams.append("url", inputValue);

    try {
      const response = await fetch(urlWithParams.toString(), {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "youtube-video-and-shorts-downloader.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("First fetch data: ", data);
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
      return null;
    }
  };

  const axiosGet = async () => {
    setLoading(true);

    const firstData = await fetchGetName();

    if (firstData) {
      const apiUrl = "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/";
      const apiKey = "d7364684c7msh3006660d75832f8p1e03f1jsn5c8ea470b0c1";

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
        console.log("Second fetch data: ", data);

        setResponseInfo({
          title: firstData.data.video_info.title,
          link: data.dlink,
          size: data.size,
        });

        setLoading(false);
        setShowModal(true);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error.message);
        setLoading(false);
      }
    } else {
      console.error("No se pudo obtener la información de la primera solicitud");
      setLoading(false);
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
      <ModalComp
        showModal={showModal}
        responseInfo={responseInfo}
        onClose={closeModal}
      />
    </div>
  );
};
