import React from 'react';
import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import './styles.css';


function TrajNet() {
  const title = "Thermal Voyager: A Comparative Study of RGB and Thermal Cameras for Night-Time Autonomous Navigation"
  const authors = [
    {
      author_name: "Aditya N G",
      author_email: "adityang5@gmail.com",
      author_url: "https://adityang.github.io/"
    },
    {
      author_name: "Dhruval P B",
      author_email: "dhruvalpb@gmail.com",
      author_url: "https://in.linkedin.com/in/dhruvalpb"
    },
    {
      author_name: "Jehan Shalabi",
      author_email: "shalabi@purdue.edu",
      author_url: "https://www.linkedin.com/in/jehan-shalabi-2001"
    },
    {
      author_name: "Shubhankar Jape",
      author_email: "sjape@purdue.edu",

      author_url: "https://www.linkedin.com/in/shubhankar-jape-028603219/"
    },
    {
      author_name: "Xueji Wang",
      author_email: "wang4008@purdue.edu",
      author_url: "https://www.linkedin.com/in/xueji-wang/"
    },
    {
      author_name: "Zubin Jacob",
      author_email: "zjacob@purdue.edu",
      author_url: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=125866"
    }
  ]

  const papers = [
    {
      title: "TrajNet",
      image: require("./media/paper_TrajNet.png"),
      conference: "ICRA 2024",
      bibtext_plain: "Aditya N Ganesh, Dhruval Pobbathi Badrinath, Harshith Mohan Kumar, Priya S, and Surabhi Narayan. Octran: 3d occupancy convolutional transformer network in unstructured traffic scenarios. Spotlight Presentation at the Transformers for Vision Workshop, CVPR, 2023. Transformers for Vision Workshop, CVPR 2023",
      bibtext: "@inproceedings{ganesh2024thermal,\
  title={Thermal Voyager: A Comparative Study of RGB and Thermal Cameras for Night-Time Autonomous Navigation},\
  author={Ganesh, Aditya Nalgunda and PB, Dhruval and Shalabi, Jehan and Jape, Shubhankar and Wang, Xueji and Jacob, Zubin},\
  booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},\
  year={2024}\
}",
    tldr: "Thermal Perception for End-to-End Autonomous Navigation",
    links: [
      { key: "Paper", value: require("./media/ICRA_Thermal_Voyager.pdf") },
      { key: "Project", value: "/TrajNet/" }
    ],
    project_page: "/TrajNet/",
    }
  ];

  return (
    <div className="container">
      <header>
        <h1>{title}</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {authors.map(author => (
                <div style={{margin: '10px'}}>
                <AuthorsList {...author} />
                </div>
            ))}
        </div>
        <h3>Published at <a href="https://2024.ieee-icra.org/">ICRA 2024</a></h3>
      </header>
      <main>
      
        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button href={require("./media/ICRA_Thermal_Voyager.pdf")} target="_blank" rel="noopener noreferrer" style={{marginRight: '10px'}}>
            Paper
            </Button>
            <Button href="https://www.youtube.com/watch?v=A329OZmrf8Y&ab_channel=AdityaNG" target="_blank" rel="noopener noreferrer">
            Video
            </Button>
            {/* <Button href="https://github.com/AdityaNG/TrajNet" target="_blank" rel="noopener noreferrer">
            Code
            </Button> */}
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '75vw', margin: '20px', justifyContent: 'center', position: 'relative', paddingBottom: '45%', height: 0}}>
                <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} src="https://www.youtube.com/embed/e7BNml4j3NI?rel=0&amp;autoplay=1&mute=1&start=14" title="TrajNet Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                <b>Abstract.</b> Achieving reliable autonomous navigation during nighttime remains a substantial obstacle in the ﬁeld of robotics. Although systems utilizing Light Detection and Ranging (LiDAR) and Radio Detection and Ranging (RADAR) enables environmental perception regardless of lighting conditions, they face signiﬁcant challenges in environments with a high density of agents due to their dependence on active emissions. Cameras operating in the visible spectrum represent a quasi-passive alternative, yet they see a substantial drop in efﬁciency in low-light conditions, consequently hindering both scene perception and path planning. Here, we introduce a novel end-to-end navigation system, the ”Thermal Voyager”, which leverages infrared thermal vision to achieve true passive perception in autonomous entities. The system utilizes TrajNet to interpret thermal visual inputs to produce desired trajectories and employs a model predictive control strategy to determine the optimal steering angles needed to actualize those trajectories. We train the TrajNet utilizing a comprehensive video dataset incorporating visible and thermal footages alongside Controller Area Network (CAN) frames. We demonstrate that nighttime navigation facilitated by Long-Wave Infrared (LWIR) thermal cameras can rival the performance of daytime navigation systems using RGB cameras. Our work paves the way for scene perception and trajectory prediction empowered entirely by passive thermal sensing technology, heralding a new era where autonomous navigation is both feasible and reliable irrespective of the time of day. We make our code and thermal trajectory dataset public.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Video Presentation
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '75vw', margin: '20px', justifyContent: 'center', position: 'relative', paddingBottom: '45%', height: 0}}>
                <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} src="https://www.youtube.com/embed/A329OZmrf8Y" title="TrajNet Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Our Architecture
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
            Thermal/RGB image frames are fed into TrajN et which outputs a trajectory. The Model Predictive Controller translated the trajectory to an optimal control sequence of actuator values. Low-level systems command the actuators to then execute the desired trajectory
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <img src={require("./media/arch.png")} />
            </div>
        </div>

        
        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="paper-grid">
            {papers.map((paper) => (
                <div>
                <PaperBlock {...paper} />
                <hr />
                <br />
                </div>
            ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TrajNet;