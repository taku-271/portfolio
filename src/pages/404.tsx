import { Box, Button, Heading, Text } from "@yamada-ui/react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <Box textAlign="center" my="100px">
      <Heading as="h1" size="4xl" isTruncated>
        404 NotFound
      </Heading>
      <Text>準備中のページか存在しないページにアクセスしました。</Text>
      <Button
        variant="outline"
        color="primary"
        mt="30px"
        onClick={() => router.push("/")}
      >
        Homeへ戻る
      </Button>
    </Box>
  );
}
