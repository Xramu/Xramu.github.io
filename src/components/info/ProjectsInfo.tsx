import React from "react"
import HorizontalLine from "../HorizontalLine"

import RamusRangeProjectInfo from "./projects/RamusRangeProjectInfo"
import CharControllerProjectInfo from "./projects/CharControllerProjectInfo"
import GithubPageProjectInfo from "./projects/GithubPageProjectInfo"
import YahtzeeAppProjectInfo from "./projects/YahtzeeAppProjectInfo"
import { useTranslation } from "react-i18next"

function ProjectsInfo() {
  return (
    <>
      <h1>Unity Projects</h1>

      <HorizontalLine />

      <RamusRangeProjectInfo />

      <HorizontalLine />

      <CharControllerProjectInfo />

      <HorizontalLine />

      <h1>React Projects</h1>

      <HorizontalLine />

      <GithubPageProjectInfo />

      <HorizontalLine />

      <YahtzeeAppProjectInfo />

      <HorizontalLine />
    </>
  )
}

export default ProjectsInfo
