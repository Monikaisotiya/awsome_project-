import React, { useState } from "react";
import "../../css/style.css";
import "../../css/media.css";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";

import "../../css/faq.css";

const Faqs = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="FAQ">
      <Header />
      <div>
        <Accordion defaultActiveKey="0" className="mainac">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How long does it take for home delivery?
            </Accordion.Header>
            <Accordion.Body>
              We use Royal mail and DHL to send most of our UK orders. Euro Car
              Parts reserves the right to use discretion in any circumstance
              where it makes more sense to use an alternative delivery method.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What courier do you use for deliveries?
            </Accordion.Header>
            <Accordion.Body>
              We use Royal mail and DHL to send most of our UK orders. Euro Car
              Parts reserves the right to use discretion in any circumstance
              where it makes more sense to use an alternative delivery method.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Why am I being charged for delivery on my order when it states
              standard delivery is free?
            </Accordion.Header>
            <Accordion.Body>
              All our delivery charges are pre-set by our courier company. We
              sell some oversized items which require a specialist courier
              company to fulfil the delivery, there is an additional charge for
              these. Also, our courier company consider some surcharge postcodes
              ‘Out of area’. There is an additional charge for these also. You
              can find a list of all [oversized items here] You can find a list
              of all
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              I haven’t received a dispatch email/email confirmation?
            </Accordion.Header>
            <Accordion.Body>
              Please be aware an automated email is sent to you to the given
              email address when your order is dispatched. Please check all
              folders including you junk as it will come from a noreply email
              address. To ensure emails reach you, add the domain
              eurocarparts.com to your safe senders list.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              Why does it not tell us on the website that the parts will be
              delivered by the branch?
            </Accordion.Header>
            <Accordion.Body>
              Due to the delicacy of some parts we take extra care in the
              delivery of the item. These could include body panels and large
              bulky items. These are either available for collection from our
              branches or will be delivered to you through our branch network
              vehicles.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              Can I collect from a local store?
            </Accordion.Header>
            <Accordion.Body>
              We offer a reserve and collect service. This is available on the
              checkout page. Please be aware, if the product is not available in
              a local store, you are unable to reserve it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header> Do you deliver on Weekend?</Accordion.Header>
            <Accordion.Body>
              We offer a reserve and collect service. This is available on the
              checkout page. Please be aware, if the product is not available in
              a local store, you are unable to reserve it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header> Do you deliver on Weekend?</Accordion.Header>
            <Accordion.Body>
              We use Royal mail and DHL to send most of our UK orders. Euro Car
              Parts reserves the right to use discretion in any circumstance
              where it makes more sense to use an alternative delivery method.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Can you confirm you have received my return?
            </Accordion.Header>
            <Accordion.Body>
              We aim to process returns within 5-7 working days of receiving
              them. You will be notified by email once the return is complete.We
              suggest you make a note of the shipping reference given when you
              sent the item back. This will allow you to track your parcel at
              every stage of delivery, including when we receive it.Should you
              have any queries about your return, please feel free to contact
              our Customer Service team via email
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              {" "}
              How long will it be before I get a refund?
            </Accordion.Header>
            <Accordion.Body>
              Once we receive your item(s) back, our returns department will
              inspect and restock the goods. Once our returns department have
              done this, an automated refund is generated on our system. Your
              outstanding refund is then processed by our accounts department
              back to your original payment method. This process typically takes
              5-7 working days. When returning your products please remember to
              include your original invoice, without this it may delay your
              refund.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header> Who pays for return postage?</Accordion.Header>
            <Accordion.Body>
              If you are returning an unsuitable item for a refund we will
              refund the cost of the item only and not the original delivery
              cost.Should you be returning a faulty item for a refund we will
              refund both the original shipping costs and the return delivery
              costs..
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>Who pays for return postage?</Accordion.Header>
            <Accordion.Body>
              If you are returning an unsuitable item for a refund we will
              refund the cost of the item only and not the original delivery
              cost.Should you be returning a faulty item for a refund we will
              refund both the original shipping costs and the return delivery
              costs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              Why have you not refunded the original delivery charge?
            </Accordion.Header>
            <Accordion.Body>
              If you are returning an unsuitable item for a refund we will
              refund the cost of the item only and not the original delivery
              cost. Should you be returning a faulty item for a refund we will
              refund both the original shipping costs and the return delivery
              costs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              {" "}
              Do you offer a VAT discount to non EU customers?
            </Accordion.Header>
            <Accordion.Body>
              Customer’s ordering from outside the European Union can contact us
              via telephone, live chat, or e-mail and quote the order reference
              number. Our customer services team will go through the process to
              remove the VAT off of their order.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
      <a
        className="backToTop"
        href="javascript:void(0)"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i>
          <FontAwesomeIcon icon={faChevronUp} />
        </i>
      </a>
    </div>
  );
};

export default Faqs;
