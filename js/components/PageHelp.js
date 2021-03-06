import React from 'react';
import HeroHeadline from './HeroHeadline';
import Fadeable from './Fadeable';
import SetTitle from './SetTitle';

export default function PageHelp({ leaving, onLeave, ...props }) {
  return (
    <Fadeable leaving={leaving} onLeave={onLeave}>
      <SetTitle {...props} title="About the Haufe Technology Radar" />
      <HeroHeadline>About the Haufe Technology Radar</HeroHeadline>
      <div className="fullpage-content">
        <h3>Introduction</h3>
        <p>Technology gets more and more important for each company and especially for software vendors.<br/>
        The Haufe Group is considered one of the most innovative media and software vendors in Germany. Its solutions use state-of-the-art technology and are very user-friendly and practice-oriented.<br/>
        It's essential for our business to constantly keep track on new technologies and useful innovations.
        Not each technology fits to our requirements and strategy. It's important to choose them wisely.</p>
        <h3>What is the Haufe Tech Radar?</h3>
        <p>The Tech Radar is an overview of technologies and innovations that are important for our business.
          It displays new and upcoming technologies relevant for the Haufe Group.
          The radar doesn't provide an overview of all technologies - but it focuses on key-technologies and innovations that have or might have business impact on our strategy.
          It's goal is to reflect our maturity state and experience with these technologies. It also an instrument to measure our progress over time.</p>
        <p>
          Aim and mission is to help Haufe Group employees discovering all the new tech, that is used to realize customer-centric solutions and services.
          We want to foster the knowledge about technologies and relevant projects giving like-minded people the possibility to connect easily and share their passion for each topic.
          In this way we want to unlock synergies and knowledge transfer regrading ideas, success stories and pitfalls.
          As technologies show up quickly in the market, the Radar is updated constantly and therefore is always kind of work in progress.
        </p>
        <h3 >How it is created and maintained</h3>
        <p>The items in the technology radar are maintained by the innovation team.<br/>
        It's always a hard discussion about the classification and details of each technology and innovation. Please contribute to the discussion. It is the tech radar of our company and not from a single group.</p>
        <h3 >How should it be used</h3>
        <p>The radar acts as an overview of technologies that we think everyone in the company should currently know about.
        Its purpose is to provide helpful information and a bird's-eye perspective. It informs about our initiatives in these areas and hopefully helps to get in contact with other teams for experience exchange and collaboration.
        It also helps to have an overview over our own maturity state with different technologies.</p>
        <p>We group or categorize the items in 4 quadrants - (sometimes, when it's not 100% clear where a item belongs, we choose the best fit).</p>
        <p>The quadrants are:</p>
        <ul>
          <li><strong>Data Science & Analytics:</strong> All data related technologies and trends like BigData, Business Intelligence, Artifical Intelligence (AI,KI) and Machine Learning are placed here.</li>
          <li><strong>Infrastructure & Operational Technology:</strong> Technologies reaching from Cloud over DevOps, Containerization, Continous Integration/Delivery/Deployment, Build Pipelines, Monitoring, Logging</li>
          <li><strong>Platforms & Partners:</strong> Technologies useful for product/system collaboration and composable new product forms like APIs, API Management, Partner Platform, Collaboration, Integration </li>
          <li><strong>UI & Devices</strong> New forms of user interfaces like voice (Amazon Alexa), Chatbots, Virtual/Artifical/Mixed reality devices, Mobile devices and also other IoT devices including Smart Home</li>
        </ul>
        <p>Each of the items is classified in one of these rings:</p>
        <ul>
          <li><strong>Discover:</strong> We discover the value of a technology and proof the value for us and our customers. That is typically the stage were we work on PoCs and unrisky tests in apps. </li>
          <li><strong>Productize:</strong> We use it in one or a small amount of products and gather experinece with our customers. </li>
          <li><strong>Scale:</strong> We use it in many products and teams and it has proven to be stable and useful. </li>
        </ul>
        <h3 >Contribution</h3>
        <p>To see instructions on how to contribute content, click <a href="https://github.com/Haufe-Lexware/aoe_technology_radar/blob/master/docs/contribute-to-tech-radar.md" target="_blank">here</a>.</p>
        <p>Contributions and source code of the radar are on github: <a href="https://github.com/Haufe-Lexware/aoe_technology_radar" target="_blank">Haufe Tech Radar on Github</a></p>
        <h3 >Credits</h3>
        <p>The solution is forked from the AOE Tech Radar <a href="https://github.com/AOEpeople/aoe_technology_radar" target="_blank">AOE Tech Radar on Github</a>. We like to thank that guys for their great work!</p>
        <h3 >Who we are...</h3>
        <p>
        We are a team of technologists, who work for different business units, who have both strong ties to technology and close contact to small, medium, and large customers, and who firmly believe that marketing driven research of new technology enables innovation at Haufe Group.<br/>
        Many colleagues (we call them “innovators”) have approached us with the same questions concerning developing new ideas for Haufe Group products. To help them, we have created the Technology Radar to provide colleagues in all business units a single point of reference to gain a quick overview for strategic Haufe Group technologies.<br/>
        With this knowledge, we intend to network colleagues with deep business knowledge and deep technology know-how. By combining both types of knowledge - customer need and technical know-how - the network cell aims to spawn new networks to extend existing products and generate new products for the Haufe Group.<br/><br/>
        Contact us via mail _kickstarter_customer_success_new_tech <a href="mailto:_kickstarter_customer_success_new_tech@haufe-lexware.com">_kickstarter_customer_success_new_tech</a>
        </p>
      <p>Group members:</p>
      <ul>
        <li><a href="mailto:Rainer.Kempkes@haufe-lexware.com">Rainer Kempkes</a></li>
        <li><a href="mailto:Christian.Kempter@haufe-lexware.com">Christian Kempter</a></li>
        <li><a href="mailto:Christian.Ledinger@haufe-lexware.com">Christian Ledinger</a></li>
        <li><a href="mailto:Bernd.Sengpiehl@haufe-lexware.com">Bernd Sengpiehl</a></li>
        <li><a href="mailto:Scott.Speights@haufe-lexware.com">Scott Speights</a></li>
        <li><a href="mailto:Drazen.Stuparic@haufe-lexware.com">Drazen Stuparic</a></li>
        <li><a href="mailto:Rainer.Zehnle@haufe-lexware.com">Rainer Zehnle</a></li>
      </ul>
      </div>
    </Fadeable>
  );
}
