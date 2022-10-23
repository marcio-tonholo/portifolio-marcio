import video from "../../assets/videos/intro.mp4";
import { useEffect, useRef, useState } from "react";
import { StarVideo, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";

function InitialPage() {
  const navigate = useNavigate();
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState(null);
  const [typedText3, setTypedText3] = useState(null);
  const [after1, setAfter1] = useState(true);
  const [after2, setAfter2] = useState(false);
  const [after3, setAfter3] = useState(false);
  const [button, setButton] = useState(false);

  const [released, setReleased] = useState(false);
  const vidRef = useRef(null);
  const text1 = "Olá eu sou Márcio José";
  const text2 = "este é meu portifólio";
  const text3 = "conheça meus projetos!";

  const handlePlayVideo = () => {
    vidRef.current.play();
    setReleased(true);
    setTimeout(function () {
      navigate("/home");
    }, 2700);
  };

  useEffect(() => {
    setTimeout(() => {
      setTypedText1(text1.slice(0, typedText1.length + 1));
    }, 100);
    if (typedText1.length == text1.length) {
      setAfter1(false);
      setTypedText2(true);
      setAfter2(true);
    }
  }, [typedText1]);

  useEffect(() => {
    setTimeout(() => {
      setTypedText2(text2.slice(0, typedText2.length + 1));
      if (typedText2.length == text2.length) {
        setTypedText3(true);
        setAfter2(false);
        setAfter3(true);
      }
    }, 100);
  }, [typedText2]);

  useEffect(() => {
    setTimeout(() => {
      setTypedText3(text3.slice(0, typedText3.length + 1));
      if (typedText3.length == text3.length) {
        setButton(true);
      }
    }, 100);
  }, [typedText3]);
  return (
    <>
      {!released && (
        <Title active1={after1} active2={after2} active3={after3}>
          <h1>{typedText1}</h1>
          <h2>{typedText2}</h2>
          <h3>{typedText3}</h3>

          {button && (
            <button
              onClick={() => {
                handlePlayVideo();
              }}
            >
              Lançar
              <IoMdRocket />
            </button>
          )}
        </Title>
      )}

      <StarVideo video muted ref={vidRef}>
        <source src={video} type="video/mp4" />
      </StarVideo>
    </>
  );
}

export default InitialPage;
