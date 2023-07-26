import React, { useState } from "react";
import axios from "axios";
import "./Form.css"

const PdfForm = () => {
  const [formData, setFormData] = useState({
    // Set up the form fields here
     name:"",
        age:"",
        refDoctor:"",
        dateOfSample:"22/07/2023",
        dayOfSample:"",
        monthOfSample:"",
        yearOfSample:"",
        gender:"male",
        haemoglobin:"",
        erythrocytes:"",
        leucocytes:"",
        plateletes:"",
        neutrophils:"",
        lymphocytes:"",
        monocytes:"",
        eosinophils:"",
        basophils:"",
        parasiteSlide:"",
        parasitesCassatte:"",
        westergenMethod:"",
        btMin:"",
        btSec:"",
        ctMin:"",
        ctSec:"",
        ABOBloodGroup:"",
        RhAntiD:"",
        widalTest:"",
        vdrlTest:"",
        raTest:"",
        hcvTest:"",
        hiv1n2:"",
        hbsAgTest:"",
        bloodSugarFasting:"",
        bloodSugarPostPrandial:"",
        bloodSugarRandom:"",
        bloodUrea:"",
        serumCreatinine:"",
        serumCholestrol:"",
        serumUricAcid:"",
        serumCalcium:"",
        serumBilirubinTotal:"",
        serumBilirubinDirect:"",
        serumBilirubinIndirect:"",
        sgot:"",
        sgpt:"",
        alkalinePhosphates:"",
        sodium:"",
        potassium:"",
        sputum:"",
        mauntox:""
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      // Replace the API endpoint with your backend server address
      const response = await axios.post(
        "https://pdf-generator-krx8.onrender.com/pdf/create",
        formData,
        {
          responseType: "blob", // Expecting binary data (PDF) in the response
        }
      );

      // Create a Blob object from the response data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new tab
      window.open(pdfUrl, "_blank");
    } catch (error) {
      console.error("Error fetching the PDF:", error);
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>SAI PATHOLOGY</h1>
    <div className="row">
    <h4>Details of Patient</h4>
      <div className="input-group">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name of patient"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={formData.age}
          placeholder="Age"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="refDoctor"
          onChange={handleChange}
          value={formData.refDoctor}
          placeholder="Reffered by Doctor"
        />
      </div>
      </div>

      <div className="row">
      <div className="col-half">
        <h4>Date of Sample</h4>
        <div className="input-group">
          <div className="col-third">
            <input type="text" placeholder="DD"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="MM"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div className="col-half">
        <h4>Gender</h4>
        <div className="input-group">
          <input id="gender-male" type="radio" name="gender" value="male"  onChange={handleChange}/>
          <label htmlFor="gender-male">Male</label>
          <input id="gender-female" type="radio" name="gender" value="female"  onChange={handleChange}/>
          <label htmlFor="gender-female">Female</label>
        </div>
      </div>
      </div>

     <div className="labReport">
        <h2>Lab Report</h2>
        <div>
            <h5>Haemoglobin</h5>
      <div className="input-group">
        <input
          type="number"
          name="haemoglobin"
          onChange={handleChange}
          value={formData.haemoglobin}
          placeholder="Haemoglobin(Salhi) gms%"
        />
      </div>
      </div>
      <div>
        <h5>Total count of</h5>
      <div className="input-group">
        <input
          type="number"
          name="erythrocytes"
          onChange={handleChange}
          value={formData.erythrocytes}
          placeholder="Erythrocytes (RBC) /Cumm"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="leucocytes"
          onChange={handleChange}
          value={formData.leucocytes}
          placeholder="Leucocytes (WBC) /Cumm"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="plateletes"
          onChange={handleChange}
          value={formData.plateletes}
          placeholder="Plateletes /Cumm"
        />
      </div>
      </div>
      <div>
        <h5>Differential count of Leucocytes</h5>
      <div className="input-group">
        <input
          type="number"
          name="neutrophils"
          onChange={handleChange}
          value={formData.neutrophils}
          placeholder="Neutrophils (40%-70%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="lymphocytes"
          onChange={handleChange}
          value={formData.lymphocytes}
          placeholder="Lymphocytes (20%-40%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="monocytes"
          onChange={handleChange}
          value={formData.monocytes}
          placeholder="Monocytes (1%-8%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="eosinophils"
          onChange={handleChange}
          value={formData.eosinophils}
          placeholder="Eosinophils (1%-6%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="basophils"
          onChange={handleChange}
          value={formData.basophils}
          placeholder="Basophils (0%-1%)"
        />
      </div>
      </div>
      <div>
        <h5>Parasites (MP/MF)</h5>
      <div className="input-group">
        <input
          type="number"
          name="parasiteSlide"
          onChange={handleChange}
          value={formData.parasiteSlide}
          placeholder="Slide"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="parasitesCassatte"
          onChange={handleChange}
          value={formData.parasitesCassatte}
          placeholder="Cassatte"
        />
      </div>
      </div>
      <div>
      <div className="input-group">
        <h5>Erythocytes sedimentation rate</h5>
        <input
          type="number"
          name="westergenMethod"
          onChange={handleChange}
          value={formData.westergenMethod}
          placeholder="Westergen method 1st hour (mm)"
        />
      </div>
      </div>
      
      <div>
        <h4>B.T.</h4>
        <div className="input-group">
          <div className="col-third">
            <input type="number" placeholder="Min"/>
          </div>
          <p>Sec</p>
          <div className="col-third">
            <input type="number" placeholder="MM"/>
          </div>
          <p>mm</p>
        </div>
      </div>

      <div>
        <h4>C.T.</h4>
        <div className="input-group">
          <div className="col-third">
            <input type="number" placeholder="Min"/>
          </div>
          <p>Sec</p>
          <div className="col-third">
            <input type="number" placeholder="MM"/>
          </div>
          <p>mm</p>
        </div>
      </div>
      
    <div>
        <h5>Blood Grouping</h5>
      <div className="input-group">
        <input
          type="number"
          name="ABOBloodGroup"
          onChange={handleChange}
          value={formData.ABOBloodGroup}
          placeholder="ABO Blood Group"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="RhAntiD"
          onChange={handleChange}
          value={formData.RhAntiD}
          placeholder="Rh (Anti-D)"
        />
      </div>
      </div>
      <div >
        <h5>Widal Test (Igm+IgG)</h5>
      <div className="input-group">
        <input
          type="number"
          name="widalTest"
          onChange={handleChange}
          value={formData.widalTest}
          placeholder="Widal test"
        />
      </div>
      </div>
      <div>
        <h5>V.R.D.L Test</h5>
      <div className="input-group">
        <input
          type="number"
          name="vdrlTest"
          onChange={handleChange}
          value={formData.vdrlTest}
          placeholder="V.R.D.L test"
        />
      </div>
      </div>

      <div>
        <h5>R.A. Test</h5>
      <div className="input-group">
        <input
          type="number"
          name="raTest"
          onChange={handleChange}
          value={formData.raTest}
          placeholder="R.A. test"
        />
      </div>
      </div>
      <div>
        <h5>HCV (Anti)</h5>
      <div className="input-group">
        <input
          type="number"
          name="hcvTest"
          onChange={handleChange}
          value={formData.hcvTest}
          placeholder="HCV (anti)"
        />
      </div>
      </div>
      <div>
        <h5>HIV-I & II test</h5>
      <div className="input-group">
        <input
          type="number"
          name="hiv1n2"
          onChange={handleChange}
          value={formData.hiv1n2}
          placeholder="HIV-I & II test"
        />
      </div>
      </div>
      <div>
        <h5>HBs Ag test</h5>
      <div className="input-group">
        <input
          type="number"
          name="hbsAgTest"
          onChange={handleChange}
          value={formData.hbsAgTest}
          placeholder="HBs Ag test"
        />
      </div>
      </div>
      <div>
        <h5>Blood sugar / Glucose</h5>
      <div className="input-group">
        <input
          type="number"
          name="bloodSugarFasting"
          onChange={handleChange}
          value={formData.bloodSugarFasting}
          placeholder="Fasting (A/P) mg% (60-110mg%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="bloodSugarPostPrandial"
          onChange={handleChange}
          value={formData.bloodSugarPostPrandial}
          placeholder="Post Prandial mg% (upto 150mg%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="bloodSugarRandom"
          onChange={handleChange}
          value={formData.bloodSugarRandom}
          placeholder="Random (R) mg% (60-150mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Blood Urea</h5>
      <div className="input-group">
        <input
          type="number"
          name="bloodUrea"
          onChange={handleChange}
          value={formData.bloodUrea}
          placeholder="Blood Urea mg% (15-40mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Serum Cretinine</h5>
      <div className="input-group">
        <input
          type="number"
          name="serumCreatinine"
          onChange={handleChange}
          value={formData.serumCreatinine}
          placeholder="Serum Cretinine mg% (0.5-1.5mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Serum Cholesterol</h5>
      <div className="input-group">
        <input
          type="number"
          name="serumCholestrol"
          onChange={handleChange}
          value={formData.serumCholestrol}
          placeholder="Serum cholesterol mg% (100-200mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Serum Uric Acid</h5>
      <div className="input-group">
        <input
          type="number"
          name="serumUricAcid"
          onChange={handleChange}
          value={formData.serumUricAcid}
          placeholder="Serum uric acid mg% (2-7mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Serum Calcium</h5>
      <div className="input-group">
        <input
          type="number"
          name="serumCalcium"
          onChange={handleChange}
          value={formData.serumCalcium}
          placeholder="Serum calcium mg% (8-10mg%)"
        />
      </div>
      </div>
      <div>
        <h5>Serum Bilirubin</h5>
      <div className="input-group">
        <input
          type="number"
          name="serumBilirubinTotal"
          onChange={handleChange}
          value={formData.serumBilirubinTotal}
          placeholder="Total bilirubin mg% (0.1-1.0mg%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="serumBilirubinDirect"
          onChange={handleChange}
          value={formData.serumBilirubinDirect}
          placeholder="Direct Bilirubin mg% (0.1-0.2mg%)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="serumBilirubinIndirect"
          onChange={handleChange}
          value={formData.serumBilirubinIndirect}
          placeholder="Indirect Bilirubin mg%"
        />
      </div>
      </div>
      <div>
        <h5>S.G.O.T</h5>
      <div className="input-group">
        <input
          type="number"
          name="sgot"
          onChange={handleChange}
          value={formData.sgot}
          placeholder="S.G.O.T (8-40IU/L)"
        />
      </div>
      </div>
      <div>
        <h5>S.G.P.T</h5>
      <div className="input-group">
        <input
          type="number"
          name="sgpt"
          onChange={handleChange}
          value={formData.sgpt}
          placeholder="S.G.P.T (upto 40IU/L)"
        />
      </div>
      </div>
      <div>
        <h5>Alkaline Phosphates</h5>
      <div className="input-group">
        <input
          type="number"
          name="alkalinePhosphates"
          onChange={handleChange}
          value={formData.alkalinePhosphates}
          placeholder="Alkaline phosphates (upto 280U/L)"
        />
      </div>
      </div>
      <div>
        <div>
      <div className="input-group">
        <input
          type="number"
          name="sodium"
          onChange={handleChange}
          value={formData.sodium}
          placeholder="sodium (135-155) (mol/l)"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="potassium"
          onChange={handleChange}
          value={formData.potassium}
          placeholder="potassium (3.5-5.0) (mol/l)"
        />
      </div>
      </div>
      </div>
      <div>
        <h5>Sputum for AFB</h5>
      <div className="input-group">
        <input
          type="number"
          name="sputum"
          onChange={handleChange}
          value={formData.sputum}
          placeholder="Sputum for AFB"
        />
      </div>
      </div>
      <div>
        <h5>Mauntox</h5>
      <div className="input-group">
        <input
          type="number"
          name="mauntox"
          onChange={handleChange}
          value={formData.mauntox}
          placeholder="Mauntox"
        />
      </div>
      </div>
      </div>
      
      <button type="submit" className="card_button">Generate PDF</button>
    </form>
  );
};

export default PdfForm;
