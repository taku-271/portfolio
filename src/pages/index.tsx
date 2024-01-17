import {
  AnimatePresence,
  Box,
  CircleProgress,
  Heading,
  Motion,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
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
      {isLoading ? (
        <AnimatePresence>
          <Motion
            animate={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5, delay: 2.5 }}
          >
            <CircleProgress
              isAnimation
              isRounded
              color="skyblue"
              thickness={5}
            />
          </Motion>
        </AnimatePresence>
      ) : (
        <Motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Heading color="skyblue">Hello World!</Heading>
        </Motion>
      )}
    </Box>
  );
};

export default Index;
