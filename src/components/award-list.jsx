import React, { useState } from "react";
import { Input, Button, Tag, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import './award-list.css'

const AwardsList = () => {
  const [awardInput, setAwardInput] = useState("");
  const [awards, setAwards] = useState([]);

  const addAward = () => {
    const trimmed = awardInput.trim();
    if (!trimmed) return;

    if (awards.includes(trimmed)) {
      message.warning("This award or achievement is already added!");
      return;
    }

    setAwards([...awards, trimmed]);
    setAwardInput("");
  };

  const removeAward = (index) => {
    const updated = awards.filter((_, i) => i !== index);
    setAwards(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAward();
    }
  };

  return (
    <div className="awards-section">
      <Input
        placeholder="Type an award or achievement"
        value={awardInput}
        onChange={(e) => setAwardInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        type="primary"
        onClick={addAward}
        disabled={!awardInput.trim()}
        className="add-award-btn"
      >
        Add
      </Button>

      {awards.length > 0 && (
        <div className="awards-list">
          {awards.map((award, index) => (
            <Tag
              key={index}
              closable
              onClose={() => removeAward(index)}
              closeIcon={<CloseOutlined />}
              className="award-tag"
            >
              {award}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default AwardsList;
