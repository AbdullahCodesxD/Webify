import o from"./view.js";class viewHtml extends o{_parent=document.querySelector(".description");_HTMLObj=[{head:`
        <div class="headings">
                <!-- Main Heading -->
                <div class="parent-heading parent" data-set="mainHeading">
                  <h3>Main Heading</h3>

                  <div class="font-size">
                    <label for="h1">Font-size</label>
                    <input
                      type="number"
                      name="h1"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- Section Heading -->
                <div class="parent-heading parent" data-set="sectionHeading">
                  <h3>Section Heading</h3>

                  <div class="font-size">
                    <label for="h2">Font-size</label>
                    <input
                      type="number"
                      name="h2"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>

                  </div>
                </div>

                <!-- Sub section Heading  -->
                <div class="parent-heading parent" data-set="subHeading">
                  <h3>Sub Heading</h3>

                  <div class="font-size">
                    <label for="h3">Font-size</label>
                    <input
                      type="number"
                      name="h3"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- End -->
              </div>
        `},{para:`
    <div class="paragraphs">
                <!-- Main Heading -->
                <div class="parent-paragraph parent" data-set="mainPara">
                  <h3>Main Paragraph</h3>

                  <div class="font-size">
                    <label for="main-para">Font-size</label>
                    <input
                      type="number"
                      name="main-para"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>


                  </div>
                </div>

                <!-- Section Paragraph -->
                <div class="parent-paragraph parent" data-set="sectionPara">
                  <h3>Section Paragraph</h3>

                  <div class="font-size">
                    <label for="lead">Font-size</label>
                    <input
                      type="number"
                      name="lead"
                      placeholder="Font size.."
                      id="font"
                      min="1"
                    />
                  </div>

                  <div class="font-color">
                    <label for="color">Color</label>
                    <select name="color" id="color">
                      <option value="main">Main color</option>
                      <option value="second">Second color</option>
                      <option value="custom">Custom color</option>
                    </select>

                  </div>
                </div>

                <!-- End -->
              </div>
        `},{img:`
      <div class="images">
      <h3>Enter the url of images.</h3>

      <div id="images">
        
      </div>
    </div>
      `},{colour:`
      <div class="select-colors">
      <h3>Select Colors</h3>

      <div id="select-colors">
       
      </div>
    </div>
      `},{other:`
      <div class="other-style">
          <h3>Others</h3>

          <div id="other-style">
            <div class="links">
              <label for="font">Links font-size</label>
              <input
                type="number"
                name="a_font-size"
                id="link-font"
                min="1"
                placeholder="Font-size"
              />
            </div>

            <div class="spacing">
              <label for="section">Section Spacing</label>
              <input
                type="number"
                name="section_margin"
                id="section-spacing"
                placeholder="Space B/W Sections in px"
                min="1"
              />
            </div>

            <div class="padding">
              <label for="padding">Section Padding</label>
              <input
                type="number"
                name="section_padding"
                id="section-padding"
                placeholder="Sections padding in px"
                min="1"
              />
            </div>

            <div class="width">
              <label for="width">Section width</label>
              <input
                type="number"
                name="section_width"
                id="section-width"
                placeholder="Sections width in px"
                min="1"
              />
            </div>
          </div>
       </div>
      
      `},];checkObj=function(o){if(!this._parent)return;let e=0;this._HTMLObj.forEach((i,n)=>{let a=!1;for(let l in i)a=l===o;a&&(e=n)});let i=Object.values(this._HTMLObj[e]);i&&(this._parent.innerHTML=i)}}export default new viewHtml;