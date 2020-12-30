import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Cart.scss";
import styled, { keyframes } from "styled-components";

class Cart extends Component {
  constructor() {
    super();
    this.state = { toggle: false };
  }
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <Nav />
        <div className="Cart">
          <div className="summaryContainer">
            <div className="summary">
              <div className="formulaSummary">
                <h2>
                  <b style={{ color: "#97d3c7" }}>wecode</b> 's unique formula
                  is ready to be created!
                </h2>
                <span>
                  Your order can be delivered as soon as <b>November 18th.</b>
                </span>
                <div className="hairtypeSummary">
                  <img src="https://www.functionofbeauty.com/store/cart/assets/img/comb.svg" />
                  <ol>
                    <li>hair profile: wavy + medium + normal</li>
                    <li>hair goals: reduce brassiness + thermal protection</li>
                  </ol>
                </div>
                <div className="fullFormula"> view full formula</div>
              </div>
            </div>
          </div>
          <div className="orderSummary">
            <div className="orderLeft">
              <div className="cartContainer">
                <h2>order Summary</h2>
                <div className="cartItemContainer">
                  <img src="../Images/cartImage.png" />
                  <div className="productDescription">
                    <h4 style={{ fontWeight: 400, fontSize: "14px" }}>
                      16oz Shampoo & 16oz Conditioner
                    </h4>
                    <div className="productDescriptionDetail">
                      <div>
                        <span>- PUMPS ×2 (FREE)</span>
                      </div>
                      <div>
                        <span>- STICKERS (FREE)</span>
                        <button>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="total">
                  <span>$49.99</span>
                </div>
                <div className="cartReceipt">
                  <div className="receiptLine">
                    <div>Subtotal</div>
                    <div>$49.99</div>
                  </div>
                  <div className="receiptLine">
                    <div>Shipping</div>
                    <div>FREE</div>
                  </div>
                  <div className="receiptLine">
                    <div>Tax</div>
                    <div>$0.00</div>
                  </div>
                  <div className="receiptLine">
                    <div>Total</div>
                    <div>$49.99</div>
                  </div>
                </div>
                <div className="promotion"> +apply promo code</div>
              </div>
              <div className="addItems">
                <div className="Item">
                  <img classNamge="Itemimg" src="../Images/pink.png" />
                  <div className="itemDesc">
                    <div>
                      take the skin quiz & get your <br />
                      customized skin regimen!
                    </div>
                    <div className="customizeBtn">CUSTOMIZE</div>
                  </div>
                </div>
                <div className="Item">
                  <img className="Itemimg" src="../Images/blue.png" />
                  <div className="itemDesc">
                    <div>7.5oz hair mask</div>
                    <div className="colorPicker">
                      <div style={{ backgroundColor: "#C5DAE7" }}></div>
                      <div style={{ backgroundColor: "#E9CBCC" }}></div>
                      <div style={{ backgroundColor: "#F0CDA5" }}></div>
                      <div style={{ backgroundColor: "#CDC8DF" }}></div>
                      <div style={{ backgroundColor: "#EDE9E6" }}></div>
                      <div style={{ backgroundColor: "#B8E8E6" }}></div>
                      <div style={{ backgroundColor: "#D6E1CD" }}></div>
                      <div style={{ backgroundColor: "#F7EECC" }}></div>
                    </div>
                    <div className="customizeBtn"> $19.99 | ADD </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="orderRight">
              <h2>Your subscription details</h2>
              <p>next order arrives on February 23rd, 2021</p>
              <p>*not charged today</p>
              <div className="subscriptionItems">
                <div className="subscriptionItem">
                  <span>16oz Shampoo & 16oz Conditioner</span>
                  <span>$49.99</span>
                </div>
                <div className="line"></div>
                <div className="subscriptionItem">
                  <span>16oz Shampoo & 16oz Conditioner</span>
                  <span>$49.99</span>
                </div>
              </div>
              <div className="subscriptionNotice">
                Manage your subscription from the account page (remove items,
                cancel, or update your profile).
              </div>
              <div className="frequencyContainer">
                <span>ships every 3 months</span>
                <span className="updateFrequency">update Frequency</span>
              </div>
              <div
                onClick={() => this.handleToggle}
                className="hiddenFrequency"
              ></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const Toggleopen = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  overflow: hidden;
  transition: height 0.5s;
  .btn {
    width: 130px;
    font-size: 10px;
    color: black;
    height: 30px;
    text-align: center;
    word-break: keep-all;
    padding-top: 6px;
    border: 1px solid lightgray;
    border-radius: 5px;
    &:hover {
      background-color: #f0f8f7;
    }
    span {
      opacity: 1;
      transition: opacity 2s;
    }
  }
  .btn2 {
    transition: height 0.5s;
    height: 0px;
    font-size: 10px;
  }
`;
export default Cart;
