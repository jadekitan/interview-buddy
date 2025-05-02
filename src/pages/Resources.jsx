import {
  VStack,
  Heading,
  Tabs,
  Link,
  Text,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDescription } from "react-icons/md";

const Resources = () => {
  const [value, setValue] = useState("all");
  const featured = [
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89575 6.76562C9.89575 6.48935 10.0055 6.2244 10.2008 6.02905C10.3962 5.8337 10.6612 5.72395 10.9374 5.72395H17.1874C17.4637 5.72395 17.7286 5.8337 17.924 6.02905C18.1193 6.2244 18.2291 6.48935 18.2291 6.76562C18.2291 7.04189 18.1193 7.30684 17.924 7.50219C17.7286 7.69754 17.4637 7.80729 17.1874 7.80729H10.9374C10.6612 7.80729 10.3962 7.69754 10.2008 7.50219C10.0055 7.30684 9.89575 7.04189 9.89575 6.76562ZM14.726 8.84895H17.0447C17.1051 8.84895 17.1895 8.84895 17.2655 8.8552C17.3572 8.8625 17.5041 8.88333 17.6603 8.9625C17.8563 9.06236 18.0157 9.22171 18.1155 9.4177C18.1958 9.57395 18.2155 9.71979 18.2228 9.81249C18.2291 9.88854 18.2291 9.97291 18.2291 10.0333V11.8312C18.2291 11.8917 18.2291 11.976 18.2228 12.0521C18.2135 12.1895 18.1771 12.3237 18.1155 12.4469C18.0157 12.6429 17.8563 12.8022 17.6603 12.9021C17.5371 12.9636 17.4029 13.0001 17.2655 13.0094C17.192 13.0141 17.1184 13.0161 17.0447 13.0156H14.726C14.6655 13.0156 14.5812 13.0156 14.5051 13.0094C14.3677 13.0001 14.2335 12.9636 14.1103 12.9021C13.9143 12.8022 13.755 12.6429 13.6551 12.4469C13.5936 12.3237 13.5572 12.1895 13.5478 12.0521C13.5416 11.976 13.5416 11.8917 13.5416 11.8312V10.0333C13.5416 9.97291 13.5416 9.88854 13.5478 9.81249C13.5551 9.72083 13.576 9.57395 13.6551 9.4177C13.755 9.22171 13.9143 9.06236 14.1103 8.9625C14.2666 8.88333 14.4124 8.8625 14.5051 8.8552C14.5812 8.84895 14.6655 8.84895 14.726 8.84895ZM15.1041 10.4115V11.4531H16.6666V10.4115H15.1041ZM10.677 9.10937C10.4698 9.10937 10.2711 9.19168 10.1246 9.33819C9.97806 9.48471 9.89575 9.68342 9.89575 9.89062C9.89575 10.0978 9.97806 10.2965 10.1246 10.443C10.2711 10.5896 10.4698 10.6719 10.677 10.6719H11.9791C12.1863 10.6719 12.385 10.5896 12.5315 10.443C12.678 10.2965 12.7603 10.0978 12.7603 9.89062C12.7603 9.68342 12.678 9.48471 12.5315 9.33819C12.385 9.19168 12.1863 9.10937 11.9791 9.10937H10.677ZM10.677 11.4531C10.4698 11.4531 10.2711 11.5354 10.1246 11.6819C9.97806 11.8285 9.89575 12.0272 9.89575 12.2344C9.89575 12.4416 9.97806 12.6403 10.1246 12.7868C10.2711 12.9333 10.4698 13.0156 10.677 13.0156H11.9791C12.1863 13.0156 12.385 12.9333 12.5315 12.7868C12.678 12.6403 12.7603 12.4416 12.7603 12.2344C12.7603 12.0272 12.678 11.8285 12.5315 11.6819C12.385 11.5354 12.1863 11.4531 11.9791 11.4531H10.677ZM10.677 14.3177C10.4698 14.3177 10.2711 14.4 10.1246 14.5465C9.97806 14.693 9.89575 14.8918 9.89575 15.099C9.89575 15.3062 9.97806 15.5049 10.1246 15.6514C10.2711 15.7979 10.4698 15.8802 10.677 15.8802H17.4478C17.655 15.8802 17.8537 15.7979 18.0003 15.6514C18.1468 15.5049 18.2291 15.3062 18.2291 15.099C18.2291 14.8918 18.1468 14.693 18.0003 14.5465C17.8537 14.4 17.655 14.3177 17.4478 14.3177H10.677Z"
            fill="#1BBF15"
          />
          <path
            d="M17.0104 2.85938H11.1146C10.5573 2.85938 10.0937 2.85938 9.71354 2.89063C9.31771 2.92188 8.94687 2.99271 8.59583 3.17188C8.05671 3.44653 7.61841 3.88484 7.34375 4.42396C7.16458 4.775 7.09375 5.14583 7.0625 5.54167C7.03125 5.92188 7.03125 6.38542 7.03125 6.94271V17.4427H4.6875C4.4803 17.4427 4.28159 17.525 4.13507 17.6715C3.98856 17.818 3.90625 18.0168 3.90625 18.224C3.90625 19.9771 4.50208 21.0156 5.26042 21.5833C5.68333 21.9 6.23333 22.1292 6.76979 22.1302H17.3417C18.0781 22.1302 18.8542 22.1615 19.5292 21.8177C20.0681 21.5433 20.5064 21.1054 20.7812 20.5667C20.9604 20.2146 21.0312 19.8438 21.0625 19.4479C21.0937 19.0677 21.0938 18.6042 21.0938 18.0469V6.94271C21.0938 6.38542 21.0937 5.92188 21.0625 5.54167C21.0312 5.14583 20.9604 4.775 20.7812 4.42396C20.5069 3.885 20.0689 3.44671 19.5302 3.17188C19.1781 2.99271 18.8073 2.92188 18.4115 2.89063C18.0312 2.85938 17.5677 2.85938 17.0104 2.85938ZM18.1479 20.5542C17.9699 20.5172 17.8021 20.4418 17.6562 20.3333C17.3729 20.1208 16.9271 19.5958 16.9271 18.224C16.9271 18.0168 16.8448 17.818 16.6983 17.6715C16.5517 17.525 16.353 17.4427 16.1458 17.4427H8.59375V6.97396C8.59375 6.37813 8.59375 5.97708 8.61979 5.66875C8.64375 5.36979 8.6875 5.22708 8.73542 5.13333C8.86032 4.88793 9.05981 4.68845 9.30521 4.56354C9.39896 4.51563 9.54167 4.47188 9.84062 4.44792C10.149 4.42292 10.549 4.42188 11.1458 4.42188H16.9792C17.575 4.42188 17.976 4.42188 18.2833 4.44792C18.5833 4.47188 18.726 4.51563 18.8198 4.56354C19.0656 4.68854 19.2646 4.8875 19.3896 5.13333C19.4375 5.22708 19.4812 5.36979 19.5052 5.66875C19.5302 5.97708 19.5312 6.37708 19.5312 6.97396V18.0156C19.5312 18.6115 19.5312 19.0125 19.5052 19.3198C19.4812 19.6198 19.4375 19.7625 19.3896 19.8563C19.2647 20.1017 19.0652 20.3011 18.8198 20.426C18.6719 20.501 18.5115 20.5375 18.1479 20.5542ZM6.78333 20.5677H6.77292L6.76458 20.5656C6.55935 20.5364 6.36462 20.4566 6.19792 20.3333C5.97604 20.1667 5.65521 19.8094 5.52604 19.0052H15.4083C15.4812 19.6344 15.6427 20.149 15.8635 20.5677H6.78333Z"
            fill="#1BBF15"
          />
        </svg>
      ),
      iconBg: "#1BBF151F",
      topic: "Article",
      title: "STAR Method for Behavioral Interviews",
      description:
        "Learn how to structure your answers using the STAR method...",
      level: "Easy",
      levelBg: "#1BBF151F",
      levelColor: "#1BBF15",
      lenght: 12,
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.993C3 3.445 3.445 3 3.993 3H20.007C20.555 3 21 3.445 21 3.993V20.007C20.9997 20.2703 20.895 20.5227 20.7089 20.7089C20.5227 20.895 20.2703 20.9997 20.007 21H3.993C3.72964 21 3.47707 20.8954 3.29084 20.7092C3.10462 20.5229 3 20.2704 3 20.007V3.993ZM5 5V19H19V5H5ZM10.622 8.415L15.501 11.667C15.5559 11.7035 15.6009 11.753 15.632 11.8111C15.6631 11.8692 15.6794 11.9341 15.6794 12C15.6794 12.0659 15.6631 12.1308 15.632 12.1889C15.6009 12.247 15.5559 12.2965 15.501 12.333L10.621 15.585C10.5608 15.6249 10.491 15.6477 10.4189 15.6512C10.3468 15.6546 10.2751 15.6384 10.2114 15.6043C10.1477 15.5703 10.0945 15.5197 10.0573 15.4578C10.02 15.396 10.0003 15.3252 10 15.253V8.747C10.0001 8.67465 10.0199 8.60369 10.0572 8.54168C10.0944 8.47967 10.1478 8.42893 10.2116 8.39486C10.2755 8.36079 10.3473 8.34467 10.4196 8.34822C10.4919 8.35177 10.5618 8.37485 10.622 8.415Z"
            fill="#B115BF"
          />
        </svg>
      ),
      iconBg: "#B115BF30",
      topic: "Video",
      title: "System Design Interview Walkthrough",
      description: "Watch an expert demonstrate how to approach a system...",
      level: "Medium",
      levelBg: "#EEEA7194",
      levelColor: "#C07A12",
      lenght: 20,
    },

    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7V5ZM4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H11C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13V19C12 19.2652 11.8946 19.5196 11.7071 19.7071C11.5196 19.8946 11.2652 20 11 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13ZM16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12H19C19.2652 12 19.5196 12.1054 19.7071 12.2929C19.8946 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H17C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19V13Z"
            stroke="#4F46E5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBg: "#4F46E536",
      topic: "Template",
      title: "Leadership Experience Framework",
      description:
        "A structured template to help you document and articulate your...",
      level: "Easy",
      levelBg: "#1BBF151F",
      levelColor: "#1BBF15",
      lenght: 28,
    },
  ];
  return (
    <VStack w="100%">
      <VStack w="100%" align="flex-start" gap="18px">
        <Heading color="black" fontSize="24px" fontWeight="400">
          Resources
        </Heading>
        <Tabs.Root
          w="100%"
          variant="subtle"
          defaultValue="all"
          value={value}
          onValueChange={(e) => setValue(e.value)}
        >
          <VStack w="100%" align="flex-start" gap="40px">
            <Tabs.List w="100%" gap="45px">
              <Tabs.Trigger
                bg={value === "all" ? "#4F46E5" : "white"}
                rounded="24px"
                py="10px"
                px="20px"
                value="all"
                boxShadow="1px 1px 1px 1px rgba(0, 0, 255, .2)"
              >
                <Link unstyled href="#all" asChlid>
                  <Text
                    color={value === "all" ? "white" : "black"}
                    fontSize="14px"
                    fontWeight={value === "all" ? "600" : "400"}
                  >
                    All Resources (42)
                  </Text>
                </Link>
              </Tabs.Trigger>
              <Tabs.Trigger
                bg={value === "behaviour" ? "#4F46E5" : "white"}
                rounded="24px"
                py="10px"
                px="20px"
                value="behaviour"
                boxShadow="1px 1px 1px 1px rgba(0, 0, 255, .2)"
              >
                <Link unstyled href="#behaviour" asChlid>
                  <Text
                    color={value === "behaviour" ? "white" : "black"}
                    fontSize="14px"
                    fontWeight={value === "behaviour" ? "600" : "400"}
                  >
                    Behavioural Interview (2)
                  </Text>
                </Link>
              </Tabs.Trigger>
              <Tabs.Trigger
                bg={value === "technical" ? "#4F46E5" : "white"}
                rounded="24px"
                py="10px"
                px="20px"
                value="technical"
                boxShadow="1px 1px 1px 1px rgba(0, 0, 255, .2)"
              >
                <Link unstyled href="#technical" asChlid>
                  <Text
                    color={value === "technical" ? "white" : "black"}
                    fontSize="14px"
                    fontWeight={value === "technical" ? "600" : "400"}
                  >
                    Technical Interview
                  </Text>
                </Link>
              </Tabs.Trigger>
              <Tabs.Trigger
                bg={value === "leadership" ? "#4F46E5" : "white"}
                rounded="24px"
                py="10px"
                px="20px"
                value="leadership"
                boxShadow="1px 1px 1px 1px rgba(0, 0, 255, .2)"
              >
                <Link unstyled href="#leadership" asChlid>
                  <Text
                    color={value === "leadership" ? "white" : "black"}
                    fontSize="14px"
                    fontWeight={value === "leadership" ? "600" : "400"}
                  >
                    Leadership Content (8)
                  </Text>
                </Link>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all">
              <VStack w="100%" align="flex-start" gap="30px">
                <Heading color="black" fontSize="24px" fontWeight="400">
                  Featured Resources
                </Heading>
                <HStack w="100%" justify="space-between" align="flex-start">
                  {featured.map((item, index) => (
                    <VStack
                      bg="white"
                      w="325px"
                      gap="16px"
                      rounded="16px"
                      px="18px"
                      py="25px"
                    >
                      <HStack w="100%" justify="space-between" align="center">
                        <HStack align="flex-start" gap="10px">
                          <VStack
                            w="45px"
                            h="45px"
                            justify="center"
                            bg={item.iconBg}
                            rounded="24px"
                          >
                            <Icon w="25px" h="25px">
                              {item.icon}
                            </Icon>
                          </VStack>
                          <Heading
                            color="black"
                            fontSize="24px"
                            fontWeight="400"
                          >
                            {item.topic}
                          </Heading>
                        </HStack>
                        <Icon>
                          <svg
                            width="14"
                            height="20"
                            viewBox="0 0 14 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.2C1 3.08 1 2.52 1.218 2.092C1.40974 1.71569 1.71569 1.40974 2.092 1.218C2.52 1 3.08 1 4.2 1H9.8C10.92 1 11.48 1 11.908 1.218C12.2843 1.40974 12.5903 1.71569 12.782 2.092C13 2.52 13 3.08 13 4.2V17.505C13 17.991 13 18.234 12.899 18.367C12.8554 18.4248 12.7997 18.4725 12.7358 18.5067C12.6719 18.5409 12.6013 18.5608 12.529 18.565C12.362 18.575 12.16 18.44 11.756 18.171L7 15L2.244 18.17C1.84 18.44 1.638 18.575 1.47 18.565C1.39784 18.5606 1.32748 18.5407 1.26377 18.5065C1.20007 18.4723 1.14453 18.4247 1.101 18.367C1 18.234 1 17.991 1 17.505V4.2Z"
                              fill="black"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Icon>
                      </HStack>
                      <VStack align="flex-start" textAlign="start">
                        <Heading color="black" fontSize="18px" fontWeight="400">
                          {item.title}
                        </Heading>
                        <Text
                          color="#00000059"
                          fontSize="17px"
                          fontWeight="400"
                        >
                          {item.description}
                        </Text>
                      </VStack>
                      <HStack w="100%" justify="space-between" align="center">
                        <Badge bg={item.levelBg} color={item.levelColor}>
                          {item.level}
                        </Badge>
                        <Text color="#000000" fontSize="13px" fontWeight="300">
                          {item.lenght} min read
                        </Text>
                      </HStack>
                    </VStack>
                  ))}
                </HStack>
              </VStack>
            </Tabs.Content>
            <Tabs.Content value="behaviour">Manage your projects</Tabs.Content>
            <Tabs.Content value="technical">
              Manage your tasks for freelancers
            </Tabs.Content>
            <Tabs.Content value="leadership">
              Manage your tasks for freelancers
            </Tabs.Content>
          </VStack>
        </Tabs.Root>
      </VStack>
    </VStack>
  );
};

export default Resources;
