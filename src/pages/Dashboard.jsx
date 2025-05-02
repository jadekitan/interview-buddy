import {
  HStack,
  VStack,
  Heading,
  RadioCard,
  Icon,
  Box,
  Avatar,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Overview from "./Overview";
import Session from "./Session";
import { TbDashboard } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoDocumentText } from "react-icons/io5";
import Resources from "@/pages/Resources";
import { IoIosNotificationsOutline } from "react-icons/io";

const mainMenu = [
  {
    value: "dashboard",
    title: "Dashboard",
    icon: <TbDashboard />,
  },
  {
    value: "session",
    title: "Sessions",
    icon: <IoDocumentText />,
  },
  {
    value: "resources",
    title: "Resources",
    icon: <IoDocumentText />,
  },
  {
    value: "progress",
    title: "Progress",
    icon: <GiProgression />,
  },
  {
    value: "Practice",
    title: "Practice",
    icon: <LiaChalkboardTeacherSolid />,
  },
];

const Dashboard = () => {
  const [value, setValue] = useState("dashboard");

  const renderContent = () => {
    switch (value) {
      case "dashboard":
        return <Overview />;
      case "session":
        return <Session />;
      case "resources":
        return <Resources />;
      default:
        return <Overview />;
    }
  };

  const renderMenuSection = () => (
    <VStack w="100%" align="flex-start" gap="20px">
      {mainMenu.map((item) => (
        <RadioCard.Item
          key={item.value}
          w="100%"
          h="48px"
          rounded="16px"
          bg={value === item.value ? "#4F46E5" : "transparent"}
          borderWidth="0"
          value={item.value}
        >
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemControl py="12px" px="16px">
            <Icon
              w="20px"
              h="20px"
              color={value === item.value ? "white" : "black"}
            >
              {item.icon}
            </Icon>
            <RadioCard.ItemText
              color={value === item.value ? "white" : "black"}
              fontSize="16px"
              fontWeight="400"
              ml="2px"
            >
              {item.title}
            </RadioCard.ItemText>
          </RadioCard.ItemControl>
        </RadioCard.Item>
      ))}
    </VStack>
  );

  return (
    <HStack bg="#F6F7F9" w="100%" h="100%" align="flex-start">
      <VStack
        bg="white"
        w="25%"
        h="100vh"
        maxH="120vh"
        justify="start"
        align="center"
        py="25px"
        gap="50px"
      >
        <Heading color="#003F88" fontSize="20px" fontWeight="800">
          AI Interview Buddy
        </Heading>
        <VStack w="100%" align="flex-start" px="25px">
          <RadioCard.Root
            value={value}
            onValueChange={(e) => setValue(e.value)}
            w="100%"
            orientation="horizontal"
            align="start"
            justify="start"
            maxW="lg"
            defaultValue="dashboard"
          >
            {renderMenuSection()}
          </RadioCard.Root>
        </VStack>
      </VStack>
      <Box w="75%" h="100%" px="20px">
        <VStack w="100%" align="flex-start" gap="20px" pb="20px">
          <HStack
            bg="white"
            w="100%"
            justify="space-between"
            py="25px"
            px="20px"
            roundedBottom="8px"
          >
            <VStack align="flex-start">
              <Heading color="black">Hi, Moyo 👋</Heading>
              <Text color="black">Ready for today's mock interview?</Text>
            </VStack>
            <HStack align="center" gap="20px">
              <VStack
                w="48px"
                h="48px"
                justify="center"
                bg="#E2EFFF"
                rounded="24px"
              >
                <Icon w="24px" h="24px" color="black">
                  <IoIosNotificationsOutline />
                </Icon>
              </VStack>
              <HStack>
                <Avatar.Root shape="full" size="lg">
                  <Avatar.Fallback name="Random User" />
                  <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
                </Avatar.Root>
                <VStack align="flex-start" gap="-1">
                  <Text color="black" fontSize="14px" fontWeight="400">
                    Moyo Oginni
                  </Text>
                  <Text color="black" fontSize="12px" fontWeight="300">
                    0 credit
                  </Text>
                </VStack>
              </HStack>
            </HStack>
          </HStack>
          {renderContent()}
        </VStack>
      </Box>
    </HStack>
  );
};

export default Dashboard;
