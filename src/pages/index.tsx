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
    }, 4000);

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
            transition={{ duration: 0.5, delay: 3.5 }}
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
          transition={{ duration: 2 }}
        >
          <Heading>Hello World!</Heading>
        </Motion>
      )}
    </Box>
  );
};

export default Index;
