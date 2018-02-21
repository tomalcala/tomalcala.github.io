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
                    <h4 className="subtitle">June 2016 – Current</h4>
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

                EEVET is an Artificial Intelligence that can book show. She can predict the success of a given show, give recommendations on who to book and where, take feedback for machine learning to be able to give better recommendations, hold money in escrow, and a number of other features.

                Proud alumni of the Project Music accelerator program in the 2017 cohort from the Nashville Entrepreneur Center. (Jan 2017 – May 2017)

                As the CTO, my main tasks are to:
                • Design the strategic plan for the platform
                • Design the machine learning platform from the ground up
                • Supervise a team of employees and contractors while working on the newest features
              </div>

              6. Event Escrow
              June 2016 – Current
              Mexico City/San Antonio, TX
              CTO, lead developer and administrator (https://eventescrow.com/)

              The Event Escrow platform helps event organizers, venues, promoters, artists, sound/power/light engineers organize events, send and accept bids, invoice, etc
              As one of the senior developers, my main tasks were to:
              • Write new features in Python using the Django framework.
              • Rewriting the whole escrow, invoice and arbitration processes and integrate them with Stripe
              • Fix existing features

              7. Parlevel SYSTEMS
              February 2016 – May 2016
              San Antonio, TX
              Senior Software Engineer, lead developer and administrator assigned to the Parlevel VMS project (https://chowtime.parlevelvms.com, http://parlevelsystems.com)

              The VMS (Vending Management System) helps big and small vending machine owners grow their business by machine items and stock optimization, maintenance route optimal calculation, and a lot of financial and operational statistics and tools.
              As one of the senior developers, my main tasks were to:
              • Write new features in PHP using the Laravel framework.
              • Build complex SQL queries for statustics purpose
              • Be ready to respond to problem reports by the support team on Slack or by phone to take action quickly
              • Be the point of contact in the development team for the support team one day per week, so the other members could focus on developing new features.

              8. SOFTTEK
              October 2013 – December 2015
              Mexico City
              Senior Software Engineer, lead developer and administrator assigned to Kaplan's KAPx Project
              ( https://kapx.kaplan.com , https://online.classroom.mountwashington.edu , https://opencollege.kaplan.com  )

              With a small team of developers, we took over Kaplan's existing app KAPx and became in charge of enhancements, maintenance and support.
              KAPx is a complex infrastructure composed of four Python apps hosted in Google App Engine and an AWS infrastructure with Linux instances hosting webservers serving Moodle applications, some databases and large storage systems.
              As the lead developer, my main tasks were to:
              • Write new features in Python for the Google App Engine apps.
              • Manage the AWS infrastructure
              • Enforce a deployment process across three environments (development, stage and production)
              • Approve enhancements and fixes and promote them to higher environments
              • Write enhancements and fixes in PHP for the Moodle code base that is deployed across all Moodle instances
              • Manage all Google App Engine apps (site, identity, courses and data collection * three environments, so 12 actual apps)
              • Proactively write enhancements and prevent possible issues
              • Maintain the data across all elements of the infrastructure and also between KAPx and other applications it interacts with (Salesforce, Orion)
              • Level 3 support

              9. CLICKER 360
              January 2012 – April 2013
              Mexican City
              Senior Software Engineer, lead developer and administrator

              With a small team of developers, we made a new app per projects, more than 20
              Clicker 360 is a digital marketing company. It builds its clients' projects or offer project ideas, build a design mockup, write the application and depending on the project, managing registrations, ad words and other marketing campaigns, publications and social media content.
              As the lead developer my main tasks were to:
              • Choose the best suited tools for the project (programming language, framework, hosting) based on requirements and expected visitor traffic and behavior
              • Design applications architecture
              • Build we applications from scratch or with a framework (WordPress, CakePHP, Django, etc)
              • Integrate design mockups as  interactive templates
              • Manage infrastructures and databases
              • Write internal tools for projects follow up
              • Integrate existing marketing tools and write new tools for client management
              • Quality Assurance testing
              • Close integration of social media
              • Create facebook apps, twitter apps, and social media integration tools

              10. FREELANCE WEB APPLICATIONS DEVELOPMENT AND ADMINISTRATION, NETWORKS AND SYSTEMS ADMINISTRATION AND CONSULTING
              January 2010 – Current
              Luxembourg / Mexican City
              Senior Software Engineer, lead developer and administrator

              Undertaking a number of freelance jobs as a main activity or as on the side jobs on free time 
              As the lead developer my main tasks were to:
              • Choose the best suited tools for the project (programming language, framework, hosting) based on requirements and expected visitor traffic and behavior
              • Design applications architecture
              • Build we applications from scratch or with a framework (Ruby on Rails, WordPress, Django, etc)
              • Take over existing applications to write new features, fix them or rebuild them
              • Manage infrastructures and databases
              • Quality Assurance testing
              • Close integration of social media
              • Create facebook apps, twitter apps, and social media integration tools
              • Hardware infrastructure architecture
              • Installation and administration of networks and servers
              Main clients: Cultura Latina, Life is Stories, La Sfida, Minois

              11. MACH
              May 2008 – January 2010
              Luxembourg
              Roaming analyst - Automation and support

              As part of the three big players in the roaming data clearing industry (now absorbed by its main competitor Syniverse), our team was expert at roaming process, as well as infrastructure administrators in charge of the infrastructure's health, enhancements, monitoring
              As one of the specialists, my main tasks were to:
              • Give internal assessment on roaming
              • Write the whole alarms system for the global internal infrastructure
              • Lead a small team located in India for alarms monitoring
              • Write automation scripts
              • Write a whole system on top of existing tools to import batches of years of hisorical data from new clients
              • Write complex reports in Oracle PL/SQL for Business Intelligence

              12. SIEMENS
              July 2007 – February 2008
              Cork, IRELAND
              Networks and systems administrator and level 2 supporter

              As part of a team dedicated to the internal infrastructure, our role was to assist the marketing and development teams.
              As one of the administrators, my main tasks were to:
              • Manage Active Directory, IIS, DNS servers for internal teams
              • Manage internal user's accounts on Active Directory
              • Give level 2 support to internal users

              13. Cultura Latina
              Summer 2007
              Luxembourg
              Software engineer, networks and systems administrator

              Cultura Latina promotes the latino culture in Luxembourg. I was part of it during this time period to provide a solid infrastructure. There was a big event all summer long which created a lot of activity for the association.
              As the lead software engineer and systems administrators, my main tasks were to:
              • Create and manage the networks and systems infrastructure
              • Build a portal (web application) for external and internal purpose
              • Write scripts for internal use to automate organizational tasks
              • Write complex reports for Business Intelligence
              • Lead the interns and assign them tasks fit for their knowledge and could offer undertakable challenge

              14. Trasys
              2007 internship
              Brussels, BELGIUM
              Networks and systems administrator (intern)

              As part of a team dedicated to the internal infrastructure, our role was to maintain the infrastructure that all the people in the company was using, employees working internally as well as employees working on projects for clients
              As one of the administrators, my main tasks were to:
              • Build a master users administration system based on LDAP to manage systems administrator accounts as well as system users (also the topic of my thesis)
              • Set up a gray list system against email spamming for the company's email system in place

              15. Onlinedev
              2006 internship
              Bucharest, ROMANIA
              Networks and systems administrator (intern)

              ONLINEDEV writes applications for its clients as work on its own projects, at that time there was an online poker application and an online chat application
              As one of the administrators, my main tasks were to:
              • Manage the company's network infrastructure
              • Manage all DHCP, DNS, Mail servers
              • Move the whole infrastructure to a new office

              16. Movimiento Latino
              2005 internship
              Luxembourg
              Software Developer (intern)

              Design and build the organization's website
              As software developer my main tasks were to:
              • Design the website
              • Design the database infrastructure
              • Write a PHP framework
              • Build the website
            </div>

            <div className="level is-inline-grid" id="works">
              <h1 className="title has-text-success">Development works</h1>

              • EEVET (https://eevet.com): Design the machine learning platform, write the core of it, integrate natural langage processing, a recommendation engine. Work with the Chief Data Officer to make the recommender more accurate.
              • Event Escrow (https://eventescrow.com/): Move payment system from Braintree to Stripe, rewrite the escrow funding, release, arbitration, invoice features and integrate them with Stripe. Fix critical Django application issues with the database structure, migrations and user registration. Fix development environment stack and stage environment. Technologies : Python, Django, Shell Scripting, Ansible, vagrant, PosgreSQL, Jquery, etc.
              • Parlevel VMS (https://chowtime.parlevelvms.com/): The VMS (Vending Management System). Participation in the service ticket feature writing, owner of the recurrence feature for service tickets with a cronjob-like system made easy to configure. Owner of a few operational and financial reports, other reports enhancements, and a lot of bug fixing in the whole VMS. Technologies : PHP with the Laravel Framework, Shell scripting, Python scripting, MySQL scripting, Bootstrap CSS, AngularJS, jquery, etc.
              • Life is Stories (still unpublished) : Biography writing made easy, the web application guides you through the process of writing a book with tips and hints for chapters, cover and chapter pictures upload, a large template selection, preview of your book, with the objective for the user to receive a hard cover book. Technologies : Ruby on Rails, Jquery, MySQL, Linux server administration, Stripe API, Boostrap CSS Framework, several jquery plugins for drag and drop, book preview with page turning (turn.js), etc.
              • KAPx (https://kapx.kaplan.com, https://online.classroom.mountwashington.edu, https://opencollege.kaplan.com/) - Global online learning platform, participation in maintenance, enhancement and support. Technologies : Python, Google App Engine and its datastore, AWS, PHP/MySQL, Moodle, Frontend web development, social networks API, Salesforce API
              • El Buen Fin 2012 (www.elbuenfin.org) – Discontinued until next event. Development in python of all the search engine and also of the API for the mobile app, and part of the website in go.  Technologies : python, go, Google App Engine and its datastore NoSQL, Jquery, Facebook API, Twitter API
              • Deseos 2013 (https://apps.facebook.com/miseleccion-deseos/) - Discontinued. App Facebook for the mexican national soccer team which allowed users to write a message and vote for messages and share them on their social networks, prizes were official shirts firmed by players.  Technologies : PHP/MySQL, Jquery, Facebook API and Twitter API
              • Jackpot (https://apps.facebook.com/carlsjr-jackpot/) - App Facebook for the Fast Food franchise Carl's Jr. , to gather information about users via Facebook offering them a chance to win gift certificates. Technologies : PHP/MySQL, Jquery, Facebook API and Twitter API
              • Interactive vectorial map (http://www.fomentoculturalbanamex.org/gmap/ramas-artesanales) – Technologies : Jquery with Raphael library, image processing withGIMP and Inkscape for the vectors
              • More on https://github.com/ThomasMarcel .
            </div>

            <div className="level is-inline-grid" id="education">
              <h1 className="title has-text-info">EDUCATION</h1>
              • 2007 BTS – Informatique de Gestion option Administrateur de réseaux locaux d’entreprise (Network & System Administrator) - Lycée Malraux, Le Mans, FRANCE.
              • 2004 DEUST – Informatique Systèmes et Réseaux (computer science, systems and networks) - Université du Maine Le Mans, FRANCE
              • 2003 Baccalaureat Sciences Economiques et Sociales (Economical and Social Sciences) – Lycée Montesquieu, Le Mans, FRANCE.

              LANGUAGE SKILLS

              • French: mother language
              • Spanish: native
              • English: written- fluent, spoken- fluent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
