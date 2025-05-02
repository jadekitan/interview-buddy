import {
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Dialog,
  Portal,
  Button,
  RadioCard,
  Slider,
  Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuArrowRight, LuCircleOff, LuLock } from "react-icons/lu";

const marks = [
  { value: 0, label: "5" },
  { value: 25, label: "10" },
  { value: 50, label: "15" },
  { value: 100, label: "Custom" },
];

const items = [
  {
    icon: <LuArrowRight />,
    value: "text",
    title: "Text Interview",
    description: "Type your answer",
  },
  {
    icon: <LuCircleOff />,
    value: "voice",
    title: "Voice Interview",
    description: "Talk to AI with your mouth",
  },
];

const levels = [
  { value: "beginner", title: "Beginner", bg: "#1BBF151F", color: "#1BBF15" },
  {
    value: "intermediate",
    title: "Intermediate",
    bg: "#EEEA7194",
    color: "#C07A12",
  },
  { value: "advance", title: "Advance", bg: "#EE717194", color: "#C01212" },
];

const CustomizedModal = () => {
  const [mode, setMode] = useState("text");
  const [level, setLevel] = useState("");
  const [questions, setQuestions] = useState([25]);
  return (
    <VStack w="100%" justify="center" align="center" gap="50px">
      <VStack bg="white" w="60%" p="40px" gap="50px" rounded="8px">
        <VStack>
          <Heading
            color="black"
            fontSize="26px"
            fontWeight="500"
            lineHeight="30px"
          >
            Customize Your Practice Session
          </Heading>
          <Text color="black" fontSize="16px" fontWeight="300">
            Configure your interview settings for the best practice experience
          </Text>
        </VStack>
        <VStack w="100%" align="flex-start" gap="40px">
          <RadioCard.Root
            defaultValue="text"
            onValueChange={(e) => setMode(e.value)}
          >
            <RadioCard.Label color="black" fontSize="16px" fontWeight="500">
              Practice Mode
            </RadioCard.Label>
            <HStack align="stretch">
              {items.map((item) => (
                <RadioCard.Item
                  key={item.value}
                  value={item.value}
                  width="234px"
                  bg={mode === item.value ? "#4F46E536" : "#0000000D"}
                  borderWidth="1px"
                  borderColor={mode === item.value ? "#4F46E5" : "black"}
                >
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl>
                    <RadioCard.ItemContent>
                      <Icon fontSize="sm" color="fg.muted" mb="2">
                        {item.icon}
                      </Icon>
                      <RadioCard.ItemText color="black" fontSize="14px">
                        {item.title}
                      </RadioCard.ItemText>
                      <RadioCard.ItemDescription color="black" fontSize="12px">
                        {item.description}
                      </RadioCard.ItemDescription>
                    </RadioCard.ItemContent>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </HStack>
          </RadioCard.Root>
          <RadioCard.Root
            defaultValue=""
            gap="4"
            maxW="sm"
            size="sm"
            onValueChange={(e) => setLevel(e.value)}
          >
            <RadioCard.Label color="black" fontSize="16px" fontWeight="500">
              Difficulty Level
            </RadioCard.Label>
            <HStack align="stretch" gap="20px">
              {levels.map((item) => (
                <RadioCard.Item
                  key={item.value}
                  value={item.value}
                  width="full"
                  rounded="49px"
                  px="10px"
                  align="center"
                  justify="center"
                  bg={item.bg}
                  borderWidth="0"
                  colorPalette={item.color}
                >
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl align="center" p="5px">
                    <RadioCard.ItemIndicator />
                    <RadioCard.ItemContent>
                      <RadioCard.ItemText
                        color={item.color}
                        fontSize="16px"
                        fontWeight="500"
                      >
                        {item.title}
                      </RadioCard.ItemText>
                    </RadioCard.ItemContent>
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </HStack>
          </RadioCard.Root>
          <Slider.Root
            width="400px"
            defaultValue={[25]}
            size="lg"
            variant="solid"
            value={questions}
            onValueChange={(e) => setQuestions(e.value)}
          >
            <Slider.Label color="black" fontSize="16px" fontWeight="500">
              Number of Questions
            </Slider.Label>
            <Slider.Control>
              <Slider.Track bg="#D9D9D9">
                <Slider.Range bg="#4F46E5" />
              </Slider.Track>
              <Slider.Thumbs index={0} bg="#4F46E5">
                <Slider.DraggingIndicator
                  layerStyle="fill.solid"
                  top="6"
                  rounded="sm"
                  px="1.5"
                >
                  <Slider.ValueText />
                </Slider.DraggingIndicator>
              </Slider.Thumbs>
              <Slider.Marks marks={marks} />
            </Slider.Control>
          </Slider.Root>
          <VStack align="flex-start">
            <Text color="black" fontSize="16px" fontWeight="500">
              Time Limit Per Question
            </Text>
            <Switch.Root colorPalette="purple">
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label color="black" fontSize="16px" fontWeight="300">
                Practice without time limit
              </Switch.Label>
            </Switch.Root>
          </VStack>
          <Button
            w="100%"
            h="48px"
            bg="#4F46E5"
            color="white"
            fontSize="20px"
            fontWeight="500"
            onClick={() => {}}
          >
            <Icon w="25px" h="25px">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6562 22.2813C10.3993 22.2813 10.1529 22.1792 9.97124 21.9975C9.78956 21.8158 9.6875 21.5694 9.6875 21.3125V9.6875C9.68759 9.52244 9.72985 9.36013 9.81028 9.21598C9.89071 9.07184 10.0066 8.95064 10.1471 8.86388C10.2875 8.77712 10.4478 8.72768 10.6127 8.72025C10.7776 8.71282 10.9416 8.74765 11.0893 8.82144L22.7143 14.6339C22.875 14.7145 23.0101 14.8381 23.1045 14.9911C23.199 15.144 23.249 15.3203 23.249 15.5C23.249 15.6798 23.199 15.856 23.1045 16.0089C23.0101 16.1619 22.875 16.2855 22.7143 16.3661L11.0893 22.1786C10.9549 22.2459 10.8066 22.2811 10.6562 22.2813ZM11.625 11.2549V19.7451L20.1151 15.5L11.625 11.2549Z"
                  fill="white"
                />
                <path
                  d="M15.5 3.875C17.7992 3.875 20.0468 4.55679 21.9585 5.83417C23.8702 7.11154 25.3602 8.92711 26.2401 11.0513C27.12 13.1755 27.3502 15.5129 26.9016 17.7679C26.4531 20.023 25.3459 22.0943 23.7201 23.7201C22.0943 25.3459 20.023 26.4531 17.7679 26.9016C15.5129 27.3502 13.1755 27.12 11.0513 26.2401C8.92712 25.3602 7.11154 23.8702 5.83417 21.9585C4.5568 20.0468 3.87501 17.7992 3.87501 15.5C3.87501 12.4169 5.09978 9.45999 7.27989 7.27988C9.46 5.09977 12.4169 3.875 15.5 3.875ZM15.5 1.9375C12.8176 1.9375 10.1954 2.73293 7.96508 4.22319C5.73474 5.71346 3.9964 7.83163 2.96989 10.3099C1.94338 12.7881 1.67479 15.515 2.19811 18.1459C2.72142 20.7768 4.01312 23.1934 5.90987 25.0901C7.80662 26.9869 10.2232 28.2786 12.8541 28.8019C15.485 29.3252 18.2119 29.0566 20.6902 28.0301C23.1684 27.0036 25.2865 25.2653 26.7768 23.0349C28.2671 20.8046 29.0625 18.1824 29.0625 15.5C29.0625 11.903 27.6336 8.45333 25.0901 5.90986C22.5467 3.3664 19.097 1.9375 15.5 1.9375Z"
                  fill="white"
                />
              </svg>
            </Icon>
            Start Interview
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default CustomizedModal;
