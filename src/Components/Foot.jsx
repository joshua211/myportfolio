import React from "react";
import "./Foot.scss";
import Footer from "react-bulma-components/lib/components/footer";
import Level from "react-bulma-components/lib/components/level";
import Columns from "react-bulma-components/lib/components/columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faSpotify,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Icon from "react-bulma-components/lib/components/icon";

const Foot = () => {
  return (
    <Footer>
      <Level>
        <Level.Item>
          <Columns>
            <Columns.Column>
              <a href="https://github.com/joshua211" target="_blank">
                <FontAwesomeIcon className="footerIcon" icon={faGithub} />
              </a>
            </Columns.Column>
            <Columns.Column>
              <a
                href="https://www.instagram.com/joshuahillmann/"
                target="_blank"
              >
                <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
              </a>
            </Columns.Column>
            <Columns.Column>
              <a
                href="https://open.spotify.com/user/lyly211?si=XwhQiqtGTzmnaI5_hWn_8Q"
                target="_blank"
              >
                <FontAwesomeIcon className="footerIcon" icon={faSpotify} />
              </a>
            </Columns.Column>
          </Columns>
        </Level.Item>
      </Level>
    </Footer>
  );
};

export default Foot;
