import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">      
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="Image Gallery Lightbox" />
                  <div className="blog-date">June 4, 2020</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                     Design
                  </h4>
                  <p className="blog-description">
                    Drawing from the information gathered up to this point, it’s time to determine the look and feel of your site. As part of the design phase, it is also important to incorporate elements such as the company logo or colors to help strengthen the identity of your company on the web site.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">Figma</a>, <a href="#">InsCoder</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="Image Gallery Lightbox" />
                  <div className="blog-date">July 9, 2021</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                      Develop
                  </h4>
                  <p className="blog-description">
                    With designs approved, it’s time to flesh out the design of the pages, develop new content and refine old content, create videos, slideshows, podcasts and other media that will appear on the site as well as start to build out the HTML and CSS of the site.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">React.js</a>, <a href="#">Next.js</a>, , <a href="#">Angular.js</a>, , <a href="#">Vue.js</a>, , <a href="#">Laravel</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="Image Gallery Lightbox" />
                  <div className="blog-date">February 11, 2022</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                     Test
                  </h4>
                  <p className="blog-description">
                    Before the site is launched, it will be placed on a production server where only internal audiences and anyone who you share the link with can view it. Testing of the site is critical as there will inevitably be issues that need to be addressed before the site goes live.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">GitHub</a>, <a href="#">SonarSource</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/3.jpg" alt="Image Gallery Lightbox" />
                  <div className="blog-date">June 14, 2023</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                     Launch
                  </h4>
                  <p className="blog-description">
                    The big day. we’ve tested the site, had it reviewed and approved by the project stakeholders, and we’re ready to launch. This stage we Expect to make some immediate changes to the site, such as fixing broken links, editing copy and making adjustments.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">AWS</a>, <a href="#">Vercel</a>, , <a href="#">Firebase</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 3 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
