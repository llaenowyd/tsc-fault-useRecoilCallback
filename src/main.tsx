import "./baseline.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { RecoilRoot } from "recoil"

import SlotMachine from "./SlotMachine"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense>
        <SlotMachine />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
)
