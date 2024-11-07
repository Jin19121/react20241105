import React from "react";
import { HStack, Icon, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";
import { FaApplePay, FaMoon, FaSun } from "react-icons/fa";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../components/ui/radio-card.jsx";
import { SiNaver, SiSamsungpay } from "react-icons/si";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>radio card</h5>
      <RadioCardRoot>
        <RadioCardLabel>결제 수단</RadioCardLabel>
        <HStack>
          <RadioCardItem
            indicator={false}
            value={1}
            label="Apple Pay"
            icon={
              <Icon fontSize="2xl">
                <FaApplePay />
              </Icon>
            }
          />
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <SiSamsungpay />
              </Icon>
            }
            indicator={false}
            value={2}
            label="Samsung Pay"
          />
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <SiNaver />
              </Icon>
            }
            indicator={false}
            value={3}
            label="Naver Pay"
          />
        </HStack>
      </RadioCardRoot>
      <hr />
      <h5>switch</h5>
      <Switch colorPalette="pink">in love</Switch> <br />
      <Switch variant={"raised"} colorPalette={"green"}>
        alive
      </Switch>
      <br />
      <Switch
        colorPalette="blue"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="orange.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="yellow.400">
              <FaMoon />
            </Icon>
          ),
        }}
      >
        Time
      </Switch>
      <hr />
      <h5>Radio Button</h5>
      <RadioGroup>
        <Radio value={1}> option1</Radio> <br />
        <Radio value={2}> option2</Radio> <br />
        <Radio value={3}> option3</Radio>
      </RadioGroup>
      <hr />
      <h5>checkbox</h5>
      <Checkbox icon={<HiOutlinePlus />}>different?</Checkbox>
      <br />
      <Checkbox variant={"outline"} checked>
        chosen
      </Checkbox>
      <br />
      <Checkbox variant={"solid"}>chosen</Checkbox>
      <br />
      <Checkbox variant={"subtle"}>chosen</Checkbox>
      <hr />
      <input type="checkbox" id={"check1"} /> 선택지
      <Textarea placeholder={"자기소개 1000자 제한"}></Textarea>
      <hr />
      <Field label={"Email"} required helperText={"유요한 이메일 입력"}>
        <Input />
      </Field>
      <Input variant={"subtle"} placeholder={"email"} />
      <Input variant={"outline"} placeholder={"address"} />
      <Input variant={"flushed"} placeholder={"name"} />
      <hr />
      <input type="text" placeholder={"****@email.com"} />
    </div>
  );
}

export default MyApp28;
