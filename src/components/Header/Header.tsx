import { Box, Button, Heading } from "@yamada-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const onLinkClickHandler = (path: string) => {
    router.push("/" + path);
  };

  return (
    <Box
      h="100px"
      px="50px"
      bg="#03a5fc"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="button" color="white" onClick={() => onLinkClickHandler("")}>
        Portfolio
      </Heading>
      <Box
        py="20px"
        h="full"
        display="flex"
        justifyContent="right"
        alignItems="end"
        gap="30px"
      >
        <Button
          variant="link"
          color="white"
          onClick={() => onLinkClickHandler("")}
        >
          HOME
        </Button>
        <Button
          variant="link"
          color="white"
          onClick={() => onLinkClickHandler("about")}
        >
          ABOUT
        </Button>
        <Button
          variant="link"
          color="white"
          onClick={() => onLinkClickHandler("works")}
        >
          WORKS
        </Button>
        <Button
          variant="link"
          color="white"
          onClick={() => onLinkClickHandler("link")}
        >
          LINK
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
