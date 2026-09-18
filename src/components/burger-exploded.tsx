"use client";

import { useState } from "react";
import Image from "next/image";

type BurgerLayer = {
  id: string;
  num: string;
  name: string;
  detail: string;
  src: string;
  closed: number;
  open: number;
  x: number;
  rotation: number;
  scale: number;
  side: "left" | "right";
};

const layers: BurgerLayer[] = [
  {
    id: "bun-top",
    num: "01",
    name: "PÃO BRIOCHE",
    detail: "Tostado com manteiga",
    src: "/work/smile-burger/layers/bun-top.webp",
    closed: -101,
    open: -234,
    x: -5,
    rotation: -4,
    scale: 1.01,
    side: "left",
  },
  {
    id: "lettuce",
    num: "02",
    name: "ALFACE AMERICANA",
    detail: "Crocância fresca selecionada",
    src: "/work/smile-burger/layers/lettuce.webp",
    closed: -53,
    open: -154,
    x: 8,
    rotation: 3,
    scale: 1.04,
    side: "right",
  },
  {
    id: "onion",
    num: "03",
    name: "CEBOLA ROXA",
    detail: "Corte fino na chapa",
    src: "/work/smile-burger/layers/onion.webp",
    closed: -36,
    open: -103,
    x: -8,
    rotation: -5,
    scale: 0.92,
    side: "left",
  },
  {
    id: "tomato",
    num: "04",
    name: "TOMATE EM RODELAS",
    detail: "Fatias maduras e suculentas",
    src: "/work/smile-burger/layers/tomato.webp",
    closed: -20,
    open: -50,
    x: 5,
    rotation: 3,
    scale: 0.96,
    side: "right",
  },
  {
    id: "pepper-jam",
    num: "05",
    name: "GELEIA DE PIMENTA",
    detail: "Toque agridoce artesanal",
    src: "/work/smile-burger/layers/pepper-jam.webp",
    closed: -3,
    open: 1,
    x: -4,
    rotation: -2,
    scale: 0.91,
    side: "left",
  },
  {
    id: "mozzarella",
    num: "06",
    name: "QUEIJO MUSSARELA",
    detail: "Derretido no ponto exato",
    src: "/work/smile-burger/layers/mozzarella.webp",
    closed: 14,
    open: 51,
    x: 7,
    rotation: 4,
    scale: 1.02,
    side: "right",
  },
  {
    id: "patty",
    num: "07",
    name: "BURGER ARTESANAL 130G",
    detail: "Grelhado no fogo",
    src: "/work/smile-burger/layers/patty.webp",
    closed: 38,
    open: 110,
    x: -5,
    rotation: -3,
    scale: 1.0,
    side: "left",
  },
  {
    id: "garlic-mayo",
    num: "08",
    name: "MAIONESE DE ALHO",
    detail: "Receita exclusiva da casa",
    src: "/work/smile-burger/layers/garlic-mayo.webp",
    closed: 57,
    open: 164,
    x: 5,
    rotation: 2,
    scale: 0.91,
    side: "right",
  },
  {
    id: "bun-bottom",
    num: "09",
    name: "PÃO INFERIOR",
    detail: "Base selada e macia",
    src: "/work/smile-burger/layers/bun-bottom.webp",
    closed: 83,
    open: 221,
    x: -2,
    rotation: -2,
    scale: 0.99,
    side: "left",
  },
];

export function BurgerExploded() {
  const [spread, setSpread] = useState<number>(0.75);

  return (
    <div className="burger-stage-container" aria-label="Visualizador interativo de camadas do Smile Burger">
      <div className="burger-controls">
        <div className="spread-label">
          <span className="eyebrow">EXPLORAÇÃO DINÂMICA</span>
          <span className="spread-val">{Math.round(spread * 100)}% ABERTO</span>
        </div>
        <div className="slider-wrapper">
          <label htmlFor="spread-range" className="sr-only">
            Controle de abertura das camadas do burger
          </label>
          <input
            id="spread-range"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={spread}
            onChange={(e) => setSpread(parseFloat(e.target.value))}
            className="spread-slider"
          />
          <div className="slider-ticks">
            <button
              type="button"
              className={`preset-btn ${spread < 0.15 ? "active" : ""}`}
              onClick={() => setSpread(0)}
            >
              FECHADO
            </button>
            <button
              type="button"
              className={`preset-btn ${spread >= 0.5 && spread <= 0.85 ? "active" : ""}`}
              onClick={() => setSpread(0.75)}
            >
              EXPLORAR (75%)
            </button>
            <button
              type="button"
              className={`preset-btn ${spread > 0.9 ? "active" : ""}`}
              onClick={() => setSpread(1)}
            >
              MÁXIMO (100%)
            </button>
          </div>
        </div>
      </div>

      <div className="burger-visual-viewport">
        <div className="burger-stack">
          {layers.map((layer, i) => {
            const currentY = layer.closed + (layer.open - layer.closed) * spread;
            const currentX = layer.x * spread;
            const currentRot = layer.rotation * spread;
            const currentScale = 1 + (layer.scale - 1) * spread;

            return (
              <div
                key={layer.id}
                className={`burger-layer layer-${layer.id}`}
                style={{
                  transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRot}deg) scale(${currentScale})`,
                  zIndex: 12 - i,
                }}
              >
                <div className="layer-img-wrap">
                  <Image
                    src={layer.src}
                    alt={layer.name}
                    width={480}
                    height={260}
                    className="layer-img"
                    priority={i < 3}
                  />
                </div>

                <div
                  className={`layer-label-card label-${layer.side}`}
                  style={{
                    opacity: spread > 0.2 ? Math.min(1, (spread - 0.2) * 3) : 0,
                    pointerEvents: spread > 0.3 ? "auto" : "none",
                  }}
                >
                  <span className="layer-num">{layer.num}</span>
                  <div className="layer-info">
                    <strong>{layer.name}</strong>
                    <span>{layer.detail}</span>
                  </div>
                  <span className="layer-pin" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="burger-stage-caption">
        <span className="eyebrow">INTERAÇÃO / 9 CAMADAS</span>
        <p>Arraste o slider para separar cada ingrediente e descobrir a receita do burger Rachando o Bico.</p>
      </div>
    </div>
  );
}
