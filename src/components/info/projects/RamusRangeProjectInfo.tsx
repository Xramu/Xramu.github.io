import RamusRangeBanner from "../../../img/ramus_range/RamusRangeBanner.jpg"
import Mahiro from "../../../img/mahiro.png"
import TestImageHorizontal from "../../../img/test_images/test_image_horizontal.png"
import TestImageHorizontalLong from "../../../img/test_images/test_image_horizontal_long.png"
import TestImageVertical from "../../../img/test_images/test_image_vertical.png"
import TestImageVerticalLong from "../../../img/test_images/test_image_vertical_long.png"
import ProjectInfoDropdownBox from "../ProjectInfoDropdownBox"
import { StringReactNodePair } from "../../../utils/Types"
import ProjectTitle from "../ProjectTitle"
import ProjectSummary from "../ProjectSummary"
import MediaPreview from "../../media/MediaPreview"
import MediaPreviewImageItem from "../../media/MediaPreviewImageItem"
import MediaPreviewYoutubeItem from "../../media/MediaPreviewYoutubeItem"

// Project Videos

const projectVideoUrlStrings = [
  "https://www.youtube.com/embed/PiHyEHoeFao?si=Gwx9oMGYv4x3O2H5",
  "https://www.youtube.com/embed/SmYlYPNIFCQ?si=CBqLcSLthYP1k4_k",
]

// Component export

function RamusRangeProjectInfo() {
  // Info Tabs of this project

  const detailsInfoSet: StringReactNodePair = {
    string: "Details",
    node: (
      <p>
        This project is fully programmed by me using C# and VRChat's exposed
        Unity API.
        <br />
        The experience has been visited over 600,000 times and is available for
        anyone who has access to VRChat.
        <br />
        The world can be found{" "}
        <a href="https://vrchat.com/home/launch?worldId=wrld_9870aa37-916c-4e90-ba71-b8703c8204b3">
          Here
        </a>{" "}
        or through VRChat's in-game world search.
      </p>
    ),
  }

  const codeInfoSet: StringReactNodePair = {
    string: "Code",
    node: (
      <p>
        I heavily use object-oriented programming (
        <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">
          OOP
        </a>
        ) for sharing functionality between different guns and challenges
        <br />
        Total length of the written code exceeds over 20,000 lines including
        comments and summaries.
      </p>
    ),
  }

  const environmentInfoSet: StringReactNodePair = {
    string: "Environment",
    node: (
      <p>
        The environment and lighting is fully set up and made by me using
        Unity's baked lighting, baked reflections and occlusion culling.
        <br />
        For modelling the environment and small furniture sets, I used Unity's
        ProBuilder package.
      </p>
    ),
  }

  const gunsAndModelsInfoSet: StringReactNodePair = {
    string: "Assets",
    node: (
      <p>
        3D gun models are bought from{" "}
        <a href="https://tomcattoybox.booth.pm/">Tomcat's Booth Store.</a>
        <br />
        All of the audio is{" "}
        <a href="https://creativecommons.org/public-domain/cc0/">CC0</a>{" "}
        licensed downloaded from{" "}
        <a href="https://freesound.org/">Freesound.org</a>
      </p>
    ),
  }

  return (
    <>
      <ProjectTitle>Ramu's Gun Range</ProjectTitle>

      <ProjectSummary>
        Ramu's Gun Range is an interactive VRChat shooting range experience with
        detailed gunplay and functionality created with Unity and C#.
      </ProjectSummary>

      <MediaPreview>
        <MediaPreviewImageItem
          src={RamusRangeBanner}
          alt="Banner of Ramu's Gun Range"
        >
          <p>Banner of the Gun Range Experience</p>
        </MediaPreviewImageItem>
        <MediaPreviewImageItem src={TestImageHorizontal}>
          <p>1920x1080 Image</p>
        </MediaPreviewImageItem>
        <MediaPreviewImageItem src={TestImageHorizontalLong}>
          <p>3840x1080 Image</p>
        </MediaPreviewImageItem>
        <MediaPreviewImageItem src={TestImageVertical}>
          <p>1080x1920 Image</p>
        </MediaPreviewImageItem>
        <MediaPreviewImageItem src={TestImageVerticalLong}>
          <p>1080x3840 Image</p>
        </MediaPreviewImageItem>
        <MediaPreviewImageItem src={Mahiro} alt="Banner of Ramu's Gun Range">
          <p>Test Image of Mahiro Thinking</p>
        </MediaPreviewImageItem>
        {projectVideoUrlStrings.map((urlString) => (
          <MediaPreviewYoutubeItem key={urlString} url={new URL(urlString)} />
        ))}
      </MediaPreview>

      <ProjectInfoDropdownBox
        tileInfoSets={[
          detailsInfoSet,
          codeInfoSet,
          environmentInfoSet,
          gunsAndModelsInfoSet,
        ]}
      />
    </>
  )
}

export default RamusRangeProjectInfo
