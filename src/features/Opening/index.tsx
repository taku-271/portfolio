import { display, transparent } from "@/styles/common";
import {
  AnimatePresence,
  Box,
  CircleProgress,
  Heading,
  Motion,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Opening = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Box
      w="100%"
      h="98vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Motion key="loading" exit={transparent} transition={{ duration: 1 }}>
            <CircleProgress
              isAnimation
              isRounded
              color="skyblue"
              thickness={5}
            />
          </Motion>
        ) : (
          <Motion
            key="type"
            initial={transparent}
            animate={display}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Heading color="skyblue">
              <TypeAnimation
                sequence={[500, "Hello World!"]}
                cursor={false}
                speed={1}
              />
            </Heading>
          </Motion>
        )}
      </AnimatePresence>
    </Box>
  );
};
