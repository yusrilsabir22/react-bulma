import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from './logo.svg';
// import {} from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
      <progress className="progress is-large is-info" max="100">60%</progress>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa tempora similique voluptas totam debitis sit, cumque facilis aliquam sequi hic repellendus corrupti ea dicta cupiditate impedit deserunt sint. Adipisci, similique tenetur, laudantium perferendis illum voluptatum non necessitatibus dolorem quaerat officia eos quas fugit quam iusto! Autem commodi reprehenderit dolorum!
              </article>
              <article className="tile is-child box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa tempora similique voluptas totam debitis sit, cumque facilis aliquam sequi hic repellendus corrupti ea dicta cupiditate impedit deserunt sint. Adipisci, similique tenetur, laudantium perferendis illum voluptatum non necessitatibus dolorem quaerat officia eos quas fugit quam iusto! Autem commodi reprehenderit dolorum!
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa tempora similique voluptas totam debitis sit, cumque facilis aliquam sequi hic repellendus corrupti ea dicta cupiditate impedit deserunt sint. Adipisci, similique tenetur, laudantium perferendis illum voluptatum non necessitatibus dolorem quaerat officia eos quas fugit quam iusto! Autem commodi reprehenderit dolorum!
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa tempora similique voluptas totam debitis sit, cumque facilis aliquam sequi hic repellendus corrupti ea dicta cupiditate impedit deserunt sint. Adipisci, similique tenetur, laudantium perferendis illum voluptatum non necessitatibus dolorem quaerat officia eos quas fugit quam iusto! Autem commodi reprehenderit dolorum!
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa tempora similique voluptas totam debitis sit, cumque facilis aliquam sequi hic repellendus corrupti ea dicta cupiditate impedit deserunt sint. Adipisci, similique tenetur, laudantium perferendis illum voluptatum non necessitatibus dolorem quaerat officia eos quas fugit quam iusto! Autem commodi reprehenderit dolorum!
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Hello World</p>
          <p className="subtitle">What is up?</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Foo</p>
          <p className="subtitle">Bar</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Third column</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              <p className="title">Vertical tiles</p>
              <p className="subtitle">Top box</p>
            </article>
            <article className="tile is-child box">
              <p className="title">Vertical tiles</p>
              <p className="subtitle">Bottom box</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Middle box</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png"/>
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Wide column</p>
            <p className="subtitle">Aligned with the right column</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="content">
            <p className="title">Tall column</p>
            <p className="subtitle">With even more content</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Side column</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-8">
        <article className="tile is-child box">
          <p className="title">Main column</p>
          <p className="subtitle">With some content</p>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>

    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </React.Fragment>
  );
}

export default App;
