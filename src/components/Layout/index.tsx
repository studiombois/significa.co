import React from 'react'

import { colorArgumentType, Provider, Theme } from '@theme'

import Footer from '../Footer'
import Header from '../Header'
import ConditionalWrap from '../utils/ConditionalWrap'

interface ILayoutProps {
  children: React.ReactNode
  theme?: colorArgumentType
  headerTheme?: colorArgumentType
  footerTheme?: colorArgumentType
  renderHeaderChildren?: React.ReactNode
  isBlogPage?: boolean
  transitionHeader?: boolean
}

const Layout: React.FC<ILayoutProps> = ({
  theme,
  headerTheme,
  footerTheme,
  children,
  renderHeaderChildren,
  isBlogPage,
  transitionHeader,
}) => {
  return (
    <Provider theme={theme}>
      <ConditionalWrap
        condition={!!headerTheme}
        wrap={c => <Theme theme={headerTheme as colorArgumentType}>{c}</Theme>}
      >
        <Header transitionHeader={transitionHeader} isBlogPage={isBlogPage}>
          {renderHeaderChildren}
        </Header>
      </ConditionalWrap>
      {children}
      <ConditionalWrap
        condition={!!footerTheme}
        wrap={c => <Theme theme={footerTheme as colorArgumentType}>{c}</Theme>}
      >
        <Footer />
      </ConditionalWrap>
    </Provider>
  )
}

export default Layout
