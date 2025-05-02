import {
  ButtonGroup,
  IconButton,
  Pagination,
  Text,
  VStack,
  RadioCard,
  HStack,
  Heading,
  Textarea,
  Icon,
  Button,
  Box,
  CloseButton,
  Dialog,
  Portal,
  createOverlay,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { Toaster, toaster } from "@/components/ui/toaster";

// Define difficulty levels with their visual styling
const levels = [
  { value: "beginner", title: "Beginner", bg: "#1BBF151F", color: "#1BBF15" },
  {
    value: "intermediate",
    title: "Intermediate",
    bg: "#EEEA7194",
    color: "#C07A12",
  },
  { value: "advanced", title: "Advanced", bg: "#EE717194", color: "#C01212" },
];

// Real questions database
const questionsDB = {
  beginner: [
    {
      id: 1,
      question:
        "What is the difference between 'let', 'const', and 'var' in JavaScript?",
      hint: "Consider block scope, hoisting, and reassignment capabilities in your answer.",
      answer: "",
    },
    {
      id: 2,
      question:
        "Explain the concept of the Document Object Model (DOM) in web development.",
      hint: "Consider explaining the tree structure, how it represents HTML, and how JavaScript interacts with it.",
      answer: "",
    },
    {
      id: 3,
      question:
        "What are CSS media queries and how are they used in responsive design?",
      hint: "Include examples of common breakpoints and how they affect layout.",
      answer: "",
    },
    {
      id: 4,
      question: "What is the box model in CSS?",
      hint: "Consider content, padding, border, and margin in your explanation.",
      answer: "",
    },
    {
      id: 5,
      question: "What is the purpose of semantic HTML?",
      hint: "Consider accessibility, SEO, and code readability in your answer.",
      answer: "",
    },
  ],
  intermediate: [
    {
      id: 1,
      question:
        "Explain the concept of closures in JavaScript and provide a practical example of how they can be used.",
      hint: "Consider discussing scope, lexical environment, and memory management in your answer. Provide a real-world example that demonstrates the practical benefits of closures.",
      answer: "",
    },
    {
      id: 2,
      question:
        "What are React Hooks? Explain useState and useEffect with examples.",
      hint: "Consider discussing how hooks solve problems that class components had, and practical use cases for both hooks.",
      answer: "",
    },
    {
      id: 3,
      question:
        "Explain how the virtual DOM works in React and why it improves performance.",
      hint: "Consider reconciliation, diffing algorithm, and why direct DOM manipulation is expensive.",
      answer: "",
    },
    {
      id: 4,
      question:
        "What are promises in JavaScript and how do they differ from callbacks? Provide examples.",
      hint: "Consider error handling, chaining, and the problems promises solve compared to callback approaches.",
      answer: "",
    },
    {
      id: 5,
      question:
        "Describe the CSS Grid layout system and how it differs from Flexbox.",
      hint: "Provide examples of when you would use Grid versus Flexbox, focusing on one-dimensional versus two-dimensional layouts.",
      answer: "",
    },
  ],
  advanced: [
    {
      id: 1,
      question:
        "Explain how Redux works with React and the principles behind the flux architecture.",
      hint: "Consider actions, reducers, store, selectors, and one-way data flow in your explanation.",
      answer: "",
    },
    {
      id: 2,
      question:
        "What are React fiber, reconciliation, and concurrent mode? How do they improve React's performance?",
      hint: "Consider how fiber architecture enables time slicing and priorities in rendering.",
      answer: "",
    },
    {
      id: 3,
      question:
        "Explain server-side rendering (SSR) in React. What are its benefits and challenges compared to client-side rendering?",
      hint: "Consider first contentful paint, SEO, hydration, and implementation complexity in your answer.",
      answer: "",
    },
    {
      id: 4,
      question:
        "What is the Intersection Observer API and how can it be used to improve performance in web applications?",
      hint: "Consider lazy loading, infinite scrolling, and animation triggering use cases.",
      answer: "",
    },
    {
      id: 5,
      question:
        "Explain how to optimize a React application for performance. Include specific techniques and tools.",
      hint: "Consider code splitting, memoization, virtualization, bundle size analysis, and profiling tools in your explanation.",
      answer: "",
    },
  ],
};

// Timer configurations for each level in seconds
const timerConfigs = {
  beginner: 60 * 5, // 5 minutes
  intermediate: 60 * 8, // 8 minutes
  advanced: 60 * 10, // 10 minutes
};

// Dialog types for different message types
const dialogTypes = {
  success: {
    icon: <IoCheckmark color="green" />,
    color: "green.500",
    bg: "green.50",
  },
  info: {
    icon: <FaRegClock color="blue" />,
    color: "blue.500",
    bg: "blue.50",
  },
  warning: {
    icon: <FaRegClock color="orange" />,
    color: "orange.500",
    bg: "orange.50",
  },
  error: {
    icon: <FaRegClock color="red" />,
    color: "red.500",
    bg: "red.50",
  },
  default: {
    icon: null,
    color: "gray.700",
    bg: "white",
  },
};

// Create a toast/notification overlay
const toast = createOverlay((props) => {
  const {
    id,
    title,
    description,
    status = "info",
    duration = 5000,
    isClosable = true,
    ...rest
  } = props;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (duration > 0) {
      timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => toast.close(id), 300); // Allow time for exit animation
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [duration, id]);

  const statusStyle = dialogTypes[status] || dialogTypes.info;

  return isVisible ? (
    <Portal>
      <Box
        position="fixed"
        top="20px"
        right="20px"
        zIndex="toast"
        minW="300px"
        maxW="400px"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        borderLeft="4px solid"
        borderLeftColor={statusStyle.color}
        transform={isVisible ? "translateX(0)" : "translateX(120%)"}
        transition="transform 0.3s ease-in-out"
        {...rest}
      >
        <Flex p={4} alignItems="flex-start">
          <Box mr={3} mt={1}>
            {statusStyle.icon}
          </Box>
          <Box flex="1">
            {title && <Text fontWeight="bold" color="black">{title}</Text>}
            {description && (
              <Text mt={1} fontSize="sm" color="black">
                {description}
              </Text>
            )}
          </Box>
          {isClosable && (
            <IconButton
              icon={<CloseButton size={16} />}
              size="sm"
              variant="ghost"
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => toast.close(id), 300);
              }}
              aria-label="Close"
            />
          )}
        </Flex>
      </Box>
    </Portal>
  ) : null;
});

