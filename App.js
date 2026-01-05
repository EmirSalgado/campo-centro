import { useState } from "react";

import Home from "./app/home";
import Mercado from "./app/Mercado";
import MiCampo from "./app/MiCampo";
import Recomendaciones from "./app/Recomendaciones";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "mercado") {
    return <Mercado goHome={() => setScreen("home")} />;
  }

  if (screen === "campo") {
    return <MiCampo goHome={() => setScreen("home")} />;
  }

  if (screen === "recomendaciones") {
    return <Recomendaciones goHome={() => setScreen("home")} />;
  }

  return (
    <Home
      goMercado={() => setScreen("mercado")}
      goCampo={() => setScreen("campo")}
      goRecomendaciones={() => setScreen("recomendaciones")}
    />
  );
}