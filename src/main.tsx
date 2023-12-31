import React from 'react'
import ReactDOM from 'react-dom/client'
import CarRegistration from './components/CarRegistration.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {Provider} from "react-redux"
import {store} from "./reducers/CarReducer.ts"
import {Theme} from "@radix-ui/themes"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme appearance="dark" accentColor="jade" grayColor="sage">
        <CarRegistration/>
      </Theme>
    </Provider>
  </React.StrictMode>,
)
