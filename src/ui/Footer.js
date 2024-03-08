import { MediaLinks } from "../features/NavMenu";

function Footer() {
  return (
    <section className="section-footer">
      <footer className="footer">
        <div className="contacts-link">
          <p>Write me:&nbsp;</p>
          <a href="https://t.me/runpy21" target="__blank" className="telegram">
            @runpy21
          </a>
        </div>
        <div className="contacts-link">
          <p>Email:&nbsp;</p>
          <a
            href="mailto:devxander21@gmail.com"
            target="__blank"
            className="gmail"
          >
            devxander21@gmail.com
          </a>
        </div>
        <div className="media-links-footer">
          <MediaLinks></MediaLinks>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
