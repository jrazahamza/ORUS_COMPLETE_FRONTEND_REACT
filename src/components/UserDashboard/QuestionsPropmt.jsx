import React, { useState } from 'react';
import Solo from '../../Images/winter.png';
import SoloHover from '../../Images/Festavil.png'; 
import Couple from '../../Images/Component 132 (1).png';
import CoupleHover from '../../Images/Property 1=Component 122.png'; 
import Family from '../../Images/Component 132 (1).png';
import FamilyHover from '../../Images/Family tarviller.png'; 
import Friends from '../../Images/advanturesite.png';
import FriendsHover from '../../Images/social traveler.png'; 
import jan from '../../Images/jan.png';
import feb from '../../Images/feb.png';
import mar from '../../Images/mar.png';
import aprl from '../../Images/apr.png';
import may from '../../Images/may.png';
import june from '../../Images/june.png';
import july from '../../Images/july.png';
import aug from '../../Images/aug.png';
import sept from '../../Images/sept.png';
import oct from '../../Images/oct.png';
import nov from '../../Images/nov.png';
import dec from '../../Images/dec.png';
import Winter from '../../Images/winter.png';
import Food from '../../Images/foodandent.png';
import Adventure from '../../Images/adventue.png';
import Sports  from '../../Images/sports.png';
import Summer from '../../Images/Summer.png';
import Night from '../../Images/night.png';
import Festival from '../../Images/Festavil.png'
import Luxary from '../../Images/Luxary.png'
import   AdventureSeeker from '../../Images/advanturesite.png';
import FamTraveller from '../../Images/Family tarviller.png'; 
import   Back from '../../Images/bag packer.png';
import    Itianary from '../../Images/itinary planner.png';
import   Traveller from '../../Images/social traveler.png';
import Wander  from '../../Images/creative.png';
import Culture from '../../Images/dulture.png';

const QuestionRecommendation = () => {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredOption, setHoveredOption] = useState(null); 

  const questions = [
    {
      id: 1,
      question: 'Will you be traveling with a companion?',
      options: [
        { label: 'Solo', img: Solo, hoverImg: SoloHover },
        { label: 'Couple', img: Couple, hoverImg: CoupleHover },
        { label: 'Family', img: Family, hoverImg: FamilyHover },
        { label: 'Friends', img: Friends, hoverImg: FriendsHover },
      ],
    },
   {
      id: 2,
      question: 'Your preferred travel month',
      options: [
        { label: 'January', img: jan },
        { label: 'February', img: feb  },
        { label: 'March', img: mar },
        { label: 'April', img: aprl },
        { label: 'May', img: may },
        { label: 'June', img: june },
        { label: 'July', img: july },
        { label: 'August', img: aug },
        { label: 'September', img: sept },
        { label: 'October', img: oct },
        { label: 'November', img: nov },
        { label: 'December', img: dec },
      ],
    },
    {
      id: 3,
      question: 'Select the activities you’d like to include.',
      options: [
        { label: 'Winter Activities', img:Winter  },
        { label: 'Food & Entertainment', img: Food },
        { label: 'Adventure', img:  Adventure},
        { label: 'Sports', img: Sports  },
        { label: 'Summer Activities', img: Summer },
        { label: 'Nightlife', img: Night },
        { label: 'Festivals', img:Festival },
      ],
    },
    {
      id: 5,
      question: 'How would describe your personality?',
      options: [
        { label: 'Luxary Traveller', img: Luxary },
        { label: 'Adventure Seeker', img: AdventureSeeker  },
        { label: 'Family Traveller', img: FamTraveller },
        { label: 'BacPacker', img: Back },
        { label: 'itinary partner', img: Itianary },
        { label: 'social Traveller', img: Traveller },
        { label: 'Creative Wander', img: Wander },
        { label: 'Culture Explorer', img: Culture },
      ],
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Travel Recommendation Quiz
      </h1>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-700">
          {questions[currentIndex].question}
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {questions[currentIndex].options.map((option) => (
            <label
              key={option.label}
              className={`flex flex-col items-center gap-2 cursor-pointer p-4 rounded-lg border ${
                answers[questions[currentIndex].id] === option.label
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onMouseEnter={() => setHoveredOption(option.label)} 
              onMouseLeave={() => setHoveredOption(null)} 
            >
              <input
                type="radio"
                name={`question-${questions[currentIndex].id}`}
                value={option.label}
                checked={answers[questions[currentIndex].id] === option.label}
                onChange={() =>
                  handleAnswer(questions[currentIndex].id, option.label)
                }
                className="hidden"
              />
              <img
                src={
                  hoveredOption === option.label
                    ? option.hoverImg
                    : option.img
                }
                alt={option.label}
                className="w-16 h-16"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionRecommendation;
