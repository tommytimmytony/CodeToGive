import React from "react";
import '../styles/ChildInfoForm.css'
const ChildInfoForm = () => {
    //let tab3 = document.getElementById("tab3");
    //let tab4 = document.getElementById("tab4");
    let currentPageNumber = 0;
    const formPages = ["tab1", "tab2", "tab3"];
    /*
    for(let page in formPages){
        document.getElementsById(page).style.display = "none";
    }*/
    
    document.getElementById("tab2").style.color = "red";
    document.getElementById("tab3").style.color = "red";
    

    let currentPage = formPages[currentPageNumber];
    const showNext = () => {
        document.getElementById(formPages[currentPageNumber]).style.display = "none";
        currentPageNumber++;
        document.getElementById(formPages[currentPageNumber]).style.display = "inline";
    }

    const showPrev = () => {
        document.getElementById(formPages[currentPageNumber]).style.display = "none";
        currentPageNumber--;
        document.getElementById(formPages[currentPageNumber]).style.display = "inline";
    }
    return (
        <div className="form-container">
            <h1> Wish Child Form </h1>
            <p>We are eager to get you started on the journey to get your child's wish granted, but first we just need some information.</p>
            <form id="regForm">
                <h2>General Information</h2>
                <div className="tab1" id="tab1">
                    <label> Child First Name </label>
                    <input type="text" name="child_first" required />
                    <br/> <br />
                    <label for="child_last"> Child Last Name </label>
                    <input type="text" name="child_last" required />
                    <br /> <br />
                    <label for="dob"> Date of Birth </label>
                    <input type="date" name="dob" id="dob" min="2004-04-22" max="2022-04-22" required />
                    <br /> <br />
                    <label for="guardian_first"> Guardian First Name </label>
                    <input type="text" name="guardian_first" required />
                    <br /> <br />
                    <label for="guardian_last"> Guardian Last Name </label>
                    <input type="text" name="guardian_last" required />
                    <br /> <br />
                    <label for="phone"> Guardian Phone Number </label>
                    <input type="tel" id="pmp_phone" name="pmp_phone" pattern="^\d{3}-\d{3}-\d{4}$" required />
                    <br />
                    <br />
                    <label for="pcp_first"> PCP First Name </label>
                    <input type="text" name="pcp_first" required />
                    <br /> <br />
                    <label for="pcp_last"> PCP Last Name </label>
                    <input type="text" name="pcp_last" required />
                    <br /> <br />
                    <label for="pmp_phone"> PCP Contact </label>
                    <input type="tel" id="pmp_phone" name="pmp_phone" pattern="^\d{3}-\d{3}-\d{4}$" required />
                    <br/> <br/>
                    <label for="address">Home Address:</label>
                    <input name="address" type="address" required />
                    <br/> <br/>
                    <label for="medical-condition">Wish Child's Medical Condition:</label>
                    <input name="medical-condition" type="text"></input>
                    <br/> <br/>
                    <label for="primary-email">Email Address</label>
                    <input type="email" id="email" pattern=".+@globex\.com" required/>
                    <br/> <br/>
                </div>
                <div className="tab2" id="tab2">
                    <h3>Optional: Wish Child Favorites</h3>
                    <label for="size"> Wish Child T-Shirt Size </label>
                    <select name="size">
                        <option value="xxsmall">XXS</option>
                        <option value="xsmall">XS</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                    </select>
                    <br /> <br />
                    <label for="color">Favorite Color </label>
                    <input type="text" name="color" />
                    <br /> <br />
                    <label for="book_story">Book/Story</label>
                    <input type="text" name="book_story" />
                    <br /> <br />
                    <label for="food">Food</label>
                    <input type="food" />
                    <br /> <br />
                    <label for="subject">Subject</label>
                    <input type="text" for="subject" />
                    <br /> <br />
                    <label for="singer">Band or Singer</label>
                    <input type="text" />
                    <br /> <br />
                    <label for="movie_show">Show or Movie</label>
                    <input type="text" />
                    <br /> <br />
                    <label for="actor">Actor/Actress</label>
                    <input type="text" name="actor" />
                    <br /> <br />
                    <label for="athlete">Athlete/Sport Team</label>
                    <input type="text" name="athlete" />
                    <br /> <br />
                </div>
                <div className="tab3" id="tab3">
                    <h3>Driver Identification Information</h3>
                    <p>Many wishes involve the use of a rental vehicle. For this reason, please indicate a preferred and potential driver
                         who may be driving during the course of the wish.</p>
                    <br />
                    <label for="driver"> Preferred Driver Name </label>
                    <input type="text" name="driver" required />
                    <br /> <br />
                    <label for="license_num"> Valid D.L # </label>
                    <input type="license_num" required />
                    <br /> <br />
                    <label for="exp_date">Expiration date</label>
                    <input type="date" name="exp_date" id="exp_date" min="2023-04-22" required />
                    <br /> <br />
                    <p>Do you have current automobile insurance?</p>
                    <input className="checkbox_input" type="checkbox" for="auto_insurance_yes" />
                    <label className="checkbox_labels" for="auto_insurance_yes">Yes</label>
                    <input className="checkbox_input" type="checkbox" for="auto_insurance_no" />
                    <label className="checkbox_labels" for="auto_insurance_no">No</label>
                </div>
                <div className="buttons">
                    <div>
                        <button type="button" id="prev" onClick={showPrev}>Previous</button>
                        <button type="button" id="next" onClick={showNext}>Next</button>
                    </div>
                </div>
                <button type="submit" id="submit-button">Connect with Make-A-Wish</button>
    
            </form>
        </div>
    );
};

export default ChildInfoForm;