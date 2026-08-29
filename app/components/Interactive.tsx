"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { assets } from "../../src/assets";

export function ImageCompare() {
  const [position, setPosition] = useState(50);
  return (
    <figure className="image-compare" style={{ "--reveal": `${position}%` } as CSSProperties}>
      <img className="image-compare__after" src={assets.home_imgGeminiGeneratedImageVg7Pmnvg7Pmnvg7P1} alt="The dry bed of Lake Poopó" />
      <img className="image-compare__before" src={assets.home_imgGeminiGeneratedImage9J2Nmo9J2Nmo9J2N11} alt="Lake Poopó when it held water" />
      <div className="image-compare__line" aria-hidden="true"><span>↔</span></div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Compare Lake Poopó before and after it dried"
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <figcaption>Drag to compare the living lake with the dry lakebed.</figcaption>
    </figure>
  );
}

const partnerCards = [
  { eyebrow: "Environmental rights · Oruro", title: "Fundación Pueblos de Montaña", detail: "Advocates for environmental rights and the protection of mountain communities, working closely with Indigenous peoples affected by environmental change." },
  { eyebrow: "Based in Oruro, Bolivia", title: "CEPA", detail: "Centro de Ecología y Pueblos Andinos supports environmental justice and works to protect the Uru people from discrimination." },
  { eyebrow: "Climate × creativity", title: "Earth Alliance", detail: "Connects diverse networks of people and organizations responding to the climate crisis through culture and public engagement." },
  { eyebrow: "Global conservation", title: "Re:wild", detail: "Works with more than 500 partners in over 80 countries to protect and restore biodiversity." },
  { eyebrow: "Schmidt Family Foundation", title: "The 11th Hour Project", detail: "Supports community-based environmental solutions across the Americas." },
  { eyebrow: "Public engagement · 2025", title: "Photography Contest", detail: "“We Are All People of the Same Lake” invited internationally exhibited submissions on water, memory, and belonging." },
];

export function PartnerGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="partner-grid">
      {partnerCards.map((partner, index) => {
        const isOpen = openIndex === index;
        return (
          <article className="partner-card" key={partner.title} data-open={isOpen}>
            <p>{partner.eyebrow}</p>
            <h3>{partner.title}</h3>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
              {isOpen ? "Close" : "Read more"} <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <div className="partner-card__detail"><p>{partner.detail}</p></div> : null}
          </article>
        );
      })}
    </div>
  );
}

const gallery = [
  { src: assets.resources_imgDsc030861, caption: "Fieldwork on the dry lakebed" },
  { src: assets.resources_imgRectangle166, caption: "Qotzuñi community archive" },
  { src: assets.resources_imgDsc037601, caption: "Portrait from Lake Poopó" },
  { src: assets.resources_imgDsc037892, caption: "Life after the lake" },
  { src: assets.resources_imgDsc032701, caption: "The Altiplano landscape" },
];

export function ResourceGallery() {
  const [index, setIndex] = useState(1);
  const previous = () => setIndex((current) => (current - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((current) => (current + 1) % gallery.length);
  return (
    <div className="gallery">
      <button type="button" onClick={previous} aria-label="Previous photograph">←</button>
      <figure>
        <img src={gallery[index].src} alt={gallery[index].caption} />
        <figcaption aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} · {gallery[index].caption}</figcaption>
      </figure>
      <button type="button" onClick={next} aria-label="Next photograph">→</button>
      <div className="gallery__thumbs" aria-label="Choose a photograph">
        {gallery.map((image, imageIndex) => (
          <button key={image.src} type="button" aria-label={`Show photograph ${imageIndex + 1}`} aria-current={index === imageIndex} onClick={() => setIndex(imageIndex)}>
            <img src={image.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
