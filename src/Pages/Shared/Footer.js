import React from "react";
import Logo from "./Logo";
import { MdSportsMotorsports } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div
            to="/"
            className="text-2xl font-semibold uppercase flex items-center"
          >
            <MdSportsMotorsports className="mr-2 text-red-600 text-4xl" />
            PartsYard
          </div>
          <p className="text-gray-600">
            Partsyard Industries Ltd.
            <br />
            Providing reliable parts since 1967
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © 2022 - All right reserved by Partsyard Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
