import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  const repoReadmeLink = text => (
    <b>{text}</b>
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
                    Looking for challenges.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="level-right">
            <ul>
              <li>
                <i className="fas fa-phone" />
                +1 (210) 984 1789
              </li>
              <li>
                <i className="fas fa-at" />
                thomas.alcala@gmail.com
              </li>
              <li>
                <i className="fab fa-skype" />
                thomas.alcala
              </li>
              <li>
                <i className="fas fa-mouse-pointer" />
                https://tomalcala.com/
              </li>
              <li>
                <i className="fas fa-mouse-pointer" />
                https://eevet.com
              </li>
              <li>
                <i className="fab fa-linkedin" />
                https://www.linkedin.com/in/talcala
              </li>
              <li>
                <i className="fab fa-github" />
                https://tomalcala.github.io
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth has-text-centered summary">
            <ul>
              <li>
                <a href="#skills" className="button is-outlined is-primary is-rounded">Skills</a>
              </li>
              <li>
                <a href="#experience" className="button is-outlined is-danger is-rounded">Experience</a>
              </li>
              <li>
                <a href="#works" className="button is-outlined is-success is-rounded">Works</a>
              </li>
              <li>
                <a href="#education" className="button is-outlined is-info is-rounded">Education</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="level is-inline-grid" id="skills">
              <div className="is-margin-bottom-20">
                <h2 className="title has-text-primary">Skills</h2>

                <ul>
                  <li>Python full stack development and scripting (Django, Flask)</li>
                  <li>Ruby full stack development and scripting (Ruby on Rails)</li>
                  <li>Angular, React single page application frameworks development with TypeScript, JavaScript, ES6+, JSX, etc</li>
                  <li>Project Management software (YouTrack, Jira, Trello)</li>
                  <li>Frontend development with Jquery</li>
                  <li>Frontend development HTML5 CSS3, LESS and SCSS</li>
                  <li>Bootstrap, Material, Bulma frontend frameworks development</li>
                  <li>PHP full stack development (Laravel, Moodle, Wordpress)</li>
                  <li>IaaS administration (AWS, Azure, Openshift, Heroku, Google Cloud)</li>
                  <li>Linux administration</li>
                  <li>Databases administration & development (MongoDB, MySQL, PostgreSQL)</li>
                  <li>Stripe API development</li>
                  <li>Facebook App development with Facebook API and SDKs</li>
                  <li>Development with API and SDK (Slack, Facebook, Twitter, Youtube, Foursquare, Google Maps)</li>
                  <li>Knowledge in Salesforce (for Business Intelligence and as a developer with its API and SDK)</li>
                  <li>Administration and usage of version control solutions (Git, CVS, SVN)</li>
                  <li>Knowledge in digital marketing (Google Analytics, AdWords, massive mailing...) and development of a “smart” CRM (consolidating existing data) with API for implementation</li>
                  <li>Computer-assisted design (GIMP, Photoshop), WEB design</li>
                </ul>
              </div>

              <div className="is-margin-bottom-20">
                <h3 className="subtitle">CERTIFICATES</h3>

                <ul>
                  <li>AWS – Architecting on AWS, advanced concepts 2014</li>
                  <li>AWS Technical Professional Accreditation 2014</li>
                  <li>AWS Business Professional Accreditation 2014</li>
                  <li>Six Sigma Yellow Belt</li>
                </ul>
              </div>

              <div className="is-margin-bottom-20">
                <h3 className="subtitle">COURSES</h3>

                <ul>
                  <li>Coursera: Programming Mobile Applications for Android Handheld Systems – Grade achieved: 97.9%</li>
                  <li>Six Sigma: Yellow Belt</li>
                </ul>
              </div>
            </div>

            <div className="level is-inline-grid icon-group" id="experience">
              <h2 className="title has-text-danger">EXPERIENCE</h2>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
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
                        https://eevet.com
                      </p>
                    </div>
                  </div>
                </div>

                <p>EEVET is an Artificial Intelligence that can book show. She can predict the success of a given show, give recommendations on who to book and where, take feedback for machine learning to be able to give better recommendations, hold money in escrow, and a number of other features.</p>

                <p>Proud alumni of the Project Music accelerator program in the 2017 cohort from the Nashville Entrepreneur Center. (Jan 2017 – May 2017)</p>

                <p>
                  As the CTO, my main tasks are to:
                  <ul>
                    <li>Design the strategic plan for the platform</li>
                    <li>Design the machine learning platform from the ground up</li>
                    <li>Supervise a team of employees and contractors while working on the newest features</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
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
                        https://eventescrow.com/
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The Event Escrow platform helps event organizers, venues, promoters, artists, sound/power/light engineers organize events, send and accept bids, invoice, etc
                </p>
                <p>
                  As one of the senior developers, my main tasks were to:
                  <ul>
                    <li>Write new features in Python using the Django framework.</li>
                    <li>Rewriting the whole escrow, invoice and arbitration processes and integrate them with Stripe</li>
                    <li>Fix existing features</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Senior Software Engineer
                    </h3>
                    <h4 className="subtitle">
                      Parlevel SYSTEMS
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
                            https://chowtime.parlevelvms.com
                          </li>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            http://parlevelsystems.com
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The VMS (Vending Management System) helps big and small vending machine owners grow their business by machine items and stock optimization, maintenance route optimal calculation, and a lot of financial and operational statistics and tools.
                </p>
                <p>
                  As one of the senior developers, my main tasks were to:
                  <ul>
                    <li>Write new features in PHP using the Laravel framework.</li>
                    <li>Build complex SQL queries for statustics purpose</li>
                    <li>Be ready to respond to problem reports by the support team on Slack or by phone to take action quickly</li>
                    <li>Be the point of contact in the development team for the support team one day per week, so the other members could focus on developing new features.</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
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
                            https://kapx.kaplan.com
                          </li>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            https://online.classroom.mountwashington.edu
                          </li>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            https://opencollege.kaplan.com
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  With a small team of developers, we took over Kaplan's existing app KAPx and became in charge of enhancements, maintenance and support.
                </p>
                <p>
                  KAPx is a complex infrastructure composed of four Python apps hosted in Google App Engine and an AWS infrastructure with Linux instances hosting webservers serving Moodle applications, some databases and large storage systems.
                </p>
                <p>
                  As the lead developer, my main tasks were to:
                  <ul>
                    <li>Write new features in Python for the Google App Engine apps.</li>
                    <li>Manage the AWS infrastructure</li>
                    <li>Enforce a deployment process across three environments (development, stage and production)</li>
                    <li>Approve enhancements and fixes and promote them to higher environments</li>
                    <li>Write enhancements and fixes in PHP for the Moodle code base that is deployed across all Moodle instances</li>
                    <li>Manage all Google App Engine apps (site, identity, courses and data collection * three environments, so 12 actual apps)</li>
                    <li>Proactively write enhancements and prevent possible issues</li>
                    <li>Maintain the data across all elements of the infrastructure and also between KAPx and other applications it interacts with (Salesforce, Orion)</li>
                    <li>Level 3 support</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
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
                      <p className="level-right">
                        <ul>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            https://kapx.kaplan.com
                          </li>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            https://online.classroom.mountwashington.edu
                          </li>
                          <li>
                            <i className="fas fa-mouse-pointer" />
                            https://opencollege.kaplan.com
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  With a small team of developers, we made a new app per projects, more than 20
                </p>
                <p>
                  Clicker 360 is a digital marketing company. It builds its clients' projects or offer project ideas, build a design mockup, write the application and depending on the project, managing registrations, ad words and other marketing campaigns, publications and social media content.
                </p>
                <p>
                  As the lead developer my main tasks were to:
                  <ul>
                    <li>Choose the best suited tools for the project (programming language, framework, hosting) based on requirements and expected visitor traffic and behavior</li>
                    <li>Design applications architecture</li>
                    <li>Build we applications from scratch or with a framework (WordPress, CakePHP, Django, etc)</li>
                    <li>Integrate design mockups as  interactive templates</li>
                    <li>Manage infrastructures and databases</li>
                    <li>Write internal tools for projects follow up</li>
                    <li>Integrate existing marketing tools and write new tools for client management</li>
                    <li>Quality Assurance testing</li>
                    <li>Close integration of social media</li>
                    <li>Create facebook apps, twitter apps, and social media integration tools</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Senior Software Engineer, lead developer and administrator
                    </h3>
                    <h4 className="subtitle">
                      FREELANCE WEB APPLICATIONS DEVELOPMENT AND ADMINISTRATION, NETWORKS AND SYSTEMS ADMINISTRATION AND CONSULTING
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
                  Undertaking a number of freelance jobs as a main activity or as on the side jobs on free time 
                </p>
                <p>
                  As the lead developer my main tasks were to:
                  <ul>
                    <li>Choose the best suited tools for the project (programming language, framework, hosting) based on requirements and expected visitor traffic and behavior</li>
                    <li>Design applications architecture</li>
                    <li>Build we applications from scratch or with a framework (Ruby on Rails, WordPress, Django, etc)</li>
                    <li>Take over existing applications to write new features, fix them or rebuild them</li>
                    <li>Manage infrastructures and databases</li>
                    <li>Quality Assurance testing</li>
                    <li>Close integration of social media</li>
                    <li>Create facebook apps, twitter apps, and social media integration tools</li>
                    <li>Hardware infrastructure architecture</li>
                    <li>Installation and administration of networks and servers</li>
                  </ul>
                  Main customers: Cultura Latina, Life is Stories, La Sfida, Minois
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
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
                  As part of the three big players in the roaming data clearing industry (now absorbed by its main competitor Syniverse), our team was expert at roaming process, as well as infrastructure administrators in charge of the infrastructure's health, enhancements, monitoring
                </p>
                <p>
                  As one of the specialists, my main tasks were to:
                  <ul>
                    <li>Give internal assessment on roaming</li>
                    <li>Write the whole alarms system for the global internal infrastructure</li>
                    <li>Lead a small team located in India for alarms monitoring</li>
                    <li>Write automation scripts</li>
                    <li>Write a whole system on top of existing tools to import batches of years of hisorical data from new clients</li>
                    <li>Write complex reports in Oracle PL/SQL for Business Intelligence</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Networks and systems administrator and level 2 supporter
                    </h3>
                    <h4 className="subtitle">
                      SIEMENS
                    </h4>
                    <h4 className="subtitle">
                      July 2007 – February 2008
                    </h4>
                    <div className="level">
                      <p className="level-left">
                        <i className="fas fa-map-marker" />
                        Cork, IRELAND
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  As part of a team dedicated to the internal infrastructure, our role was to assist the marketing and development teams.
                </p>
                <p>
                  As one of the administrators, my main tasks were to:
                  <ul>
                    <li>Manage Active Directory, IIS, DNS servers for internal teams</li>
                    <li>Manage internal user's accounts on Active Directory</li>
                    <li>Give level 2 support to internal users</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Software engineer, networks and systems administrator
                    </h3>
                    <h4 className="subtitle">
                      Cultura Latina
                    </h4>
                    <h4 className="subtitle">
                      Summer 2007
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
                  Cultura Latina promotes the latino culture in Luxembourg. I was part of it during this time period to provide a solid infrastructure. There was a big event all summer long which created a lot of activity for the association.
                </p>
                <p>
                  As the lead software engineer and systems administrators, my main tasks were to:
                  <ul>
                    <li>Create and manage the networks and systems infrastructure</li>
                    <li>Build a portal (web application) for external and internal purpose</li>
                    <li>Write scripts for internal use to automate organizational tasks</li>
                    <li>Write complex reports for Business Intelligence</li>
                    <li>Lead the interns and assign them tasks fit for their knowledge and could offer undertakable challenge</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Networks and systems administrator (intern)
                    </h3>
                    <h4 className="subtitle">
                      Trasys
                    </h4>
                    <h4 className="subtitle">
                      2007 internship
                    </h4>
                    <div className="level">
                      <p className="level-left">
                        <i className="fas fa-map-marker" />
                        Brussels, BELGIUM
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  As part of a team dedicated to the internal infrastructure, our role was to maintain the infrastructure that all the people in the company was using, employees working internally as well as employees working on projects for clients
                </p>
                <p>
                  As one of the administrators, my main tasks were to:
                  <ul>
                    <li>Build a master users administration system based on LDAP to manage systems administrator accounts as well as system users (also the topic of my thesis)</li>
                    <li>Set up a gray list system against email spamming for the company's email system in place</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Networks and systems administrator (intern)
                    </h3>
                    <h4 className="subtitle">
                      Onlinedev
                    </h4>
                    <h4 className="subtitle">
                      2006 internship
                    </h4>
                    <div className="level">
                      <p className="level-left">
                        <i className="fas fa-map-marker" />
                        Bucharest, ROMANIA
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  ONLINEDEV writes applications for its clients as work on its own projects, at that time there was an online poker application and an online chat application
                </p>
                <p>
                  As one of the administrators, my main tasks were to:
                  <ul>
                    <li>Manage the company's network infrastructure</li>
                    <li>Manage all DHCP, DNS, Mail servers</li>
                    <li>Move the whole infrastructure to a new office</li>
                  </ul>
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-danger is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Software Developer (intern)
                    </h3>
                    <h4 className="subtitle">
                      Movimiento Latino
                    </h4>
                    <h4 className="subtitle">
                      2005 internship
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
                  Design and build the organization's website
                </p>
                <p>
                  As software developer my main tasks were to:
                  <ul>
                    <li>Design the website</li>
                    <li>Design the database infrastructure</li>
                    <li>Write a PHP framework</li>
                    <li>Build the website</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="level is-inline-grid" id="works">
              <h1 className="title has-text-success">Development works</h1>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      EEVET
                    </h3>
                    <h4 className="subtitle">
                      https://eevet.com
                    </h4>
                  </div>
                </div>
                <p>
                  Design the machine learning platform, write the core of it, integrate natural langage processing, a recommendation engine. Work with the Chief Data Officer to make the recommender more accurate.
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Event Escrow
                    </h3>
                    <h4 className="subtitle">
                      https://eventescrow.com
                    </h4>
                  </div>
                </div>
                <p>
                  Move payment system from Braintree to Stripe, rewrite the escrow funding, release, arbitration, invoice features and integrate them with Stripe. Fix critical Django application issues with the database structure, migrations and user registration. Fix development environment stack and stage environment. Technologies : Python, Django, Shell Scripting, Ansible, vagrant, PosgreSQL, Jquery, etc.
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Parlevel VMS
                    </h3>
                    <h4 className="subtitle">
                      https://chowtime.parlevelvms.com
                    </h4>
                  </div>
                </div>
                <p>
                  The VMS (Vending Management System). Participation in the service ticket feature writing, owner of the recurrence feature for service tickets with a cronjob-like system made easy to configure. Owner of a few operational and financial reports, other reports enhancements, and a lot of bug fixing in the whole VMS. Technologies : PHP with the Laravel Framework, Shell scripting, Python scripting, MySQL scripting, Bootstrap CSS, AngularJS, jquery, etc.
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
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
                  Biography writing made easy, the web application guides you through the process of writing a book with tips and hints for chapters, cover and chapter pictures upload, a large template selection, preview of your book, with the objective for the user to receive a hard cover book. Technologies : Ruby on Rails, Jquery, MySQL, Linux server administration, Stripe API, Boostrap CSS Framework, several jquery plugins for drag and drop, book preview with page turning (turn.js), etc.
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      KAPx
                    </h3>
                    <h4 className="subtitle">
                      https://kapx.kaplan.com, https://online.classroom.mountwashington.edu, https://opencollege.kaplan.com
                    </h4>
                  </div>
                </div>
                <p>
                  Global online learning platform, participation in maintenance, enhancement and support. Technologies : Python, Google App Engine and its datastore, AWS, PHP/MySQL, Moodle, Frontend web development, social networks API, Salesforce API
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      El Buen Fin 2012
                    </h3>
                    <h4 className="subtitle">
                      https://www.elbuenfin.org
                      Discontinued until next event
                    </h4>
                  </div>
                </div>
                <p>
                  Development in python of all the search engine and also of the API for the mobile app, and part of the website in go.  Technologies : python, go, Google App Engine and its datastore NoSQL, Jquery, Facebook API, Twitter API
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Deseos 2013
                    </h3>
                    <h4 className="subtitle">
                      https://apps.facebook.com/miseleccion-deseos
                    </h4>
                  </div>
                </div>
                <p>
                  Discontinued. App Facebook for the mexican national soccer team which allowed users to write a message and vote for messages and share them on their social networks, prizes were official shirts firmed by players.  Technologies : PHP/MySQL, Jquery, Facebook API and Twitter API
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Jackpot
                    </h3>
                    <h4 className="subtitle">
                      https://apps.facebook.com/carlsjr-jackpot/
                    </h4>
                  </div>
                </div>
                <p>
                  App Facebook for the Fast Food franchise Carl's Jr. , to gather information about users via Facebook offering them a chance to win gift certificates. Technologies : PHP/MySQL, Jquery, Facebook API and Twitter API
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      Artisan location interactive vectorial map
                    </h3>
                    <h4 className="subtitle">
                      http://www.fomentoculturalbanamex.org/gmap/ramas-artesanales
                    </h4>
                  </div>
                </div>
                <p>
                  Technologies : Jquery with Raphael library, image processing withGIMP and Inkscape for the vectors
                </p>
              </div>

              <div className="is-margin-bottom-20">
                <div className="hero is-success is-outlined is-margin-bottom-10">
                  <div className="hero-body">
                    <h3 className="title">
                      More on https://github.com/ThomasMarcel .
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="level is-inline-grid" id="education">
              <h1 className="title has-text-info">EDUCATION</h1>
              <ul>
                <li>2007 BTS – Informatique de Gestion option Administrateur de réseaux locaux d’entreprise (Network & System Administrator) - Lycée Malraux, Le Mans, FRANCE.</li>
                <li>2004 DEUST – Informatique Systèmes et Réseaux (computer science, systems and networks) - Université du Maine Le Mans, FRANCE</li>
                <li>2003 Baccalaureat Sciences Economiques et Sociales (Economical and Social Sciences) – Lycée Montesquieu, Le Mans, FRANCE.</li>
              </ul>

              <h2 className="subtitle has-text-info">
                LANGUAGE SKILLS
              </h2>

              <ul>
                <li>French: mother language</li>
                <li>Spanish: native</li>
                <li>English: written- fluent, spoken- fluent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
