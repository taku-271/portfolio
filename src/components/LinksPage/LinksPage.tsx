import { links } from "@/data/links";
import { Box, Heading, Link } from "@yamada-ui/react";

const LinksPage = () => {
  return (
    <Box>
      {links.map((link, index) => {
        return (
          <Box
            key={link.id}
            mx="20%"
            mb="2xl"
            p="xl"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box mr="20%">
              <Heading as="h2" size="lg">
                {link.name}
              </Heading>
              <Heading as="h3" size="md">
                {link.userId}
              </Heading>
            </Box>
            <Link href={link.url} isExternal>
              {link.iconElement}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default LinksPage;
