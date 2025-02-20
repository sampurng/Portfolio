import React, { useState } from "react";

export const MONTHS = {
  JANUARY: 0,
  FEBUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
};

export const YEARS = {
  2025: 8,
  2024: 7,
  2023: 6,
  2022: 5,
  2021: 4,
  2020: 3,
  2019: 2,
  2018: 1,
  2017: 0,
};

export const GROUPS = {
  HIGH_SCHOOL: {
    startYear: 2017,
    startMonth: 1,
    endMonth: 6,
    endYear: 2017,
  },
  MANIPAL: {
    startYear: 2017,
    startMonth: 7,
    endMonth: 2,
    endYear: 2021,
  },
  HONEYWELL: {
    startYear: 2021,
    startMonth: 2,
    endYear: 2021,
    endMonth: 7,
  },
  ADOBE: {
    startYear: 2021,
    startMonth: 7,
    endYear: 2023,
    endMonth: 5,
  },
  SILQ: {
    startYear: 2023,
    startMonth: 5,
    endYear: 2023,
    endMonth: 8,
  },
  NORTHEASTERN_ACADEMICS: {
    startYear: 2023,
    startMonth: 9,
    endYear: 2024,
    endMonth: 6,
  },
  NOMAD_AI: {
    startYear: 2024,
    startMonth: 7,
    endYear: 2024,
    endMonth: 9,
  },
  NORTEHASTERN_GRA: {
    startYear: 2024,
    startMonth: 10,
    endYear: 2025,
    endMonth: 4,
  },
};

export const Blocks = () => {
  const months = Object.keys(MONTHS);
  const years = Object.keys(YEARS).reverse();
  const [currentGroup, setCurrentGroup] = useState("");
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {years.map((year) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "full",
              justifyItems: "justify-between",
            }}
          >
            <div
              id={year}
              key={year}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                alignItems: "left",
                justifyContent: "center",
                marginRight: "10px",
                width: "full",
              }}
            >
              {months.map((month) => {
                return (
                  <Block
                    month={MONTHS[month]}
                    year={year}
                    setCurrentGroup={(group) => setCurrentGroup((_) => group)}
                    raised={currentGroup}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <img className="" src="../assets/neu.png" alt="i" />
    </div>
  );
};

const Block = ({ month, year, setCurrentGroup, raised }) => {
  let id = "";
  Object.keys(GROUPS).forEach((group) => {
    if (
      parseInt(year) > GROUPS[group].startYear &&
      parseInt(year) < GROUPS[group].endYear
    ) {
      id = group;
      return;
    } else {
      if (
        month >= GROUPS[group].startMonth - 1 &&
        parseInt(year) === GROUPS[group].startYear
      ) {
        id = group;
        return;
      }
      if (
        month <= GROUPS[group].endMonth - 1 &&
        parseInt(year) === GROUPS[group].endYear &&
        id.length === 0
      ) {
        id = group;
        return;
      }
    }
  });
  return (
    <div
      className={`shadow-xl cursor-pointer w-[70px] h-[70px] border-[#777777] border-[0.01px] ${
        raised === id
          ? "scale-[110%] shadow-2xl ease-in duration-100 border-[1.5px]"
          : ""
      } `}
      style={{
        margin: "5px",
        borderRadius: "4px",
      }}
      id={month}
      onMouseOver={() => {
        setCurrentGroup(id);
      }}
      onMouseLeave={() => setCurrentGroup(undefined)}
    >
      <img
        className="grayscale"
        src="../assets/northeastern.svg"
        alt="neu"
        width="70px"
        height="70px"
      />
    </div>
  );
};

export const BlockInfo = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100%",
          width: "4px",
          background: "black",
        }}
        className="divider"
      />
    </div>
  );
};
