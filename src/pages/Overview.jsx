import {
  VStack,
  Heading,
  Text,
  HStack,
  Avatar,
  Icon,
  Stat,
} from "@chakra-ui/react";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const stats = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1002_18)">
          <path
            d="M10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9998 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 9.99999C17.5 9.01508 17.306 8.03981 16.9291 7.12987C16.5522 6.21993 15.9998 5.39313 15.3033 4.69669C14.6069 4.00025 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.49999 10 2.49999C8.01089 2.49999 6.10323 3.29017 4.69671 4.69669C3.29019 6.10322 2.50001 8.01087 2.50001 9.99999C2.50001 11.9891 3.29019 13.8968 4.69671 15.3033C6.10323 16.7098 8.01089 17.5 10 17.5ZM19.1667 9.99999C19.1667 15.0625 15.0625 19.1667 10 19.1667C4.93751 19.1667 0.833344 15.0625 0.833344 9.99999C0.833344 4.93749 4.93751 0.833328 10 0.833328C15.0625 0.833328 19.1667 4.93749 19.1667 9.99999ZM12.5 13.6783L9.16668 10.345V4.58333H10.8333V9.65499L13.6783 12.5L12.5 13.6783Z"
            fill="#1564BF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1002_18">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    iconBg: "#E2EFFF",
    valueText: "24",
    label: "Interview Completed",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33333 1.66667V16.6667H5.83333V7.5H10V16.6667H12.5V4.16667H16.6667V16.6667H18.3333V18.3333H1.66667V1.66667H3.33333Z"
          fill="#1BBF15"
        />
      </svg>
    ),
    iconBg: "#1BBF151F",
    valueText: "85%",
    label: "Improvement Score",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1004_58)">
          <path
            d="M10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9998 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 9.99999C17.5 9.01508 17.306 8.03981 16.9291 7.12987C16.5522 6.21993 15.9998 5.39313 15.3033 4.69669C14.6069 4.00025 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.49999 10 2.49999C8.01089 2.49999 6.10323 3.29017 4.69671 4.69669C3.29019 6.10322 2.50001 8.01087 2.50001 9.99999C2.50001 11.9891 3.29019 13.8968 4.69671 15.3033C6.10323 16.7098 8.01089 17.5 10 17.5ZM19.1667 9.99999C19.1667 15.0625 15.0625 19.1667 10 19.1667C4.93751 19.1667 0.833344 15.0625 0.833344 9.99999C0.833344 4.93749 4.93751 0.833328 10 0.833328C15.0625 0.833328 19.1667 4.93749 19.1667 9.99999ZM12.5 13.6783L9.16668 10.345V4.58333H10.8333V9.65499L13.6783 12.5L12.5 13.6783Z"
            fill="#B115BF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1004_58">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    iconBg: "#B115BF30",
    valueText: "12.5h",
    label: "Practice Time",
  },
];

const sessions = [
  { title: "Product Manager Interview", rating: "8.5", timestamp: "2h ago" },
  { title: "Product Manager Interview", rating: "8.5", timestamp: "2h ago" },
];

