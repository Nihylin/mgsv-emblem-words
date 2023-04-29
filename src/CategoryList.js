import React from "react";
import { Link } from "react-router-dom";
import data from "./list.json";
import "./CategoryList.css";

const CategoryList = () => {
  const wordsByCategoryAndDescription = data.words.reduce((acc, word) => {
    const category = word.category;
    const description = word.description;
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][description]) {
      acc[category][description] = [];
    }
    acc[category][description].push(word.word);
    return acc;
  }, {});

  const categoriesInOrder = [
    "default",
    "special",
    "mission",
    "key dispatch",
    "side op",
    "africa",
    "afghanistan",
  ];

  return (
    <main className="categoryList">
      <nav className="link">
        <Link to="/">Switch back to alphabetical list</Link>
      </nav>

      <ul className="liste">
        {categoriesInOrder.map((category) => {
          const descriptions = wordsByCategoryAndDescription[category];
          const sortedDescriptions = Object.keys(descriptions).sort((a, b) =>
            a.localeCompare(b, undefined, {
              numeric: true,
              sensitivity: "base",
            })
          );

          return (
            <li key={category} className="category">
              <input type="checkbox" id={`check${category}`} />
              <label className="tab-label" htmlFor={`check${category}`}>
                {category}
              </label>
              <div className="tab-content">
                {sortedDescriptions.map((description) => (
                  <div key={description}>
                    <p className="description">{description} :</p>
                    <ul className="words">
                      {descriptions[description].map((word) => (
                        <li key={word} className="word">
                          {word}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CategoryList;
