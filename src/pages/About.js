import React from "react";
import Container from "react-bootstrap/Container";
import { Table } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container>
        <div
          style={{
            psoition: 40,
            padding: 10,
            alignItems: "center",
          }}
        >
          <h3>Terms of Service</h3>
          <p>
            This website is operated by Arslan. Throughout the site, the terms
            “we”, “us” and “our” refer to E-Store. E-Store offers this website,
            including all information, tools and services available from this
            site to you, the user, conditioned upon your acceptance of all
            terms, conditions, policies and notices stated here.
          </p>
          <p>
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content.
          </p>
          <p>
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services. If these Terms of Service
            are considered an offer, acceptance is expressly limited to these
            Terms of Service.
          </p>
          <p>
            Any new features or tools which are added to the current store shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those changes.
          </p>
          <h3>Return and Exchange Policy</h3>
          <p>
            Customer services is always our top priority which is why we have
            the best return and exchange policy.
          </p>
          <ul>
            <li>
              We readily accept any item for exchange or refund (Not used, with
              original tags, original packaging and original seals and should
              not be worn) within 14 days.
            </li>
            <li>
              Please return goods with return form and mention the reason for
              returning the items.
            </li>
            <li>
              Customer needs to return the product via traceable delivery i.e.
              courier or registered post at their own expense to our address.
            </li>
            <li>
              Exchange Voucher of the product value will be given to the
              customer asking for an exchange.
            </li>
            <li>
              Customer can have refund of any purchased product within 14 days
              of time.
            </li>
            <li>
              All refund requests will be processed within 7 days after
              receiving the returned products.
            </li>
          </ul>
          <p>
            <strong>Invalid Reasons:</strong> Buyer no longer wants the items -
            this is the most common example which we cannot honor if we want to
            continue offering great value at Excess Exports. The buyer should
            make sure he or she wants to buy the items before submitting an
            order, not after. After an order is submitted, the buyer enters into
            a legally binding contract with the seller to purchase all items in
            that order.
          </p>
        </div>
        <h2>Delivery Charges</h2>
        <Table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Punjab</td>
              <td>$ 15</td>
            </tr>
            <tr>
              <td>Sindh</td>
              <td>$ 20</td>
            </tr>
            <tr>
              <td>Balochistan</td>
              <td>$ 25</td>
            </tr>
            <tr>
              <td>KPK</td>
              <td>$ 20</td>
            </tr>
            <tr>
              <td>GB</td>
              <td>$ 30</td>
            </tr>
            <tr>
              <td>Kashmir</td>
              <td>$ 20</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default About;
