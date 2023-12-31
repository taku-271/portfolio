import { tabs } from "@/constants";
import { Box, Button, Heading, Motion, useScroll } from "@yamada-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  // TODO; useScrollを使ってスクロールしたらヘッダーを透明にする
  // const { scrollY } = useScroll();

  const underlineAnimation = {
    initial: { width: "0%" },
    animate: { width: "100%" },
  };

  const onLinkClickHandler = (path: string) => {
    router.push("/" + path);
  };

  return (
    <Box
      h="100px"
      w="100%"
      px="50px"
      bg="#03a5fc"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
    >
      <Motion whileHover={{ opacity: 0.8 }}>
        <Heading
          as="button"
          color="white"
          onClick={() => onLinkClickHandler("")}
        >
          Portfolio
        </Heading>
      </Motion>
      <Box
        py="20px"
        h="full"
        display="flex"
        justifyContent="right"
        alignItems="end"
        gap="30px"
      >
        {tabs.map((tab) => (
          <Motion key={tab.id} initial="initial" whileHover="animate">
            <Button
              variant="unstyled"
              color="white"
              h="25px"
              onClick={() => onLinkClickHandler(tab.link)}
            >
              {tab.name}
            </Button>
            <Motion background="white" h="1px" variants={underlineAnimation} />
          </Motion>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
