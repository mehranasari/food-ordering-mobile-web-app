import React, { useState, useEffect, useMemo } from "react";
import {
  CalnedorMobileWrapper,
  CalenderWrapper,
  CalendarHeader,
  HeaderInformation,
  HeaderController,
  DayCell,
  Controller,
  Day,
  Weekname,
  WeekNameContainer,
  DayCellContainer,
  MonthCellContainer,
  MonthCell,
  Month,
  YearCellContainer,
  YearCell,
  Year,
  GoToDayButton,
} from "./style.js";
import jmoment from "moment-jalaali";
import moment from "moment";
import {
  monthsJalaali,
  daysJalaali,
  JalaiWeekDayConvertor,
} from "./jalaiiCalendarUtility";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import { withTheme } from "styled-components";

const CalenderView = ({
  selected,
  setShow,
  view,
  setView,
  setSelected,
  calendarViewHandler,
  selectMode,
  setSelectMode,
  goToday,
  calendarSelectHandler,
  theme,
}) => {
  let arrayOfDays = [];
  let yearsList = [];
  const [DaysOfMonth, setDaysOfMonth] = useState([]);

  let isKabise = (year, month) => {
    let kabise = jmoment(`${year}/${month}/${30}`, "jYYYY/jMM/jDD").isValid();
    return kabise;
  };
  let currentMonth = Number(view.month);
  let currentYear = Number(view.year);
  let previousYear = Number(currentYear) - 1;
  let monthLenght =
    currentMonth === 12 && isKabise(currentYear, currentMonth) === true
      ? 30
      : currentMonth === 12 && isKabise(currentYear, view.month) === false
      ? 29
      : jmoment.jDaysInMonth(currentYear, currentMonth - 1);
  let previousMonth = currentMonth - 1 > 0 ? currentMonth - 1 : 12;
  let beforeMonthLenght =
    currentMonth === 1 && isKabise(previousYear) === true
      ? 30
      : previousMonth === 12 && isKabise(previousYear) === false
      ? 29
      : jmoment.jDaysInMonth(
          currentYear,
          currentMonth - 2 > -1 ? currentMonth - 2 : 12
        );
  let startDayIso = jmoment(
    `${view.year}/${view.month}/01`,
    "jYYYY/jMM/jDD"
  ).format("YYYY-MM-DD");
  let endtDayIso = () => {
    if (view.month === 12) {
      let checkLeapYear = jmoment(
        `${view.year}/${view.month}/${30}`,
        "jYYYY/jMM/jDD"
      ).isValid();
      if (checkLeapYear === true) {
        return jmoment(
          `${view.year}/${view.month}/${30}`,
          "jYYYY/jMM/jDD"
        ).format("YYYY-MM-DD");
      } else {
        return jmoment(
          `${view.year}/${view.month}/${29}`,
          "jYYYY/jMM/jDD"
        ).format("YYYY-MM-DD");
      }
    } else {
      return jmoment(
        `${view.year}/${view.month}/${monthLenght}`,
        "jYYYY/jMM/jDD"
      ).format("YYYY-MM-DD");
    }
  };
  let startDay = Number(moment(new Date(startDayIso)).day());
  let previousDaysInMonth = JalaiWeekDayConvertor(startDay);
  let endDay = Number(moment(new Date(endtDayIso())).day());
  let nextDaysInMonth = JalaiWeekDayConvertor(endDay);
  let value = monthLenght + (6 - nextDaysInMonth) + previousDaysInMonth;
  useMemo(() => {
    for (let i = 1; i <= value; i++) {
      if (previousDaysInMonth < i && i <= monthLenght + previousDaysInMonth) {
        /* ---Current month each day model--- */
        let currentMonthDay = {
          id: `${previousDaysInMonth - i}${view.month}${view.year}`,
          day: i - previousDaysInMonth,
          month: view.month,
          year: view.year,
          disable: false,
          active:
            i - previousDaysInMonth === selected.day &&
            view.month === selected.month &&
            view.year === selected.year
              ? true
              : false,
        };

        arrayOfDays.push(currentMonthDay);
      } else if (previousDaysInMonth >= i) {
        let beforeDays = beforeMonthLenght - previousDaysInMonth + i;
        /* ---previous month each day model --- */
        let previousMonthDay = {
          id: `${beforeDays}${view.month - 1}${view.year}`,
          day: beforeDays,
          month: view.month - 1,
          year: view.year,
          disable: true,
          active: false,
        };
        arrayOfDays.push(previousMonthDay);
      } else {
        let afterDays = i - monthLenght - previousDaysInMonth;
        /* ---next month each day model--- */
        let nextMonthDay = {
          id: `${afterDays < 10 ? `0${afterDays}` : afterDays}${
            view.month + 1
          }${view.year}`,
          day: afterDays,
          month: view.month + 1,
          year: view.year,
          disable: true,
          active: false,
        };
        arrayOfDays.push(nextMonthDay);
      }
    }
  }, [view, selected]);
  for (let i = 1300; i <= 1450; i++) {
    yearsList.push({ value: i });
  }
  const handleSelectDay = (dayObj) => {
    setSelected({
      ...selected,
      day: dayObj.day,
      month: dayObj.month,
      year: dayObj.year,
    });
    setView({
      ...view,
      day: dayObj.day,
      month: dayObj.month,
      year: dayObj.year,
    });
    // let date = moment (`${selected.year}-${selected.month}-${Number(e.target.value)}` , "jYYYY,jMM,jDD").format ("YYYY-MM-DD")

    let date = jmoment(
      `${Number(dayObj.year)}-${Number(dayObj.month)}-${Number(dayObj.day)}`,
      "jYYYY,jMM,jDD"
    ).format("YYYY-MM-DD");
    calendarSelectHandler(date);

    calendarViewHandler(false);
  };
  useEffect(() => {
    setDaysOfMonth(arrayOfDays);
  }, [view, selected]);
  const handleBefore = () => {
    if (view.month === 1) {
      setView({
        ...view,
        year: view.year - 1,
        month: 12,
      });
    } else {
      setView({
        ...view,
        month: view.month - 1,
      });
    }
  };
  const handleAfter = () => {
    if (view.month === 12) {
      setView({
        ...view,
        month: 1,
        year: view.year + 1,
      });
    } else {
      setView({
        ...view,
        month: view.month + 1,
      });
    }
  };
  const ViewControlSwitcher = () => {
    switch (selectMode) {
      case "day":
        return (
          <>
            <WeekNameContainer>
              {daysJalaali.map((weekDay, i) => {
                return (
                  <Weekname theme={theme} key={i}>
                    {weekDay}
                  </Weekname>
                );
              })}
            </WeekNameContainer>
            <DayCellContainer>
              {DaysOfMonth.map((items, i) => {
                return (
                  <DayCell key={i}>
                    <Day
                      className={` ${items.active ? "selected" : ""}`}
                      active={items.disable}
                      onClick={() => {
                        handleSelectDay(items);
                      }}
                    >
                      {ConvertToPersianDigit(items.day)}
                    </Day>
                  </DayCell>
                );
              })}
            </DayCellContainer>
            <GoToDayButton onClick={goToday}>امروز</GoToDayButton>
          </>
        );
      case "month":
        return (
          <MonthCellContainer>
            {monthsJalaali.map((items, i) => {
              return (
                <MonthCell key={i}>
                  <Month
                    className={` ${i + 1 === view.month ? "selected" : ""}`}
                    onClick={() => {
                      setView({ ...view, month: i + 1 });
                      setSelected({ ...selected, month: i + 1 });
                      let date = jmoment(
                        `${selected.year}-${i + 1}-${selected.day}`,
                        "jYYYY,jMM,jDD"
                      ).format("YYYY-MM-DD");
                      calendarSelectHandler && calendarSelectHandler(date);
                      setSelectMode("day");
                    }}
                  >
                    {items}
                  </Month>
                </MonthCell>
              );
            })}
          </MonthCellContainer>
        );
      case "year":
        return (
          <YearCellContainer>
            {yearsList.map((items, i) => {
              return (
                <YearCell key={i}>
                  <Year
                    className={` ${
                      items.value === view.year ? "selected" : ""
                    }`}
                    onClick={() => {
                      setView({ ...view, year: items.value });
                      setSelected({ ...selected, year: items.value });
                      let date = jmoment(
                        `${items.value}-${selected.month}-${selected.day}`,
                        "jYYYY,jMM,jDD"
                      ).format("YYYY-MM-DD");
                      setSelectMode("month");

                      calendarSelectHandler && calendarSelectHandler(date);
                    }}
                  >
                    {ConvertToPersianDigit(items.value)}
                  </Year>
                </YearCell>
              );
            })}
          </YearCellContainer>
        );
      default:
        break;
    }
  };
  return (
    <CalnedorMobileWrapper
      // ref={ref}
      onClick={(e) => {
        e.preventDefault();
        e.target === e.currentTarget && setShow(false);
      }}
    >
      <CalenderWrapper>
        <CalendarHeader>
          <HeaderController>
            <Controller onClick={handleAfter}>{`<`}</Controller>
            <Controller
              className="event previous"
              onClick={handleBefore}
            >{`>`}</Controller>
          </HeaderController>
          <HeaderInformation>
            <div
              onClick={() => {
                setSelectMode((selectMode) =>
                  selectMode === "year" ? "day" : "year"
                );
              }}
            >
              {ConvertToPersianDigit(view.year)}
            </div>
            <div
              onClick={() => {
                setSelectMode((selectMode) =>
                  selectMode === "month" ? "day" : "month"
                );
              }}
            >
              {monthsJalaali[view.month - 1]}
            </div>
          </HeaderInformation>
        </CalendarHeader>

        {ViewControlSwitcher()}
      </CalenderWrapper>
    </CalnedorMobileWrapper>
  );
};

export default withTheme(CalenderView);
