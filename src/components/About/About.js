import React from 'react';
import Banner from '../Banner/Banner';
import EducationFooter from '../EducationFooter/EducationFooter';
import teacher1 from '../../images/teacher-1.jpg';
import teacher2 from '../../images/teacher-2.jpg';
import teacher3 from '../../images/teacher-3.jpg';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1><b>The Best Tutors in Town</b></h1>
                <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research</p>
                <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={teacher1} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Mis Priliyani</h5>
        <p class="card-text"> Informally the role of teacher may be taken on by anyone.is a person who helps students to acquire knowledge, competence or virtue.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={teacher2} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Mis Tripiya</h5>
        <p class="card-text">A teacher, also called a schoolteacher or formally an educator, competence or virtue, is a person who helps students to acquire knowledge.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={teacher3} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Mis Srimita</h5>
        <p class="card-text">Prospect Elementary School Principal Kristin Cummings said the recognition is a direct reflection of  during a complicated pandemic year.</p>
      </div>
    </div>
  </div>
</div>
<hr /><hr />
            </div>
            <EducationFooter></EducationFooter>
        </div>
    );
};

export default About;