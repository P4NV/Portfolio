import { useState } from "react";
import "./cardButtons.css";

export default function ExpandableCard({
  title,
  preview,
  children,
}) {
  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showExpandedContent, setShowExpandedContent] = useState(false);

  function openCard() {
    if (animating || expanded) return;

    setAnimating(true);
    setExpanded(true);
  }

  function closeCard() {
    if (animating || !expanded) return;

    setAnimating(true);
    setShowExpandedContent(false);
    setExpanded(false);
  }

  function handleAnimationEnd() {
    setAnimating(false);

    // Only show content AFTER expand animation finishes
    if (expanded) {
      setShowExpandedContent(true);
    }
  }

  return (
    <div
      className={`card-button ${
        expanded
          ? "expanded-card-button"
          : animating
          ? "collapsing-card-button"
          : ""
      }`}
      onClick={!expanded ? openCard : undefined}
      onAnimationEnd={handleAnimationEnd}
    >
      <h1>{title}</h1>

      <hr className="bg-[#a6b6cf] w-2/3 h-2 rounded-4xl shadow-md shadow-[#8993a3]" />

      {!showExpandedContent && (
        <p>{preview}</p>
      )}

      {showExpandedContent && (
        <div
          className="expanded-content fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-button"
            onClick={closeCard}
          >
            ✕ Close
          </button>

          {children}
        </div>
      )}
    </div>
  );
}
