import React from 'react';

export default function Home() {
  const repoReadmeLink = text => (
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ThomasMarcel">{text}</a>
  );

  return (
    <section className="section">
      <div className="container" id="intro">
        <div className="level">
          <div className="level-left">
            <div className="level-item is-inline-grid">
              <div className="is-inline-block">
                <h1 className="title">
                  Thomas ALCALA SCHNEIDER
                </h1>
              </div>
              <div className="is-inline-block">
                <p className="subtitle ">
                  French/Mexican, born in 1985.
                </p>
                <ul>
                  <li>
                    Gentilhomme,
                    eternal learner,
                    pursuer of the tech edge.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="level-right">
            <ul>
              <li>
                <i className="fas fa-at" />
                <a href="mailto:thomas.alcala@gmail.com">
                  thomas.alcala@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone" />
                +1 (210) 984 1789
              </li>
              <li>
                <i className="fab fa-skype" />
                thomas.alcala
              </li>
              <li>
                <i className="fas fa-mouse-pointer" />
                <a href="https://tomalcala.github.io" target="_blank" rel="noopener noreferrer">
                  https://tomalcala.github.io
                </a>
              </li>
              <li>
                <i className="fas fa-mouse-pointer" />
                <a href="https://eevet.com" target="_blank" rel="noopener noreferrer">
                  https://eevet.com
                </a>
              </li>
              <li>
                <i className="fab fa-linkedin" />
                <a href="https://www.linkedin.com/in/talcala" target="_blank" rel="noopener noreferrer">
                  https://www.linkedin.com/in/talcala
                </a>
              </li>
              <li>
                <i className="fab fa-github" />
                {repoReadmeLink('https://github.com/ThomasMarcel')}
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="level is-inline-grid" id="skills">
              <div className="is-margin-bottom-20">
                <h2 className="title has-text-primary">Skills</h2>

                <div className="columns">
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Programming Languages</h3>
                      <ul>
                        <li>Python, Ruby, PHP</li>
                        <li>JavaScript, TypeScript, HTML5, CSS3</li>
                        <li>
                          Frameworks (Django, Flask, Ruby on Rails, Laravel)
                        </li>
                        <li>
                          Frontend Frameworks (Angular, React, Jquery, Bootstrap)
                        </li>
                        <li>Deployment automation (Vagrant, Docker, Ansible)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Project Management</h3>
                      <ul>
                        <li>Team leadership</li>
                        <li>Scrum, Six Sigma, LEAN</li>
                        <li>Project Management software (YouTrack, Jira, Trello)</li>
                        <li>Git workflows, GitFlow</li>
                        <li>Continuous Integration, Continuous Deployment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Systems Administration</h3>
                      <ul>
                        <li>IaaS administration (AWS, Azure, Openshift, Heroku, Google Cloud)</li>
                        <li>Linux administration</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Data</h3>
                      <ul>
                        <li>Machine Learning development</li>
                        <li>Databases administration & development (MongoDB, MySQL, PostgreSQL)</li>
                        <li>Apache Spark administration and development with PySpark</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Third Party Services</h3>
                      <ul>
                        <li>Stripe API</li>
                        <li>
                          API and SDKs (Slack, Facebook, Twitter, Youtube, Google Maps, Salesforce)
                        </li>
                        <li>Digital marketing (Google Analytics, AdWords, massive mailing...)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column">
                    <div />
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Certificates</h3>

                      <ul>
                        <li>AWS – Architecting on AWS, advanced concepts 2014</li>
                        <li>AWS Technical Professional Accreditation 2014</li>
                        <li>AWS Business Professional Accreditation 2014</li>
                        <li>Six Sigma Yellow Belt</li>
                      </ul>
                    </div>

                  </div>
                  <div className="column">
                    <div className="is-margin-bottom-20">
                      <h3 className="subtitle has-text-primary">Courses</h3>

                      <ul>
                        <li>
                          Coursera: Programming Mobile Applications for Android Handheld Systems
                          – Grade achieved: 97.9%
                        </li>
                        <li>Six Sigma: Yellow Belt</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="level is-inline-grid icon-group" id="experience">
              <h2 className="title has-text-danger">Experience</h2>

              <div className="columns">
                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">CTO</h3>
                        <h4 className="subtitle">EEVET</h4>
                        <h4 className="subtitle">December 2016 – Current</h4>
                        <p>
                          (formerly Event Escrow)
                        </p>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Nashville, TN/San Antonio, TX
                          </p>
                          <p className="level-right">
                            <i className="fas fa-mouse-pointer" />
                            <a href="https://eevet.com" target="_blank" rel="noopener noreferrer">
                              https://eevet.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>

                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>
                          Proud alumni of the Project Music accelerator program in the 2017
                          cohort from the Nashville Entrepreneur Center. (Jan 2017 – May 2017)
                        </li>
                        <li>Define the current Tech {"Department's"} workflow</li>
                        <li>Redesign the architecture</li>
                        <li>Design the machine learning platform</li>
                        <li>Redesign the recommendations with the Data Department</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">Lead developer and administrator</h3>
                        <h4 className="subtitle">Event Escrow</h4>
                        <h4 className="subtitle">June 2016 – December 2016</h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Mexico City / San Antonio, TX
                          </p>
                          <p className="level-right">
                            <i className="fas fa-mouse-pointer" />
                            <a href="https://eventescrow.com/" target="_blank" rel="noopener noreferrer">
                              https://eventescrow.com/
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>Write a ticket emission system based on the Blockchain</li>
                        <li>Rewriting the escrow, invoice and arbitration processes</li>
                        <li>Integrate Stripe payment system</li>
                        <li>Revamp the Django backend</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">
                          Senior Software Engineer
                        </h3>
                        <h4 className="subtitle">
                          Parlevel Systems
                        </h4>
                        <h4 className="subtitle">
                          January 2016 – June 2016
                        </h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            San Antonio, TX
                          </p>
                          <p className="level-right">
                            <ul>
                              <li>
                                <i className="fas fa-mouse-pointer" />
                                <a href="https://chowtime.parlevelvms.com" target="_blank" rel="noopener noreferrer">
                                  https://chowtime.parlevelvms.com
                                </a>
                              </li>
                              <li>
                                <i className="fas fa-mouse-pointer" />
                                <a href="http://parlevelsystems.com" target="_blank" rel="noopener noreferrer">
                                  http://parlevelsystems.com
                                </a>
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>Design and write the customer ticketing system</li>
                        <li>Write routing reports with complex SQL queries</li>
                        <li>Start implementing CI</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">
                          Senior Software Engineer, lead developer and administrator
                        </h3>
                        <h4 className="subtitle">
                          SOFTTEK
                        </h4>
                        <h4 className="subtitle">
                          October 2013 – December 2015
                        </h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Mexico City
                          </p>
                          <p className="level-right">
                            <ul>
                              <li>
                                <i className="fas fa-mouse-pointer" />
                                <a href="https://kapx.kaplan.com" target="_blank" rel="noopener noreferrer">
                                  https://kapx.kaplan.com
                                </a>
                              </li>
                              <li>
                                <i className="fas fa-mouse-pointer" />
                                <a href="https://online.classroom.mountwashington.edu" target="_blank" rel="noopener noreferrer">
                                  https://online.classroom.mountwashington.edu
                                </a>
                              </li>
                              <li>
                                <i className="fas fa-mouse-pointer" />
                                <a href="https://opencollege.kaplan.com" target="_blank" rel="noopener noreferrer">
                                  https://opencollege.kaplan.com
                                </a>
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>
                          Design and write the AWS resources auto-scaling for the complete
                          infrasctructure
                        </li>
                        <li>Assist the learning team with internal tools</li>
                        <li>Build communication between the apps and Salesforce</li>
                        <li>Overall app improvements</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">
                          Senior Software Engineer, lead developer and administrator
                        </h3>
                        <h4 className="subtitle">
                          CLICKER 360
                        </h4>
                        <h4 className="subtitle">
                          January 2012 – April 2013
                        </h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Mexico City
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>El Buen Fin: 3M+ daily active users</li>
                        <li>High demand webapps and FB apps design</li>
                        <li>Close integration of social media</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">
                          Senior Software Engineer, Consultant
                        </h3>
                        <h4 className="subtitle">
                          Freelance
                        </h4>
                        <h4 className="subtitle">
                          January 2010 – Current
                        </h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Luxembourg / Mexico City / San Antonio, TX / Nashville, TN
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>Helping entrepreneurs realize their vision</li>
                        <li>Tailor-made solutions matching scale and budget</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="is-margin-bottom-20">
                    <div className="hero is-light is-outlined is-margin-bottom-10">
                      <div className="hero-body">
                        <h3 className="title">
                          Roaming analyst - Automation and support
                        </h3>
                        <h4 className="subtitle">
                          MACH
                        </h4>
                        <h4 className="subtitle">
                          May 2008 – January 2010
                        </h4>
                        <div className="level">
                          <p className="level-left">
                            <i className="fas fa-map-marker" />
                            Luxembourg
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <h4 className="heading has-text-danger">Achievements</h4>
                      <ul>
                        <li>
                          Design and write the alarm system for the global internal infrastructure
                        </li>
                        <li>Lead a small team located in India for alarms monitoring</li>
                        <li>
                          Participation in designing the historical data importation
                          for new customers
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="column">
                  &nbsp;
                </div>
              </div>
            </div>

            <div className="level is-inline-grid" id="works">
              <h1 className="title has-text-success">Development Works</h1>

              <div className="columns">
                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        EEVET
                      </h3>
                      <a href="https://eevet.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://eevet.com
                        </h4>
                      </a>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>Machine Learning</li>
                      <li>Chatbot with Natural Langage Processing</li>
                      <li>Recommendation engine</li>
                      <li>Django REST backend</li>
                      <li>Single page Angular frontend</li>
                    </ul>
                  </p>
                </div>

                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        Event Escrow
                      </h3>
                      <a href="https://eventescrow.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://eventescrow.com
                        </h4>
                      </a>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>Ticketing system working on the Blockchain</li>
                      <li>Payment system on Stripe</li>
                      <li>Escrow funding, fund release, arbitration, invoicing</li>
                    </ul>
                  </p>
                </div>
                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        Parlevel VMS
                      </h3>
                      <a href="https://chowtime.parlevelvms.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://chowtime.parlevelvms.com
                        </h4>
                      </a>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>Service ticket system</li>
                      <li>Recurrence for service tickets</li>
                      <li>Operational and financial reports</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="columns">
                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        Life is Stories
                      </h3>
                      <h4 className="subtitle">
                        Still unpublished
                      </h4>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>Fix poor design and code</li>
                      <li>Book design preview</li>
                      <li>Revamp the complete frontend</li>
                    </ul>
                  </p>
                </div>

                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        KAPx
                      </h3>
                      <a href="https://chowtime.parlevelvms.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://kapx.kaplan.com
                        </h4>
                      </a>
                      <a href="https://chowtime.parlevelvms.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://online.classroom.mountwashington.edu
                        </h4>
                      </a>
                      <a href="https://chowtime.parlevelvms.com" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://opencollege.kaplan.com
                        </h4>
                      </a>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>AWS resources autoscaling</li>
                      <li>Global fixes and enhancements</li>
                      <li>Evaluate and fix accessibility</li>
                    </ul>
                  </p>
                </div>

                <div className="column is-margin-bottom-20">
                  <div className="hero is-light is-outlined is-margin-bottom-10">
                    <div className="hero-body">
                      <h3 className="title">
                        El Buen Fin
                      </h3>
                      <a href="https://www.elbuenfin.org" target="_blank" rel="noopener noreferrer">
                        <h4 className="subtitle">
                          https://www.elbuenfin.org
                          Discontinued until next event
                        </h4>
                      </a>
                    </div>
                  </div>
                  <p>
                    <ul>
                      <li>Architecture, design and code</li>
                      <li>Search engine with a NoSQL DB</li>
                      <li>Scaling for 3M+ daily active users</li>
                      <li>Request caching to minimize resource cost</li>
                    </ul>
                  </p>
                </div>
              </div>

              <p>
                More on&nbsp;
                <b>
                  <a href="https://github.com/ThomasMarcel" target="_blank" rel="noopener noreferrer">
                    https://github.com/ThomasMarcel
                  </a>
                </b> .
              </p>
            </div>

            <div className="level is-inline-grid" id="education">
              <h1 className="title has-text-info">Education</h1>
              <div className="columns">
                <div className="column">
                  <ul>
                    <li>
                      2007 BTS – Informatique de Gestion option Administrateur de réseaux locaux
                      d’entreprise (Network & System Administrator)
                      - Lycée Malraux, Le Mans, FRANCE.
                    </li>
                    <li>
                      2004 DEUST – Informatique Systèmes et Réseaux
                      (computer science, systems and networks) - Université du Maine Le Mans, FRANCE
                    </li>
                    <li>
                      2003 Baccalaureat Sciences Economiques et Sociales
                      (Economical and Social Sciences) – Lycée Montesquieu, Le Mans, FRANCE.
                    </li>
                  </ul>
                </div>

                <div className="column">
                  <h2 className="subtitle has-text-info">
                    Language Skills
                  </h2>

                  <ul>
                    <li>French: mother language</li>
                    <li>Spanish: native</li>
                    <li>English: fluent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
