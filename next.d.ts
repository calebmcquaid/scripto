import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType
} from "next"
import type { AppProps } from "next/app"

declare module "next" {
  type PageWithLayout<P = {}> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module "next/app" {
  type AppWithLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}
