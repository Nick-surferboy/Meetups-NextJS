const { Fragment } = require("react");
import  Link  from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/news/great">NextJS is a great</Link>
        </li>
        <li>A new thing</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
