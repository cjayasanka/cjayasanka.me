import React from "react";

const Projects = () => {
  return (
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/matthew.png" />
        </div>
        <div class="content">
          <div class="header">PickTea</div>
          <div class="meta">
            <i class="calendar icon"></i>
            <a>2019</a>
          </div>
          <div class="description">
            Decision support system for tea cultivation using drone imagery.
            Scheduling of plucking tables, maintenance and managements schedules
            generation. Map generation using SIFT algorithm. Segmentation and
            Graph generation for analysis. Designed Front and Back end for
            PickTea platform.
          </div>
        </div>
        <div class="extra content">
          <span>
            <i class="clone icon"></i>
            Python | Spring | React | MySQL
          </span>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/matthew.png" />
        </div>
        <div class="content">
          <div class="header">ETL system (Intern project)</div>
          <div class="meta">
            <i class="calendar icon"></i>
            <a>2018</a>
          </div>
          <div class="description">
            Extract data from user uploaded spreadsheets using file watcher
            written using python. Transform data coming in various file formats
            to one format by cleaning data. Load data to database for analysis.
            Deployed ETL system on AWS platform.
          </div>
        </div>
        <div class="extra content">
          <span>
            <i class="clone icon"></i>
            Python | Airflow | Celery | MongoDB | Redis | JavaScript | AWS
          </span>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/matthew.png" />
        </div>
        <div class="content">
          <div class="header">HDrone</div>
          <div class="meta">
            <i class="calendar icon"></i>
            <a>2016</a>
          </div>
          <div class="description">
            Designed and developed a hybrid propulsion system for multi-rotters
            to overcome limited flight time of UAVs due to battery capacity and
            payload limitations.
          </div>
        </div>
        <div class="extra content">
          <span>
            <i class="clone icon"></i>
            Robotics
          </span>
        </div>
      </div>

      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/molly.png" />
        </div>
        <div class="content">
          <div class="header">DengAI</div>
          <div class="meta">
            <i class="calendar icon"></i>
            <span class="date">2019</span>
          </div>
          <div class="description">
            Developed a model to predict Dengue spread using seasonal and trend
            patterns and placed 173 among 6000+ teams.
          </div>
        </div>
        <div class="extra content">
          <span>
            <i class="clone icon"></i>
            Python | Machine-Learing | Numpy | ScikitLearn
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="/images/avatar2/large/elyse.png" />
        </div>
        <div class="content">
          <div class="header">Traffic Light Controller on FPGA</div>
          <div class="meta">
            <i class="calendar icon"></i>
            <a>2019</a>
          </div>
          <div class="description">
            Complex four-way intersection traffic light controlling system with
            custom commands.
          </div>
        </div>
        <div class="extra content">
          <span>
            <i class="clone icon"></i>
            Verilog | Xilinx ISE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
