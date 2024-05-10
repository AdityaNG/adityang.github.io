import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Footer from './components/Footer';
import AuthorsList from './components/AuthorsList';
import PaperBlock from './components/PaperBlock';

import './styles.css';


function HardwareAcceleratedStereoVision() {
  useEffect(() => {
    document.title = 'Stereo Vision';
  }, []);
  const title = "HardwareAcceleratedStereoVision: 3D Occupancy Convolutional Transformer Network in Unstructured Traffic Scenarios"
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
      author_name: "Dr. Shylaja S. S.",
      author_email: "shylaja.sharath@pes.edu",
      author_url: "https://scholar.google.com/citations?user=7hBzcg0AAAAJ&hl=en"
    },
    {
        author_name: "Prof. Srinivas Katharguppe",
        author_email: "srinivas.katharguppe@gmail.com",
        author_url: "https://www.linkedin.com/in/priyaasuresh/?originalSubdomain=in"
      },
  ]

  const papers = [
    {
        title: "Hardware Accelerated Stereo Vision",
        image: require("./media/demo_fsds.gif"),
        conference: "CVPR 2023",
        bibtext_plain: "Aditya, N.G., Dhruval, P.B., Shylaja, S.S., Katharguppe, S. (2023). Low-Cost Hardware-Accelerated Vision-Based Depth Perception for Real-Time Applications. In: Tistarelli, M., Dubey, S.R., Singh, S.K., Jiang, X. (eds) Computer Vision and Machine Intelligence. Lecture Notes in Networks and Systems, vol 586. Springer, Singapore. https://doi.org/10.1007/978-981-19-7867-8_22",
        bibtext: '@InProceedings{10.1007/978-981-19-7867-8_22,\
    author="Aditya, N. G.\
    and Dhruval, P. B.\
    and Shylaja, S. S.\
    and Katharguppe, Srinivas",\
    editor="Tistarelli, Massimo\
    and Dubey, Shiv Ram\
    and Singh, Satish Kumar\
    and Jiang, Xiaoyi",\
    title="Low-Cost Hardware-Accelerated Vision-Based Depth Perception for Real-Time Applications",\
    booktitle="Computer Vision and Machine Intelligence",\
    year="2023",\
    publisher="Springer Nature Singapore",\
    address="Singapore",\
    pages="271--282",\
    abstract="Depth estimation and 3D object detection are critical for autonomous systems to gain context of their surroundings. In recent times, compute capacity has improved tremendously, enabling computer vision and AI on the edge. In this paper, we harness the power of CUDA and OpenMP to accelerate ELAS (a stereoscopic vision-based disparity calculation algorithm) and 3D projection of the estimated depth while performing object detection and tracking. We also examine the utility of Bayesian inference in achieving real-time object tracking. Finally, we build a drive-by-wire car equipped with a stereo camera setup to test our system in the real world. The entire system has been made public and easily accessible through a Python module.",\
    isbn="978-981-19-7867-8"\
  }',
        links: [
          { key: "Paper", value: "https://link.springer.com/epdf/10.1007/978-981-19-7867-8_22?sharing_token=tGt_1kJ1-X4X_SJ7asFIhPe4RwlQNchNByi7wbcMAY7dVU38RCYC635tD8Mv0pHKLGrLXtqJR415-cGO0rTpc-m7_S8tonEWu9j7gV822VqazEY_wDsgtBGj7oTIDJbEpDvS34K3Uc75Lm_PGnmytAIfS3kvjD_LIosG273wL8E%3D" },
          { key: "Project", value: "/#/HardwareAcceleratedStereoVision" }
        ],
        project_page: "/HardwareAcceleratedStereoVision",
        tldr: "Stereo Block Matching with CUDA and OpenMP at 30 FPS",
      },
  ];


  const image = require("./media/paper_stereo.png")

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
        <h3>Department of Computer Science, PES University, Bengaluru</h3>
        <h3>Published at <a href="https://2024.ieee-icra.org/">CVMI 2022</a></h3>
      </header>
      <main>
      
        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '60vw', marginTop: '20px', textAlign: 'justify'}}>
                <img src={require("./media/demo_fsds.gif")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '60vw', marginBottom: '20px', textAlign: 'justify'}}>
                <img src={require("./media/rc_car.png")} />
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                <b>Abstract.</b> Depth estimation and 3D object detection are critical for autonomous systems to gain context of their surroundings. In recent times, compute capacity has improved tremendously, enabling computer vision and AI on the edge. In this paper, we harness the power of CUDA and OpenMP to accelerate ELAS (a stereoscopic vision-based disparity calculation algorithm) and 3D projection of the estimated depth while performing object detection and tracking. We also examine the utility of Bayesian inference in achieving real-time object tracking. Finally, we build a drive-by-wire car equipped with a stereo camera setup to test our system in the real world. The entire system has been made public and easily accessible through a Python module.
            </p>
        </div>

        <hr />

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2 style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
                Source Code
            </h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{maxWidth: '80vw', margin: '20px', textAlign: 'justify'}}>
              We have released the implementation of project on GitHub. Try our code!
            </p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '75vw', margin: '20px', textAlign: 'justify'}}>
                <Button href="https://github.com/AdityaNG/Low-Cost-Hardware-Accelerated-Vision-Based-Depth-Perception-for-Real-Time-Applications" target='_blank'>[CODE]</Button>
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

export default HardwareAcceleratedStereoVision;
