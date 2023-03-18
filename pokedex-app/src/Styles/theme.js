import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
      global:() => ({
        body: {
          bg: "#5E5E5E"
        }
      })
    },
    components: {
      Button: {
        variants: {
          header: {
            bg: "#33A4F5",
            color: "white",
            width:'200px',
            height:'48px',
            fontSize:'20px',
          },
        }
      }
    },
    
    colors: {
      laranja: {
        500: "#FE7E02"
      }
    }
  })