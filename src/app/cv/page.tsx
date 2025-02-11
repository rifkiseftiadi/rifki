const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">My Online CV / Portfolio</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        {/* About Section */}
        <section id="about" className="section about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-img">
              <img
                src="/img/profile.jpg"
                alt="Profile Picture"
                className="profile-img"
              />
            </div>
            <div className="profile-info">
              <h3>[Rifki Seftiadi]</h3>
              <p><strong>Mahasiswa Nyalse</strong></p>
              <p>
                I am a passionate web developer with a strong interest in
                creating visually appealing and functional websites. I specialize
                in front-end development, working with technologies such as React,
                Next.js, and JavaScript.
              </p>
              <p>
                I enjoy problem-solving, tackling new challenges, and constantly
                learning to improve my skills.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Node.js, Express.js</li>
            <li>Git, GitHub, Version Control</li>
            <li>REST APIs, GraphQL</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className="section services">
          <h2>Services</h2>
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building modern, responsive, and fast websites using React, Next.js, and other web technologies.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Creating visually appealing and user-friendly interfaces that deliver great user experiences.</p>
          </div>
          <div className="service-card">
            <h3>Consulting</h3>
            <p>Providing technical consulting to help businesses improve their web presence and digital solutions.</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-item">
            <h3>Project 1: E-commerce Website</h3>
            <p>A fully responsive e-commerce website built with React.js and integrated with payment systems.</p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="portfolio-item">
            <h3>Project 2: Portfolio Website</h3>
            <p>This portfolio website showcasing my work, built with Next.js and styled with CSS modules.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="portfolio-item">
            <h3>Project 3: Blog Application</h3>
            <p>A blog application built with Node.js and MongoDB that allows users to create and manage posts.</p>
            <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>If you'd like to get in touch with me, feel free to reach out!</p>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Online CV / Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
