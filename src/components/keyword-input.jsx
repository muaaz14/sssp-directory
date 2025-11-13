import React, { useState } from "react";
import { Input, Button, Tag, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import './keyword-input.css';

const KeywordInput = () => {
  const [keywordInput, setKeywordInput] = useState("");
  const [keywords, setKeywords] = useState([]);

  const addKeyword = () => {
    const trimmed = keywordInput.trim();
    if (!trimmed) return;

    if (keywords.includes(trimmed)) {
      message.warning("Keyword already added!");
      return;
    }

    if (keywords.length >= 5) {
      message.warning("You can only add up to 5 keywords.");
      return;
    }

    setKeywords([...keywords, trimmed]);
    setKeywordInput("");
  };

  const removeKeyword = (index) => {
    const updated = keywords.filter((_, i) => i !== index);
    setKeywords(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addKeyword();
    }
  };

  return (
    <div className="keyword-section">
      <div className="keyword-input-row">
        <Input
          placeholder="Type a keyword and press Enter"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={keywords.length >= 5}
        />
        <Button className="add-btn" onClick={addKeyword} disabled={!keywordInput.trim() || keywords.length >= 5}>
          Add
        </Button>
      </div>

      {keywords.length > 0 && (
        <div className="keyword-list">
          {keywords.map((keyword, index) => (
            <Tag
              key={index}
              color="gold"
              closable
              onClose={() => removeKeyword(index)}
              closeIcon={<CloseOutlined />}
              className="keyword-tag"
            >
              {keyword}
            </Tag>
          ))}
        </div>
      )}

      <p className="keyword-info">
        {keywords.length}/5 keywords added (minimum 3 required)
      </p>
    </div>
  );
};

export default KeywordInput;
