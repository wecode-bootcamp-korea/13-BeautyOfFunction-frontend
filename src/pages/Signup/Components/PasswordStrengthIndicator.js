import React from "react";
import styled from "styled-components";

const PwRequirements = styled.div`
  width: 440px;
  height: 180px;
  background-color: #fafafa;
  border-radius: 4px;
  margin-top: 60px;
  padding: 20px;
`;
const AccountTitle = styled.h4`
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 1px;
  color: #4c5150;
  text-align: left;
  font-weight: 500;
`;
const PwConditions = styled.ul`
  color: #878e8d;
  display: block;
  padding: 10px 0 10px 30px;
`;
const ConditionList = styled.li`
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.5px;
`;

const PasswordStrengthIndicator = ({
  // eslint-disable-next-line prettier/prettier
  validity: {minChar, number, specialChar},
}) => {
  return (
    <PwRequirements>
      <AccountTitle>Password strength requirements</AccountTitle>
      <PwConditions>
        <PasswordStrengthIndicatorItem
          isValid={minChar}
          text="At least 8 characters"
        />
        <PasswordStrengthIndicatorItem
          isValid={number}
          text="At least 1 number ( 0-9 )"
        />
        <PasswordStrengthIndicatorItem
          isValid={specialChar}
          text=" At least 1 special character (e.g. !, @, #, $, %, -, &,*)"
        />
      </PwConditions>
    </PwRequirements>
  );
};

// eslint-disable-next-line prettier/prettier
const PasswordStrengthIndicatorItem = ({isValid, text}) => {
  const highlightClass = isValid ? "red;" : isValid !== null ? "green;" : "";

  return <ConditionList className={highlightClass}>{text}</ConditionList>;
};

export default PasswordStrengthIndicator;
