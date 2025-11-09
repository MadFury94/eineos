"use client";

import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function Typewriter({
  text = [
    "Beautiful components for React",
    "Built with shadcn/ui",
    "Ship faster than ever!",
  ],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "text-4xl font-bold",
  textColors = ["text-green-600", "000", "text-green-600"],
  variableSpeed = { min: 50, max: 120 },
}) {
  return (
    <TypingText
      text={text}
      typingSpeed={typingSpeed}
      pauseDuration={pauseDuration}
      showCursor={showCursor}
      cursorCharacter={cursorCharacter}
      className={className}
      textColors={textColors}
      variableSpeed={variableSpeed}
    />
  );
}