const Overview = () => {
  return (
    <VStack w="100%" align="flex-start" gap="20px">
      <HStack
        bg="white"
        w="100%"
        justify="space-between"
        py="25px"
        px="20px"
        roundedBottom="8px"
      >
        <VStack align="flex-start">
          <Heading color="black">Hi, Mighty huggo 👋</Heading>
          <Text color="black">Ready for today's mock interview?</Text>
        </VStack>
        <HStack align="center" gap="40px">
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
          <Avatar.Root shape="full" size="lg">
            <Avatar.Fallback name="Random User" />
            <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
          </Avatar.Root>
        </HStack>
      </HStack>
      <HStack
        bg="#4F46E5"
        w="100%"
        justify="flex-start"
        align="center"
        gap="10px"
        p="25px"
        rounded="16px"
      >
        <Icon>
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
        <VStack align="flex-start" gap="0">
          <Heading color="white" fontSize="20px" fontWeight="500">
            Start New Interview
          </Heading>
          <Text color="white" fontSize="14px" fontWeight="400">
            Practice Make Perfect
          </Text>
        </VStack>
      </HStack>
      <HStack w="100%" justify="space-between" align="center">
        {stats.map((stat, index) => (
          <VStack
            key={index}
            bg="white"
            w="263px"
            align="flex-start"
            gap="30px"
            rounded="16px"
            py="30px"
            px="25px"
          >
            <VStack
              w="35px"
              h="35px"
              justify="center"
              bg={stat.iconBg}
              rounded="24px"
            >
              <Icon w="20px" h="20px">
                {stat.icon}
              </Icon>
            </VStack>

            <Stat.Root>
              <Stat.ValueText color="black" fontSize="32px" fontWeight="500">
                {stat.valueText}
              </Stat.ValueText>
              <Stat.Label color="#1C1C1C" fontSize="20px" fontWeight="300">
                {stat.label}
              </Stat.Label>
            </Stat.Root>
          </VStack>
        ))}
      </HStack>

      <VStack w="100%" align="flex-start" gap="20px" overflow="hidden">
        <Heading color="#1C1C1C" fontSize="24px" fontWeight="500">
          Recent Session
        </Heading>
        <HStack w="100%" align="flex-start">
          <VStack w="60%" align="flex-start" gap="24px">
            {sessions.map((session, index) => (
              <HStack
                key={index}
                bg="white"
                w="100%"
                justify="space-between"
                align="flex-start"
                p="20px"
                rounded="16px"
                boxShadow="4px"
              >
                <VStack align="flex-start" gap="5px">
                  <Heading color="black" fontSize="20px" fontWeight="400">
                    {session.title}
                  </Heading>
                  <HStack gap="7px">
                    <Icon w="18px" h="18px">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3292 8.2775C18.3372 8.22327 18.3344 8.16798 18.321 8.11481C18.3077 8.06165 18.2839 8.01164 18.2512 7.96767C18.2184 7.9237 18.1773 7.88662 18.1302 7.85856C18.0831 7.83051 18.0309 7.81202 17.9767 7.80417L12.7233 7.03834L10.3733 2.26334C10.335 2.19837 10.2805 2.14451 10.215 2.1071C10.1495 2.06968 10.0754 2.05 10 2.05C9.92459 2.05 9.85048 2.06968 9.78501 2.1071C9.71953 2.14451 9.66495 2.19837 9.62667 2.26334L7.27667 7.03834L2.02334 7.805C1.94648 7.81617 1.87427 7.84859 1.81486 7.89861C1.75546 7.94863 1.71121 8.01426 1.68712 8.08809C1.66303 8.16193 1.66005 8.24102 1.67852 8.31646C1.697 8.39189 1.73619 8.46066 1.79167 8.515L5.59417 12.2317L4.69667 17.4817C4.68348 17.5584 4.69203 17.6372 4.72135 17.7093C4.75066 17.7813 4.79957 17.8438 4.86254 17.8895C4.92551 17.9352 5.00001 17.9623 5.07762 17.9679C5.15523 17.9734 5.23285 17.9571 5.30167 17.9208L10 15.4433L14.6983 17.9208C14.7792 17.9632 14.8717 17.9778 14.9617 17.9625C15.0706 17.9441 15.1678 17.8833 15.2319 17.7933C15.296 17.7032 15.3217 17.5915 15.3033 17.4825L14.4058 12.2325L18.2083 8.515C18.2735 8.4512 18.316 8.36776 18.3292 8.2775ZM13.6667 11.7892C13.6185 11.8363 13.5825 11.8945 13.5617 11.9587C13.541 12.0228 13.5361 12.091 13.5475 12.1575L14.3392 16.7892L10.1942 14.6033C10.1343 14.5718 10.0677 14.5553 10 14.5553C9.93234 14.5553 9.8657 14.5718 9.80583 14.6033L5.66084 16.7892L6.4525 12.1575C6.46393 12.091 6.45905 12.0228 6.43829 11.9587C6.41754 11.8945 6.38152 11.8363 6.33333 11.7892L2.97667 8.50834L7.61417 7.83334C7.68107 7.82344 7.74456 7.7974 7.79915 7.75747C7.85374 7.71755 7.89779 7.66493 7.9275 7.60417L10 3.39167L12.0725 7.60334C12.1023 7.66394 12.1464 7.71639 12.201 7.75617C12.2556 7.79594 12.319 7.82185 12.3858 7.83167L17.0233 8.5075L13.6667 11.7892Z"
                          fill="black"
                        />
                      </svg>
                    </Icon>
                    <Text color="black" fontSize="14px" fontWeight="200">
                      Score:{session.rating}/10
                    </Text>
                  </HStack>
                </VStack>
                <Text color="#00000066" fontSize="13px" fontWeight="400">
                  {session.timestamp}
                </Text>
              </HStack>
            ))}
          </VStack>

          <VStack
            bg="#4F46E51A"
            w="40%"
            align="flex-start"
            gap="30px"
            py="20px"
            px="20px"
            rounded="16px"
          >
            <VStack
              w="45px"
              h="45px"
              justify="center"
              bg="#4F46E536"
              rounded="24px"
            >
              <Icon w="30px" h="30px">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.42874 17.5C5.49081 15.964 4.99631 14.1984 4.99999 12.3987C4.99999 6.93125 9.47749 2.5 15 2.5C20.5225 2.5 25 6.93125 25 12.3987C25.0037 14.1984 24.5092 15.964 23.5712 17.5"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 12.5C16.7338 13.3038 15.8888 13.75 15 13.75M15 13.75C14.1113 13.75 13.2663 13.3038 12.5 12.5M15 13.75V19.375M18.75 23.75L18.5875 24.5587C18.4125 25.4425 18.3238 25.8837 18.125 26.2337C17.8187 26.7732 17.3229 27.1795 16.7338 27.3738C16.3525 27.5 15.9 27.5 15 27.5C14.1 27.5 13.6475 27.5 13.2663 27.375C12.6769 27.1805 12.181 26.7737 11.875 26.2337C11.6763 25.8837 11.5875 25.4425 11.4125 24.5587L11.25 23.75M9.22875 21.3725C9.11375 21.0275 9.05625 20.8537 9.0625 20.7137C9.06957 20.569 9.11843 20.4294 9.20318 20.3118C9.28792 20.1942 9.40491 20.1037 9.54 20.0513C9.67 20 9.8525 20 10.215 20H19.785C20.1488 20 20.33 20 20.46 20.05C20.5953 20.1026 20.7124 20.1933 20.7972 20.3111C20.8819 20.4289 20.9307 20.5688 20.9375 20.7137C20.9438 20.8537 20.8863 21.0262 20.7713 21.3725C20.5588 22.0112 20.4525 22.3313 20.2888 22.59C19.9463 23.1308 19.4094 23.5195 18.7888 23.6762C18.4913 23.75 18.1563 23.75 17.485 23.75H12.515C11.8438 23.75 11.5075 23.75 11.2113 23.675C10.5908 23.5186 10.054 23.1303 9.71125 22.59C9.5475 22.3313 9.44125 22.0112 9.22875 21.3725Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
            </VStack>
            <VStack align="flex-start" gap="15px">
              <Heading color="black" fontSize="32px" fontWeight="500">
                Daily Tips
              </Heading>
              <Text
                color="black"
                fontSize="18px"
                fontWeight="300"
                textAlign="start"
              >
                Use the STAR method to structure your behavioral interview
                answers: Situation, Task, Action, Result.
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Overview;
