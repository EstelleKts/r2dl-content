import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="div1"
          className={`${this.props.article === "div1" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Div 1</h2>
          {/* <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span> */}
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSbLusjJ1PvJvQomr3SpZDzwJ31yIYI_4zvDu9GCkY_mYmBLDxZ9eroC-vOXuV2LhE3pIkeOfqG9J31/embed?start=false&loop=false&delayms=2000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          {close}
        </article>

        <article
          id="div2"
          className={`${this.props.article === "div2" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Div 2</h2>
          {/* <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span> */}
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSbLusjJ1PvJvQomr3SpZDzwJ31yIYI_4zvDu9GCkY_mYmBLDxZ9eroC-vOXuV2LhE3pIkeOfqG9J31/embed?start=false&loop=false&delayms=2000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          {close}
        </article>

        <article
          id="div3"
          className={`${this.props.article === "div3" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Div 3</h2>
          {/* <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span> */}
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSbLusjJ1PvJvQomr3SpZDzwJ31yIYI_4zvDu9GCkY_mYmBLDxZ9eroC-vOXuV2LhE3pIkeOfqG9J31/embed?start=false&loop=false&delayms=2000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Div 3</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
