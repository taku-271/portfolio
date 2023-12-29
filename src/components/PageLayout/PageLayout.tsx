import Header from "@/components/Header/Header";
import { Box } from "@yamada-ui/react";

const PageLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box textAlign="center">
      <Header />
      {children}
    </Box>
  );
};

export default PageLayout;
