import "./App.css";
function App() {
  const data = [
    {
      ID: "BasicTechnicalWriting",
      ImageUrl:
        "https://metapercept.com/images/training-certification/Basic-DITA%E2%80%93XML.jpg",
      Name: "Basic Technical Writing",
      ShortDesc:
        "This course focuses on understanding the basics of technical writing and developing technical writing skills. In this course you will learn techniques to analyze writing contexts which helps you to produce effective, clean, and reader-center documents efficiently.",
    },
    {
      ID: "ConfluenceAdvanced",
      ImageUrl:
        "https://metapercept.com/images/training-certification/Advanced-DITA–XML.jpg",
      Name: "Confluence Advanced",
      ShortDesc:
        "This course focuses to ensure your documentation-type content is easy to manage and consume. This skill builder covers useful techniques to surface relevant documentation and standardize your content using templates and blueprints. It includes how to set up a knowledge-base in Confluence for self- service customer support in JIRA Service Desk. It is useful for both Confluence Server Administrators and Confluence Cloud Administrators.",
    },
    {
      ID: "ConfluenceBasic",
      ImageUrl: "images/training-certification/Authoring-Tools.jpg",
      Name: "Confluence Basic",
      ShortDesc:
        "This course guide end users to create their own easy to use and well-formatted content. This Skillbuilder covers templates, page and space structure, and categorization for content governance and discovery. It includes using cases, common/practical examples, best practices, and suggested solutions to structure and display your Confluence space content effectively using built-in features.",
    },
    {
      ID: "XMLAuthor",
      ImageUrl:
        "images/training-certification/Simplified-Technical-English.jpg",
      Name: "XML Author",
      ShortDesc:
        "This course focuses deepen the knowledge in XML Author, in any industry. In this course, you'll learn about writing content in a fully structured and easy–to–use environment optimized for producing valid XML and production of multiple outputs for print and online delivery.",
    },
    {
      ID: "AdvancedTechnicalWriting-API",
      ImageUrl: "images/training-certification/Technical-Writing.jpg",
      Name: "Advanced Technical Writing - API",
      ShortDesc:
        "This course focuses on deepening the knoweldge of technical content deliverable, containing instructions about how to effectively use and integrate with an API. It’s a concise reference manual containing all the information required to work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials and examples.",
    },
    {
      ID: "BasicDITA-XML",
      ImageUrl: "images/training-certification/Authoring-Tools.jpg",
      Name: "Basic DITA-XML",
      ShortDesc:
        "This course focuses on individuals keen to broaden their knowledge or specialize in basic DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA.",
    },
    {
      ID: "AdvancedDITA-XML",
      ImageUrl: "images/training-certification/Basic-DITA–XML.jpg",
      Name: "Advanced DITA-XML",
      ShortDesc:
        "This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA.",
    },
    {
      ID: "xMetaLAuthor",
      ImageUrl: "images/training-certification/Advanced-DITA–XML.jpg",
      Name: "xMetal Author",
      ShortDesc:
        "Learn xMetal for XML based authoring to manage high volume structured content development and management. This training program is meant for the Technical Writers, Technical Authors, and Information Developers, working on high-end documentation for Automobile, Aerospace, Hardware, and Manufacturing business domains.",
    },
    {
      ID: "MadCapFlare",
      ImageUrl: "images/training-certification/Technical-Writing.jpg",
      Name: "MadCap Flare",
      ShortDesc:
        "This course focuses on developing technical writing skills to deepen the knowledge of Madcap Flare for writing specialized content in structured format using DITA-XML and other structured formats. This course use a combination of lectures, demonstrations, and hands-on practice exercises to explore the major features of Flare.",
    },
  ];

  return (
    <div className="App">
      {/* navbar starts here  */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Title
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav " style={{ marginLeft: "1200px" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <button className="btn btn-outline-success" type="submit">
                Button
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar ends here  */}

      {/* title starts here  */}
      <div className="p-3 mb-2 bg-primary text-white text-center my-2">
        <h1>Title</h1>
        <p style={{ width: "500px", margin: "auto" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus
          vel tortor commodo accumsan eget non libero.
        </p>
        <button class="btn btn-light" type="submit">
          Read More
        </button>
      </div>
      {/* title ends here  */}

      {/* classes cards starts  here   */}

      <div className="container mt-5 text-center">
        <h1>Classes</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lectus
          vel tortor commodo accumsan eget non libero.
        </p>
        <div className="row">
          {/* cards start here  */}
          {data.map((el) => (
            <div className="col">
              <div
                className="card my-3 d-flex justify-content-start"
                key={el.ID}
                style={{ width: "18rem" }}
              >
                <img src={el.ImageUrl} className="card-img-top" alt="pic" />
                <div className="card-body ">
                  <h5 className="card-title">{el.Name}</h5>
                  <p className="card-text">{el.ShortDesc}</p>
                  <a href="/" className="btn btn-outline-dark ">
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* card end here  */}
        </div>
      </div>

      {/* classses cards ends here    */}

      {/* footer   */}
      <div className="mt-5">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <p> Cpyright Ⓒ 2021. All Rights Reserved.</p>
            </div>
            <div className="col">
              <button className="btn btn-outline-primary">Back to top</button>
            </div>
          </div>
        </div>
      </div>
      {/* footer ends here  */}
    </div>
  );
}

export default App;
