import { Box, Button } from "@yamada-ui/react";
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
      display="flex"
      justifyContent="space-between"
      bg="linear-gradient(to top, white, 20%, #03a5fc )"
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
  );
};

export default Header;
