import Header from "@/components/Header/Header";
import { Box, Heading } from "@yamada-ui/react";

const PageLayout = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <Box textAlign="center">
      <Header />
      <Heading mt="150px" mb="20" size="3xl">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default PageLayout;
