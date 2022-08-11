import { NextPage } from "next";
import defaultstyles from "../styles/default-layout.module.css";

interface ErrorPageProps {
  statusCode?: number;
}
const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div className={defaultstyles.container}>
      <div className={defaultstyles.bannertop}></div>
      <main className={defaultstyles.main}>
        <div className={defaultstyles.title}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </div>
      </main>
      <footer className={defaultstyles.footer}></footer>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
