import React from "react";
import { storiesOf } from "@storybook/react";
import Calendar from "./index";
import Row from "../Grid/Row";

storiesOf("Calendar", module)
  .addParameters({
    component: Calendar,
  })
  .add("default", () => (
    <Row xl={6}>
      <Calendar label="تقویم" moreInfo="تاریخ را انتخاب کنید" />
    </Row>
  ));
