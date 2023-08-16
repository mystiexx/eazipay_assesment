import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "Aeonik",
        color: '#292A29',
      },
    }),
  },
});
