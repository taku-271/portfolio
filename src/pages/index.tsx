import { Opening } from "@/features/Opening";
import { display, transparent } from "@/styles/common";
import { AnimatePresence, Box, Heading, Motion } from "@yamada-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpening(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <AnimatePresence mode="wait">
      {isOpening ? (
        <Motion exit={transparent}>
          <Opening key="opening" />
        </Motion>
      ) : (
        <Motion
          initial={transparent}
          animate={display}
          transition={{ duration: 1 }}
          key="content"
          display="flex"
          justifyContent="center"
        >
          <Box>
            <Heading>Hello World!</Heading>
          </Box>
        </Motion>
      )}
    </AnimatePresence>
  );
};

export default Index;
