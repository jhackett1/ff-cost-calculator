import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Assumptions, { Assumption } from "../components/Assumptions"
import Button from "../components/Button"
import ClickToCopy from "../components/ClickToCopy"
import Panel from "../components/Panel"
import ResultsPanel from "../components/ResultsPanel"

import Layout from "../components/_Layout"
import { useProgramme } from "../hooks/useProgramme"
import useStoredProgramme from "../hooks/useStoredProgramme"

const ResultsPage = () => {
  const { storeProgramme, programme: newProgramme } = useProgramme()
  const push = useNavigate()
  const { publicId } = useParams()

  // TODO: refactor so we only call this when id exists
  const { data: storedProgramme } = useStoredProgramme(publicId as string)

  // const programme = storedProgramme || newProgramme

  useEffect(() => {
    if (!publicId && newProgramme.projects.length > 0) {
      storeProgramme().then(result =>
        push(`/results/${result?.publicId}`, { replace: true })
      )
    }
  }, [newProgramme.projects, publicId, push, storeProgramme])

  return (
    <Layout title="Your estimate">
      <ResultsPanel />

      <Panel>
        <Assumptions>
          <Assumption
            icon={
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#F2F2F2" />
                <path
                  d="M31.9907 30.9724C37.4497 30.9724 41.8751 26.7481 41.8751 21.5372C41.8751 16.3263 37.4497 12.1021 31.9907 12.1021C26.5316 12.1021 22.1062 16.3263 22.1062 21.5372C22.1062 26.7481 26.5316 30.9724 31.9907 30.9724Z"
                  fill="#CCCBC3"
                />
                <path
                  d="M31.908 52.3534C40.796 52.3534 48 46.2967 48 44.2121C48 40.8444 43.8596 35.9979 37.9858 33.8473C36.1858 34.8551 34.1134 35.4321 31.9075 35.4321C29.7021 35.4321 27.6302 34.8551 25.8293 33.8473C19.9564 35.9974 15.816 40.8444 15.816 44.2121C15.816 46.2967 23.0209 52.3534 31.908 52.3534Z"
                  fill="#CCCBC3"
                />
              </svg>
            }
          >
            <h3>About your results</h3>
            <p>
              Short description of the assumption being made, with a{" "}
              <a href="http://example.com">supporting link</a>.
            </p>
          </Assumption>
          <Assumption
            icon={
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#F2F2F2" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6444 44.3654C11.5035 45.2115 12.8965 45.2115 13.7556 44.3654L25.4888 32.8099L33.8383 40.1194C34.7295 40.8996 36.0896 40.8385 36.9049 39.9818L49.6 26.6457V28.75C49.6 29.9467 50.5849 30.9167 51.8 30.9167C53.0151 30.9167 54 29.9467 54 28.75V21.1667C54 19.97 53.0151 19 51.8 19H44.1C42.8849 19 41.9 19.97 41.9 21.1667C41.9 22.3633 42.8849 23.3333 44.1 23.3333H46.722L35.1603 35.4788L26.8616 28.214C25.991 27.4518 24.668 27.4901 23.8444 28.3013L10.6444 41.3013C9.78521 42.1474 9.78521 43.5193 10.6444 44.3654Z"
                  fill="#CCCBC3"
                />
              </svg>
            }
          >
            <h3>Another assumption</h3>
            <p>
              Short description of the assumption being made, without a
              supporting link.
            </p>
          </Assumption>
          <Assumption
            icon={
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z"
                  fill="#F2F2F2"
                />
                <path
                  d="M51.0707 28.8532L47.0581 27.755C46.4667 26.3611 46.2133 25.7698 45.6642 24.3337L47.7339 20.7012C48.0296 20.1943 47.9451 19.5607 47.5227 19.1806L44.8194 16.4773C44.397 16.0549 43.7635 15.9704 43.2988 16.2661L39.6663 18.3358C38.2724 17.7445 37.6811 17.491 36.245 16.9419L35.1468 12.9293C34.9778 12.3801 34.471 12 33.9219 12H30.0781C29.4868 12 28.9799 12.3801 28.8532 12.9293L27.755 16.9419C26.3611 17.5333 25.7698 17.7867 24.3337 18.3358L20.7012 16.2661C20.1943 15.9704 19.5607 16.0549 19.1806 16.4773L16.4773 19.1806C16.0549 19.603 15.9704 20.2365 16.2661 20.7012L18.3358 24.3337C17.7445 25.7276 17.491 26.3189 16.9419 27.755L12.9293 28.8532C12.3801 29.0222 12 29.529 12 30.0781V33.9219C12 34.5132 12.3801 35.0201 12.9293 35.1468L16.9419 36.245C17.5333 37.6389 17.7867 38.2302 18.3358 39.6663L16.2661 43.2988C15.9704 43.8057 16.0549 44.4393 16.4773 44.8194L19.1806 47.5227C19.603 47.9451 20.2365 48.0296 20.7012 47.7339L24.3337 45.6642C25.7276 46.2555 26.3189 46.509 27.755 47.0581L28.8532 51.0707C29.0222 51.6198 29.529 52 30.0781 52H33.9219C34.5132 52 35.0201 51.6198 35.1468 51.0707L36.245 47.0581C37.6389 46.4667 38.2302 46.2133 39.6663 45.6642L43.2988 47.7339C43.8057 48.0296 44.4393 47.9451 44.8194 47.5227L47.5227 44.8194C47.9451 44.397 48.0296 43.7635 47.7339 43.2988L45.6642 39.6663C46.2555 38.2724 46.509 37.6811 47.0581 36.245L51.0707 35.1468C51.6198 34.9778 52 34.471 52 33.9219V30.0781C52 29.529 51.6198 29.0222 51.0707 28.8532Z"
                  fill="#CCCBC3"
                />
                <path
                  d="M43 32C43 38.0751 38.0751 43 32 43C25.9249 43 21 38.0751 21 32C21 25.9249 25.9249 21 32 21C38.0751 21 43 25.9249 43 32Z"
                  fill="#F2F2F2"
                />
              </svg>
            }
          >
            <h3>Third assumption headline</h3>
            <p>
              Short description of the assumption being made, with a{" "}
              <a href="http://example.com">supporting link</a>.
            </p>
          </Assumption>
        </Assumptions>
      </Panel>

      {publicId && (
        <Panel title="Share results" colour="yellow">
          <p>Found this useful? Why not share with a colleague:</p>
          <ClickToCopy text={window.location.href} />
          <p>
            Or <a href="/">share by email</a>.
          </p>
        </Panel>
      )}

      <Panel title="Download" colour="yellow">
        <p>You can also download your results as a spreadsheet (CSV).</p>
        <Button
          secondary
          icon={
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
              <path
                d="M2.25736 8L6.5 12.2426L10.7426 8"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 1V12"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 14L11.5 14"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Download CSV
        </Button>
      </Panel>
    </Layout>
  )
}

export default ResultsPage