const dialog = createOverlay((props) => {
  const {
    id,
    title,
    description,
    content,
    type = "default",
    onConfirm,
    onCancel,
    confirmText = "Confirm",
    cancelText = "Cancel",
    showCancel = true,
    ...rest
  } = props;

  const dialogStyle = dialogTypes[type] || dialogTypes.default;

  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius="md"
            boxShadow="lg"
            maxW="md"
            width="full"
            bg="white"
          >
            {title && (
              <Dialog.Header
                bg={dialogStyle.bg}
                color={dialogStyle.color}
                borderTopRadius="md"
                py={3}
                px={4}
              >
                <Flex alignItems="center" gap={2}>
                  {dialogStyle.icon && <Box>{dialogStyle.icon}</Box>}
                  <Dialog.Title>{title}</Dialog.Title>
                </Flex>
              </Dialog.Header>
            )}
            <Dialog.Body p={4} spaceY="4">
              {description && (
                <Dialog.Description color="black">{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
            <Dialog.Footer gap={2} p={4}>
              {showCancel && (
                <Button
                  variant="outline"
                  color="black"
                  bg="#F2F2F2C4"
                  onClick={() => {
                    if (onCancel) onCancel();
                    dialog.close(id);
                  }}
                >
                  {cancelText}
                </Button>
              )}
              <Button
                bg={dialogStyle.color}
                color={dialogStyle.bg}
                onClick={() => {
                  if (onConfirm) onConfirm();
                  dialog.close(id);
                }}
              >
                {confirmText}
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
});

const QuestionsModal = ({ onComplete }) => {
  // State for current level, default to intermediate
  const [level, setLevel] = useState("beginner");

  // State for current page/question
  const [page, setPage] = useState(1);

  // State for answers
  const [answers, setAnswers] = useState({});

  // State for timer
  const [timeRemaining, setTimeRemaining] = useState(timerConfigs[level]);
  const [timerActive, setTimerActive] = useState(true);

  // State for timer display
  const [timerDisplay, setTimerDisplay] = useState("");

  // State for quiz completion
  const [isCompleted, setIsCompleted] = useState(false);

  // State for confirmation dialog
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const cancelRef = useRef();

  // Get questions for current level
  const questions = questionsDB[level] || [];
  const pageSize = 1;
  const count = questions.length;

  // Initialize or reset answers when level changes
  useEffect(() => {
    // Initialize empty answers for each question
    const initialAnswers = {};
    questions.forEach((q) => {
      initialAnswers[q.id] = answers[q.id] || "";
    });
    setAnswers(initialAnswers);

    // Reset timer when level changes
    setTimeRemaining(timerConfigs[level]);
    setTimerActive(true);
    setPage(1);
  }, [level]);

  // Timer logic
  useEffect(() => {
    let timer;
    if (timerActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && timerActive) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [timerActive, timeRemaining]);

  // Format time for display
  useEffect(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    if (timeRemaining > 0) {
      setTimerDisplay(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    } else {
      setTimerDisplay("Time Up");
    }
  }, [timeRemaining]);

  // Handle time up
  const handleTimeUp = () => {
    setTimerActive(false);

    toast.open("timeUp", {
      title: "Time's up!",
      description:
        "Your time has expired. Your answers have been automatically submitted.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });

    handleSubmit();
  };

  // Handle level change
  const handleLevelChange = (newLevel) => {
    if (newLevel !== level) {
      // Confirm level change if answers exist
      const hasAnswers = Object.values(answers).some(
        (answer) => answer.trim() !== ""
      );

      if (hasAnswers) {
        dialog.open("confirmLevelChange", {
          title: "Change Difficulty Level",
          description:
            "Changing difficulty will reset your progress. Continue?",
          type: "warning",
          confirmText: "Change Level",
          cancelText: "Stay Here",
          onConfirm: () => setLevel(newLevel),
        });
      } else {
        setLevel(newLevel);
      }
    }
  };

  // Handle answer change
  const handleAnswerChange = (e, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: e.target.value,
    });
  };

  // Handle submit confirmation
  const handleSubmitConfirmation = () => {
    // Check if all questions are answered
    const unansweredCount = Object.values(answers).filter(
      (a) => !a.trim()
    ).length;

    if (unansweredCount > 0) {
      dialog.open("confirmSubmit", {
        title: "Incomplete Answers",
        description: `You have ${unansweredCount} unanswered question(s). Do you want to submit anyway?`,
        type: "warning",
        confirmText: "Submit Anyway",
        cancelText: "Continue Answering",
        onConfirm: handleSubmit,
      });
    } else {
      handleSubmit();
    }
  };

  // Handle actual submit
  const handleSubmit = () => {
    setTimerActive(false);
    setIsCompleted(true);

    toast.open("submissionSuccess", {
      title: "Assessment Submitted",
      description: "Your answers have been submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Send answers to parent component if provided
    if (onComplete) {
      onComplete({
        level,
        answers,
        timeUsed: timerConfigs[level] - timeRemaining,
      });
    }
  };

  // Calculate current question
  const currentQuestionIndex = page - 1;
  const currentQuestion = questions[currentQuestionIndex] || {};

  // Find the current level object
  const levelObj = levels.find((l) => l.value === level);

  // Render empty state if no questions
  if (!questions.length) {
    return (
      <Box textAlign="center" p={8}>
        <Text>No questions available for this level.</Text>
      </Box>
    );
  }

  // Render completion state
  if (isCompleted) {
    return (
      <Box p={6} textAlign="center">
        <IoCheckmark color="green" size={48} />
        <Heading mt={4} size="lg" color="black">
          Assessment Completed
        </Heading>
        <Text mt={2} color="black">
          Thank you for completing the assessment.
        </Text>
        <Button
          mt={6}
          colorScheme="blue"
          onClick={() => onComplete && onComplete()}
        >
          Close
        </Button>
      </Box>
    );
  }

  return (
    <VStack
      position="relative"
      w="100%"
      justify="center"
      align="center"
      gap="20px"
    >
      <Toaster />
      <VStack
        bg="white"
        w={{ base: "90%", md: "70%", lg: "60%" }}
        align="flex-start"
        p={{ base: "20px", md: "40px" }}
        gap="20px"
        rounded="8px"
        boxShadow="2px"
      >
        <HStack w="100%" justify="space-between" align="center">
          <HStack
            justify="flex-start"
            gap="10px"
            mb={{ base: "10px", md: "0" }}
          >
            <RadioCard.Root
              value={level}
              onChange={(val) => handleLevelChange(val)}
              gap="4"
              maxW="sm"
              size="sm"
            >
              <RadioCard.Item
                key={levelObj.value}
                value={levelObj.value}
                width="full"
                rounded="49px"
                px="5px"
                align="center"
                justify="center"
                bg={levelObj.bg}
                borderWidth="0"
                cursor="pointer"
              >
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl align="center" p="5px">
                  <RadioCard.ItemIndicator />
                  <RadioCard.ItemContent>
                    <RadioCard.ItemText
                      color={levelObj.color}
                      fontSize="12px"
                      fontWeight="500"
                    >
                      {levelObj.title}
                    </RadioCard.ItemText>
                  </RadioCard.ItemContent>
                </RadioCard.ItemControl>
              </RadioCard.Item>
            </RadioCard.Root>
            <Heading color="black" fontSize="14px" fontWeight="300">
              Frontend Development
            </Heading>
          </HStack>

          <Button
            bg="#4F46E5"
            w="120px"
            h="38px"
            color="white"
            fontSize="16px"
            fontWeight="500"
            _hover={{ bg: "#3c35b1" }}
            onClick={handleSubmitConfirmation}
            isDisabled={isCompleted}
          >
            Submit
          </Button>
        </HStack>

        <VStack bg="white" w="100%" gap="30px" rounded="8px">
          <VStack w="100%" gap="25px" align="stretch">
            <HStack
              w="100%"
              justify="space-between"
              align="center"
              wrap={{ base: "wrap", md: "nowrap" }}
            >
              <Box w="120px" bg="#E7F2FF" rounded="12px" py="5px" px="12px">
                <Text
                  color="black"
                  fontSize="14px"
                  fontWeight="300"
                >{`Question ${page}/${count}`}</Text>
              </Box>
              <HStack
                bg={timeRemaining === 0 ? "#FFEBEB" : "#E7F2FF"}
                p="5px 10px"
                rounded="12px"
              >
                <Icon color={timeRemaining === 0 ? "#E21313" : "black"}>
                  <FaRegClock />
                </Icon>
                <Text
                  color={timeRemaining < 60 ? "red.500" : "black"}
                  fontWeight={timeRemaining === 0 ? "600" : "400"}
                >
                  {timerDisplay}
                </Text>
              </HStack>
            </HStack>

            <VStack w="100%" align="flex-start" gap="10px">
              <VStack w="100%" align="flex-start" gap="15px">
                <Heading color="black" fontSize="16px" fontWeight="500">
                  {currentQuestion.question}
                </Heading>
                <Textarea
                  maxH="100lh"
                  variant="subtle"
                  size="lg"
                  bg="#F2F2F2C4"
                  placeholder="Type your answer here"
                  color="black"
                  fontSize="14px"
                  p="12px"
                  minH="150px"
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleAnswerChange(e, currentQuestion.id)}
                  disabled={isCompleted || timeRemaining === 0}
                />
              </VStack>
              <Text color="black" fontSize="12px" fontWeight="200">
                {currentQuestion.hint}
              </Text>
            </VStack>
          </VStack>
        </VStack>

        <Pagination.Root
          w="100%"
          count={count}
          pageSize={pageSize}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <ButtonGroup
            w="100%"
            variant="ghost"
            size="sm"
            justify="space-between"
          >
            <Pagination.PrevTrigger asChild>
              <Button
                bg="#4F46E5"
                color="white"
                fontSize="14px"
                fontWeight="400"
                _hover={{ bg: "#3c35b1" }}
                isDisabled={page === 1 || isCompleted}
              >
                <Icon color="white" mr="2">
                  <HiChevronLeft />
                </Icon>
                Back
              </Button>
            </Pagination.PrevTrigger>

            <HStack spacing="2" display={{ base: "none", md: "flex" }}>
              {Array.from({ length: count }, (_, i) => (
                <Button
                  key={i + 1}
                  size="sm"
                  variant={page === i + 1 ? "solid" : "outline"}
                  color={page === i + 1 ? "white" : "black"}
                  bg={page === i + 1 ? "#4F46E5" : "#F2F2F2C4"}
                  onClick={() => setPage(i + 1)}
                  isDisabled={isCompleted}
                >
                  {i + 1}
                </Button>
              ))}
            </HStack>

            <Pagination.NextTrigger asChild>
              <Button
                bg="#4F46E5"
                color="white"
                fontSize="14px"
                fontWeight="400"
                _hover={{ bg: "#3c35b1" }}
                isDisabled={page === count || isCompleted}
              >
                Next
                <Icon color="white" ml="2">
                  <HiChevronRight />
                </Icon>
              </Button>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </VStack>
      <dialog.Viewport />
      <toast.Viewport />
    </VStack>
  );
};

export default QuestionsModal;
