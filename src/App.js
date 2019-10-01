import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Pages
import Pages from './pages'
import Layout from './Layout'

const App = ({ actions }) => (
  <>
    <Switch>
      <Redirect exact from="/" to="/home" />

      {Object.keys(Pages).map(pageKey => {
        const Page = Pages[pageKey]
        if (pageKey === 'NotFound')
          return <Route key={`page_${pageKey}`} component={Page} />
        return (
          <Route
            key={`page_${pageKey}`}
            path={`/${pageKey}`}
            render={props => {

              // render layout and page
              return (
                <Layout
                  {...props}
                  cPage={props.location.pathname}
                  onClick={props.history.push}
                >
                  <Page {...props} actions={actions} />
                </Layout>
              )
            }}
          />
        )
      })}
    </Switch>
  </>
)

export default App
