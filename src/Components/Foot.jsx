import React from "react";
import "./Foot.scss";
import Footer from "react-bulma-components/lib/components/footer";
import Level from "react-bulma-components/lib/components/level";
import Columns from "react-bulma-components/lib/components/columns";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSpotify,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Foot = () => {
  return (
    <Footer>
      <Level>
        <Level.Item>
          <Columns>
            <Columns.Column>
              <a
                href="https://github.com/joshua211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="footerIcon" icon={faGithub} />
              </a>
            </Columns.Column>
            <Columns.Column>
              <a
                href="https://www.instagram.com/joshuahillmann/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
              </a>
            </Columns.Column>
            <Columns.Column>
              <a
                href="https://open.spotify.com/user/lyly211?si=XwhQiqtGTzmnaI5_hWn_8Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="footerIcon" icon={faSpotify} />
              </a>
            </Columns.Column>
          </Columns>
        </Level.Item>
      </Level>
      <Columns id="copyrightLevel">
        <Columns.Column>
          Build with {"    "}
          <a href="https://reactjs.org/">React</a>,{" "}
          <a href="https://docs.microsoft.com/de-de/dotnet/core/">.Net Core</a>,{" "}
          <a href="https://bulma.io/">Bulma</a> and{" "}
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />
        </Columns.Column>
        <Columns.Column className="nameTag">
          &copy; Joshua Hillmann
        </Columns.Column>
        <Columns.Column className="toTopLink">
          <AnchorLink href="#home">Back to the top</AnchorLink>
        </Columns.Column>
      </Columns>
    </Footer>
  );
};

export default Foot;
