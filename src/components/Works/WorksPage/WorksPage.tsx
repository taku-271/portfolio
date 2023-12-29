import { Box, Heading } from "@yamada-ui/react";
import works from "@/data/works.json";

const WorksPage = () => {
  return (
    <Box>
      {works.works.map((work) => {
        return (
          <Box
            key={work.id}
            background="#03a5fc"
            borderRadius="10px"
            my="10"
            mx="10"
            px="5"
            py="10"
          >
            <Heading as="h2" size="lg" color="white">
              {work.title}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

export default WorksPage;
