import { useEffect, useState } from "react";

const HelloText = ({ helloTextStatus }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [intervals, setIntervals] = useState(1500);
  const words = [
    {
      text: "Hello!",
      font: "font-Kanit text-4xl animate-slideDown transition-opacity duration-300 ease-in-out",
    },
    {
      text: "নমস্কার",
      font: "text-4xl font-Bengali animate-slideDown transition-opacity duration-150 ease-in-out",
    },
    {
      text: "नमस्ते",
      font: "text-4xl font-Hindi animate-slideDown transition-opacity duration-150 ease-in-out",
    },
    {
      text: "வணக்கம்",
      font: "text-4xl font-Tamil animate-slideDown transition-opacity duration-150 ease-in-out",
    },
    {
      text: "مرحبا",
      font: "text-5xl font-Urdu animate-slideDown transition-opacity duration-150 ease-in-out",
    },
    {
      text: "こんにちは",
      font: "text-4xl font-Japanese animate-slideDown transition-opacity duration-150 ease-in-out",
    },
    {
      text: "Bonjour!",
      font: "text-3xl font-French animate-slideDown transition-opacity duration-150 ease-in-out",
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWord((i) => (currentWord < words.length ? i + 1 : 0));
      if (currentWord == 0) {
        setIntervals(() => 170);
      }

      //update the state variable once all the words are done displaying
      currentWord === words.length - 1 && helloTextStatus();
    }, intervals);
    //console.log(intervals);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center text-white">
      <span
        className={`${
          currentWord < words.length
            ? words[currentWord].font
            : words[words.length - 1].font
        }`}
      >
        {currentWord < words.length
          ? words[currentWord].text
          : words[words.length - 1].text}
      </span>
    </div>
  );
};

export default HelloText;
