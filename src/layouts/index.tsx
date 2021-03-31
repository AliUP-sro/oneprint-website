import * as React from 'react'

import Helmet from 'react-helmet'
import styled from 'styled-components'

import './normalize.css'
import './main.css'

const Wrapper = styled.div``

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Helmet
        title="onePRINT"
        meta={[
          { name: 'description', content: 'onePRINT webové prezentace' },
          { name: 'keywords', content: 'oneprint, one, print' },
        ]}
        link={[
          {
            href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300,400;500;600;700&display=swap',
            type: 'stylesheet'
          }
        ]}
      />
      {children}
    </Wrapper>
  )
}


export default Layout
