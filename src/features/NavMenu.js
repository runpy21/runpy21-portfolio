import GithubLogo from "../img/mark-github-24.svg";
import LinkedinLogo from "../img/Linkedin.svg";
import FigmaLogo from "../img/Figma.svg";

function MobileNav({ openNav, handleOpenNav }) {
  return (
    <div className="btn-nav" onClick={handleOpenNav}>
      {openNav ? (
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      ) : (
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      )}
    </div>
  );
}

function MediaLinks() {
  return (
    <div className="media-links">
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="github" className="icon" />
      </a>
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={LinkedinLogo} alt="github" className="icon" />
      </a>
      <a href="https://github.com/runpyk" target="_blank" rel="noreferrer">
        <img src={FigmaLogo} alt="github" className="icon" />
      </a>
    </div>
  );
}

export { MobileNav, MediaLinks };
