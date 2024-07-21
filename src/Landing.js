import React, { useEffect } from 'react';

import PaperBlock from './components/PaperBlock';
import Footer from './components/Footer';
import './styles.css';

import Button from '@mui/material/Button';



function Landing() {
  // you'll need to replace this with actual data
  const papers = [
    {
      title: "D³Nav",
      image: require("./media/d3nav_demo_0_future_video_prediction.gif"),
      conference: "BMVC 2024",
      bibtext_plain: 'N. Aditya, S. Gowri. "D³Nav: Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic," in The 35th British Machine Vision Conference (BMVC), 2024.',
      bibtext: "@article{NG2024D3Nav, \
  title={D³Nav: Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic}, \
  author={Aditya NG and Gowri Srinivas}, \
  journal={The 35th British Machine Vision Conference (BMVC)}, \
  year={2024}, \
  url={https://bmvc2024.org/} \
}",
      links: [
        { key: "Paper", value: "" },
        { key: "Code", value: "https://github.com/AdityaNG/D3Nav" },
        { key: "Project", value: "/D3Nav" }
      ],
      project_page: "/D3Nav",
      tldr: "Data-Driven Driving Agents for Autonomous Vehicles in Unstructured Traffic. A video generation model as a world simulator for AVs",
    },
    {
      title: "TrajNet",
      image: require("./media/TrajNet_traj_demo.gif"),
      conference: "ICRA 2024",
      bibtext_plain: "Aditya N G, Dhruval P B, Jehan Shalabi, Shubhankar Jape, Xueji Wang, and Zubin Jacob. Thermal Voyager: A Comparative Study of RGB and Thermal Cameras for Night-Time Autonomous Navigation, ICRA 2024",
      bibtext: "@inproceedings{ganesh2024thermal,\
  title={Thermal Voyager: A Comparative Study of RGB and Thermal Cameras for Night-Time Autonomous Navigation},\
  author={Ganesh, Aditya Nalgunda and PB, Dhruval and Shalabi, Jehan and Jape, Shubhankar and Wang, Xueji and Jacob, Zubin},\
  booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},\
  year={2024}\
}",
    tldr: "Thermal Perception for End-to-End Autonomous Navigation",
    links: [
      { key: "Paper", value: require("./media/ICRA_Thermal_Voyager.pdf") },
      { key: "Project", value: "/TrajNet" }
    ],
    project_page: "/TrajNet",
    },
    {
      title: "DriveLLaVA",
      image: require("./media/paper_DriveLLaVA.gif"),
      // conference: "CVPR 2023",
      bibtext_plain: "Aditya N Ganesh. DriveLLaVA: Using Large Vision Models as Driving Agents for AVs. 2024",
      bibtext: "@misc{analgund2024DriveLLaVA,\
  title={DriveLLaVA: Using Large Vision Models as Driving Agents for AVs},\
  author={Ganesh, Aditya N},\
  year={2024},\
}",
      links: [
        { key: "Paper", value: "https://adityang.github.io/DriveLLaVA" },
        { key: "Project", value: "/DriveLLaVA" }
      ],
      project_page: "/DriveLLaVA",
      tldr: "Using Large Vision Models as Driving Agents for AVs",
    },
    {
      title: "SOccDPT",
      image: require("./media/demo.gif"),
      conference: "AAIML 2024",
      bibtext_plain: "Aditya Nalgunda Ganesh. Soccdpt: Semi-supervised 3d semantic occupancy from dense prediction transformers trained under memory constraints. AAIML, 2024.",
      bibtext: "@article{NG2024SOccDPT,\
  title={SOccDPT: 3D Semantic Occupancy from Dense Prediction Transformers trained under memory constraints},\
  author={NG, Aditya},\
  journal={Advances in Artificial Intelligence and Machine Learning},\
  volume={ISSN: 2582-9793, Source Id: 21101164612},\
  year={2024},\
  url={https://www.oajaiml.com/}\
}",
    tldr: "Real time 3D Semantic Occupancy from Dense Prediction Transformers",
    links: [
      { key: "Paper", value: "https://www.oajaiml.com/archive/soccdpt-3d-semantic-occupancy-from-dense-prediction-transformers-trained-under-memory-constraints"},
      { key: "Project", value: "/SOccDPT" }
    ],
    project_page: "/SOccDPT",
    },
    {
      title: "OCTraN",
      image: require("./media/paper_OCTraN.png"),
      conference: "CVPR 2023",
      bibtext_plain: "Aditya N Ganesh, Dhruval Pobbathi Badrinath, Harshith Mohan Kumar, Priya S, and Surabhi Narayan. Octran: 3d occupancy convolutional transformer network in unstructured traffic scenarios. Spotlight Presentation at the Transformers for Vision Workshop, CVPR, 2023. Transformers for Vision Workshop, CVPR 2023",
      bibtext: "@misc{analgund2023octran,\
  title={OCTraN: 3D Occupancy Convolutional Transformer Network in Unstructured Traffic Scenarios},\
  author={Ganesh, Aditya N and Pobbathi Badrinath, Dhruval and\
    Kumar, Harshith Mohan and S, Priya and Narayan, Surabhi\
  },\
  year={2023},\
  howpublished={Spotlight Presentation at the Transformers for Vision Workshop, CVPR},\
  url={https://sites.google.com/view/t4v-cvpr23/papers#h.enx3bt45p649},\
  note={Transformers for Vision Workshop, CVPR 2023}\
}",
      links: [
        { key: "Paper", value: "https://arxiv.org/abs/2307.10934" },
        { key: "Project", value: "/OCTraN" }
      ],
      project_page: "/OCTraN",
      tldr: "3D Occupancy Prediction from Monocular Video",
    },
    {
      title: "Bengaluru Driving Dataset (OCTraN)",
      image: require("./media/BDD_Iterator_Demo-2023-08-30_08.25.17.gif"),
      conference: "CVPR 2023",
      bibtext_plain: "Aditya N Ganesh, Dhruval Pobbathi Badrinath, Harshith Mohan Kumar, Priya S, and Surabhi Narayan. Octran: 3d occupancy convolutional transformer network in unstructured traffic scenarios. Spotlight Presentation at the Transformers for Vision Workshop, CVPR, 2023. Transformers for Vision Workshop, CVPR 2023",
      bibtext: "@misc{analgund2023octran,\
  title={OCTraN: 3D Occupancy Convolutional Transformer Network in Unstructured Traffic Scenarios},\
  author={Ganesh, Aditya N and Pobbathi Badrinath, Dhruval and\
    Kumar, Harshith Mohan and S, Priya and Narayan, Surabhi\
  },\
  year={2023},\
  howpublished={Spotlight Presentation at the Transformers for Vision Workshop, CVPR},\
  url={https://sites.google.com/view/t4v-cvpr23/papers#h.enx3bt45p649},\
  note={Transformers for Vision Workshop, CVPR 2023}\
}",
      links: [
        { key: "Paper", value: "https://arxiv.org/abs/2307.10934" },
        { key: "Project", value: "/BengaluruDrivingDataset" }
      ],
      project_page: "/BengaluruDrivingDataset",
      tldr: "Depth dataset for Autonomous Driving produced entirely from autolabelling",
    },

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
        { key: "Project", value: "/HardwareAcceleratedStereoVision" }
      ],
      project_page: "/HardwareAcceleratedStereoVision",
      tldr: "Stereo Block Matching with CUDA and OpenMP at 30 FPS",
    },
  ];

  useEffect(() => {
    document.title = 'Aditya NG';
  }, []);

  return (
    <div className="container">
      <header>
        <Button href="https://github.com/AdityaNG/" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px'}}>
          Github
        </Button>
        <Button href="https://www.linkedin.com/in/adityang/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Button>

        <h1>Hi, I'm Aditya NG</h1>
        <br/>
        <div style={{display: "flex", justifyContent: "center"}}>
          <img style={{
            borderRadius: "50%",
            width: 250,
            height: 250,
            background: "red",
            display: "block",
          }}
          src={require("./media/AdityaNG.png")} alt="<NAME>" />
        </div>
      </header>
      <hr/>
      <main>
        <div className="paper-grid">
          {papers.map((paper) => (
            // <React.Fragment key={paper.title}>
            <div>
              <PaperBlock {...paper} />
              <hr />
              <br />
            </div>
            // </React.Fragment>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
