import GithubButton from "./GithubButton";
import LinkedInButton from "./LinkedInButton";
import ResumeDownloadButton from "./ResumeDownloadButton";

function Contact() {
  return (
    <div className="flex flex-col items-start space-y-5 pt-10 md:absolute md:bottom-10 md:left-10">
      {GithubButton()}
      {LinkedInButton()}
      {ResumeDownloadButton()}
    </div>
  );
}

export default Contact;
